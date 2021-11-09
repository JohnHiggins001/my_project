import React, { Component } from 'react';
import { DeviceEventEmitter, StyleSheet, View, Text, Button, FlatList, RefreshControl, ActivityIndicator, } from 'react-native';
import { connect } from 'react-redux';
import actions from '../../redux/action';
import Types from '../../redux/action/types';
import SearchItem from '../../common/SearchItem'
import color from '../../style/colorStyle'

const SearchListUrl = `https://github.com/trending/`;
const THEME_COLOR = color.activeBarColor;


class SearchTopTab extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        this.tabName = props.tabLabel
        this.query_star = '?since=daily'

    }

    componentDidMount() {
        this.loadData()
        DeviceEventEmitter.addListener(Types.TEST_DEVICE_EMMIT, (param) => {
            console.log('接收到监听传来的参数---->', param)
        })
    }

    loadData() {
        const { onSearchListRefreshing } = this.props
        let queryStarType = this.props.search && this.props.search.queryStarType
        let isNeedRefresh = this.props.search && this.props.search.isNeedRefresh

        if (isNeedRefresh && isNeedRefresh == 'noNeed') {//不需要刷新

        } else {
            this.query_star = queryStarType ? `?since=${queryStarType}` : this.query_star
            let url = this.getUrl(this.tabName)
            onSearchListRefreshing(this.tabName, url)
        }
    }

    getUrl(key) {
        return SearchListUrl + key + this.query_star;
    }

    onItemSelect(value) {
        const { navigation, onItemSelect } = this.props
        // navigation.navigate('DetailPage')
        onItemSelect(value);
        console.log('value-->', value);
    }

    renderItem(item) {
        return (
            <SearchItem
                item={item.item}
                onItemSelect={(value) => { this.onItemSelect(value) }
                }
            >
            </SearchItem>
        )
    }

    render() {
        let data = this.props.search && this.props.search[this.tabName] && this.props.search[this.tabName].items
        let isLoading = this.props.search && this.props.search[this.tabName] && this.props.search[this.tabName] && this.props.search[this.tabName].isLoading
        // console.log('this.searchPage --- props--->', this.props);

        return (
            <View style={styles.container}>
                {/* <Text style={styles.text}>{`tab标签是--->${this.tabName}`}</Text> */}
                {/* <ActivityIndicator
                    animating={false}
                    color='#FFF'
                    size="large"
                    hidesWhenStopped={true}
                    style={styles.activityIndicator}
                /> */}
                <FlatList
                    data={data}
                    renderItem={(item) => this.renderItem(item)}
                    keyExtractor={item => "" + item.id}
                    refreshControl={
                        <RefreshControl
                            title={'loading....'}
                            titleColor={THEME_COLOR}
                            colors={[THEME_COLOR]}
                            refreshing={isLoading}
                            onRefresh={() => this.loadData()}
                            tintColor={THEME_COLOR}
                        />
                    }
                ></FlatList>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.backgroundColor
    },
    text: {
        fontSize: 13,
        textAlign: 'center'
    },
    activityIndicator: {
        // height: 80,
        // alignItems: 'center',
        // justifyContent: 'center',
        // backgroundColor: 'transparent'
    }
})

const mapStateToProps = state => ({
    search: state.search,
})
const mapDispatchToProps = dispatch => ({
    onSearchListRefreshing: (tabName, url) => dispatch(actions.onSearchListRefreshing(tabName, url))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchTopTab)
