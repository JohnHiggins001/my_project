import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, FlatList, RefreshControl, ActivityIndicator, } from 'react-native';
import { connect } from 'react-redux';
import actions from '../../redux/action';
import HomeItem from '../../common/HomeItem'
import color from '../../style/colorStyle'
const homeListUrl = `https://api.github.com/search/repositories?q=`;
const query_star = '&sort=starts'
class HomeTopTab extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        this.tabName = props.tabLabel
        // this.onItemSelect = this.onItemSelect.bind(this)
    }

    componentDidMount() {
        this.loadData()
    }

    loadData() {
        let homeListUrl = `https://api.github.com/search/repositories?q=${this.tabName}`;
        const { onHomeListRefreshing } = this.props
        let url = this.getUrl(this.tabName)
        onHomeListRefreshing(this.tabName, url)
    }

    getUrl(key) {
        return homeListUrl + key + query_star;
    }

    onItemSelect(value) {
        const { navigation, onItemSelect } = this.props
        // navigation.navigate('DetailPage')
        onItemSelect([...this.props, value]);
        console.log('value-->', value);
    }

    renderItem(item) {
        return (
            <HomeItem
                key={item.item.id}
                item={item.item}
                onItemSelect={(value) => { this.onItemSelect.call(this, value) }
                }
                {...this.props}
            >
            </HomeItem>
        )
    }

    render() {
        let data = this.props.home && this.props.home[this.tabName] && this.props.home[this.tabName].items
        let isLoading = this.props.home && this.props.home[this.tabName] && this.props.home[this.tabName] && this.props.home[this.tabName].isLoading
        const { theme } = this.props
        console.log('this.props--->', this.props);

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
                            titleColor={theme}
                            colors={[theme]}
                            refreshing={isLoading}
                            onRefresh={() => this.loadData()}
                            tintColor={theme}
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
    home: state.home,
})
const mapDispatchToProps = dispatch => ({
    onHomeListRefreshing: (tabName, url) => dispatch(actions.onHomeListRefreshing(tabName, url))
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeTopTab)
