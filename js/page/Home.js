import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, StatusBar, } from 'react-native';
import { HeaderTitle } from 'react-navigation-stack';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import HomeTopNavigator from '../navigator/HomeTopNavigator';
import color from '../style/colorStyle'
import NavigationBar from '../common/NavigationBar'
import Ionicons from 'react-native-vector-icons/Ionicons';

class Home extends Component {
    static navigationOptions = {
        title: 'Welcome to the app!',
    };

    constructor(props) {
        super(props)
        this.value = '';
    }

    onClick(key) {

    }

    render() {
        let statusBar = {
            backgroundColor: color.activeBarColor,
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
                <TouchableWithoutFeedback style={styles.item}>

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
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>技术栈</Text>
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

                <HomeTopNavigator {...this.props} />
                {/* <View style={{ justifyContent: 'center', alignSelf: 'center', }}>
                    <Text style={{ textAlign: 'center' }} onPress={() => this.props.navigation.navigate('DetailPage', {
                        name: 'dsad', sex: 'sd', age: 19
                    })}>跳转到详情页面</Text>
                    <Text style={{ textAlign: 'center', }} onPress={() => this.props.navigation.navigate('FetchDemoPage', {
                        name: 'dsad', sex: 'sd', age: 19
                    })}>跳转到网络请求页面</Text>
                </View> */}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        backgroundColor: color.activeBarColor,
        // height: 90,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    groupTitle: {
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 5,
        fontSize: 12,
        color: 'gray',
    },
})


export default Home
