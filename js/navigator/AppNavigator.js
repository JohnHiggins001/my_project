import 'react-native-gesture-handler';
import React, { Component } from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MainNavigator from '../../js/navigator/MainNavigator'
import WelcomePage from '../../js/page/Welcome'
import DetailPage from '../../js/page/DetailPage'
import FetchDemoPage from '../../js/page/FetchDemo'

const MainStack = createStackNavigator({
    MainNav: {
        screen: MainNavigator,
        navigationOptions: {
            title: ' ',
            // headerBackTitle: '222back',
            header: null,
        }
    },
    DetailPage: {
        screen: DetailPage,
        navigationOptions: {
            // title: '',
            // headerBackTitle: ' ',
            header: null,
        }
    },
    FetchDemoPage: {
        screen: FetchDemoPage,
        navigationOptions: {
            title: '网络请求',
            headerBackTitle: ' ',
            header: null,
        }
    },
})

const SwitchStack = createSwitchNavigator({
    Welcome: WelcomePage,
    MainPage: MainStack,
},
    {
        initialRouteName: 'Welcome',
    }
)

export default createAppContainer(SwitchStack);
