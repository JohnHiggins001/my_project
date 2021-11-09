import 'react-native-gesture-handler';
import React, { Component } from 'react'
import { Button, Dimensions, View } from 'react-native'
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
// import createBottomTabNavigator from '@react-navigation/bottom-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Home from '../page/Home'
import Search from '../page/Search'
import Collect from '../page/Collect'
import Me from '../page/Me'
import RecodingBottomBars from './ReCodingBottomBars';
import color from '../style/colorStyle'

const MainNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                title: '首页',
                tabBarLabel: '首页',
                tabBarIcon: ({ tintColor, focused }) => (
                    <Ionicons name={focused ? "ios-information-circle" : "ios-information-circle-outline"}
                        size={26}
                        style={{ color: tintColor }} />
                )
            }
        },
        Search: {
            screen: Search,
            navigationOptions: {
                title: '搜索',
                tabBarLabel: '搜索',
                tabBarIcon: ({ tintColor, focused }) => (
                    <Ionicons
                        name={focused ? "ios-search" : "ios-search-outline"}
                        size={26}
                        style={{ color: tintColor }}
                    />
                )
            }
        },

        Collect: {
            screen: Collect,
            navigationOptions: {
                tabBarLabel: '收藏',
                tabBarIcon: ({ tintColor, focused }) => (
                    <Ionicons
                        name={focused ? "ios-chatbox" : "ios-chatbox-outline"}
                        size={26}
                        style={{ color: tintColor }}
                    />
                )
            }
        },
        Me: {
            screen: Me,
            navigationOptions: {
                tabBarLabel: '我的',
                tabBarIcon: ({ tintColor, focused }) => (
                    <Ionicons
                        // name={focused ? "ios-home" : 'ios-home-outline'}
                        name={focused ? "ios-medal" : "ios-medal-outline"}
                        size={26}
                        style={{ color: tintColor }}
                    />
                )
            }
        },

    },
    {
        animationEnabled: true,
        swipeEnabled: false,
        swipeEnabled: true,//是否可以滑动切换
        animationEnabled: true,//切换是否有动画
        initialRouteName: 'Home', //进入App的首页面
        backBehavior: 'none', // 按 back 键是否跳转到第一个 Tab， none 为不跳转
        tabBarOptions: { //对于导航的设置
            indicatorStyle: { height: 0 },  //android特有下划线的颜色1
            inactiveTintColor: '#a9a9a9', // 文字和图片默认颜色
            activeTintColor: color.activeBarColor,
            labelStyle: {     //文字的样式
                fontSize: 10,
                textAlign: 'center',
            },
            style: {    //对于导航的stytles
                backgroundColor: color.whiteColor, // TabBar 背景色
                borderTopColor: '#ebebeb',
                borderTopWidth: 1,
                height: Dimensions.get('window').height * 0.08,
                height: 50
            }
        },
        navigationOptions: ({ navigation }) => ({
            // title: navigation.state.routeName,
            headerStyle: { backgroundColor: color.whiteColor, },
            headerTintColor: color.activeBarColor,
            headerTitleStyle: { fontWeight: 'bold', },
        }),
        mode: 'card',
        // tabBarComponent: RecodingBottomBar
        tabBarComponent: props => {
            return <RecodingBottomBars theme={props.theme} {...props} />
        }
    },
)

// MainNavigator.navigationOptions = ({ navigation }) => {
//     let { routeName } = navigation.state.routes[navigation.state.index];
//     // You can do whatever you like here to pick the title based on the route name
//     let headerTitle = routeName;
//     headerTitle = <View>
//         <Text style={{ textAlign: 'center' }}>title标题栏</Text>
//     </View>
//     return {
//         headerTitle,
//     };
// };

export default createAppContainer(MainNavigator)
