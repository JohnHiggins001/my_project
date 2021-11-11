import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, StatusBar, FlatList, RefreshControl } from 'react-native';
import { HeaderTitle } from 'react-navigation-stack';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import HomeTopNavigator from '../navigator/HomeTopNavigator';
import color from '../style/colorStyle'
import NavigationBar from '../common/NavigationBar'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Storage from '../common/Storage'
import Types from '../redux/action/types'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { connect } from 'react-redux'
import CollectItem from '../common/CollectItem'

class Collect extends Component {
    static navigationOptions = {
        title: 'Welcome to the app!',
    };

    constructor(props) {
        super(props)
        this.value = '';
        this.state = {
            data: [],
            isLoading: true,
        }
    }

    componentDidMount() {
        this.loadData()
    }

    loadData = async () => {
        const { data } = this.state
        let value = ''
        value = await AsyncStorage.getItem(Types.COLLECTIONS_LIST_KEY)
        console.log('value----->', JSON.parse(value))

        this.setState({
            data: JSON.parse(value),
            isLoading: false
        })
    }

    onItemSelect(value) {
        const { navigation } = this.props
        navigation.navigate('DetailPage', { ...this.props, value })
    }

    onClick(key) {

    }

    renderItem(item) {
        return (
            <CollectItem
                key={item.item.id}
                item={item.item}
                onItemSelect={(value) => { this.onItemSelect(value) }
                }
                {...this.props}
            >
            </CollectItem>
        )
    }

    render() {
        const { data, isLoading } = this.state
        const { theme } = this.props

        let statusBar = {
            backgroundColor: theme,
            barStyle: 'light-content',
        };
        let navigationBar =
            <NavigationBar
                title={''}
                statusBar={statusBar}
            // style={theme.styles.navBar}
            />;
        return (
            <View style={styles.container}>
                {navigationBar}
                <TouchableWithoutFeedback style={[styles.item, { backgroundColor: theme }]}>

                    <TouchableOpacity
                        onPress={() => this.onClick('share')}
                    >
                        <Ionicons
                            name={'ios-share'}
                            size={26}
                            style={{
                                marginLeft: 10,
                                color: color.whiteColor,
                                textAlign: 'center',
                            }}
                        />
                    </TouchableOpacity>
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>收藏</Text>
                    <TouchableOpacity
                        onPress={() => this.onClick('share')}
                    >
                        <Ionicons
                            name={'ios-search'}
                            size={26}
                            style={{
                                marginRight: 10,
                                alignSelf: 'center',
                                color: color.whiteColor,
                            }} />
                    </TouchableOpacity>
                </TouchableWithoutFeedback>
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
                {/* <HomeTopNavigator {...this.props} /> */}

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    activityIndicator: {
        // height: 80,
        // alignItems: 'center',
        // justifyContent: 'center',
        // backgroundColor: 'transparent'
    },
    text: {
        fontSize: 13,
        textAlign: 'center'
    },
    tabStyle: {
        // minWidth: 50,
        padding: 0
    },
    indicatorStyle: {
        height: 2,
        backgroundColor: 'white',
    },
    labelStyle: {
        fontSize: 13,
        marginTop: 6,
        marginBottom: 6,
    },
    item: {
        // backgroundColor: color.activeBarColor,
        // height: 90,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingBottom: 15,
    },
    groupTitle: {
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 5,
        fontSize: 12,
        color: 'gray',
    },
})

const mapStateToProps = state => ({
    theme: state.theme.theme
});
export default connect(mapStateToProps)(Collect)
