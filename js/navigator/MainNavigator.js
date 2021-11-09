import 'react-native-gesture-handler';
import React, { Component } from 'react'
import { Button } from 'react-native'
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
        tabBarOptions: {
            upperCaseLabel: false,//是否使标签大写，默认为true
            //共有属性
            showIcon: true,//是否显示图标，默认关闭
            showLabel: true,//是否显示label，默认开启
            activeTintColor: color.activeBarColor,//label和icon的前景色 活跃状态下（选中）
            // inactiveTintColor: 'gray',//label和icon的前景色 活跃状态下（未选中）
            style: { //TabNavigator 的背景颜色
                // backgroundColor: 'white',
                // height: 55,
            },
            indicatorStyle: {//标签指示器的样式对象（选项卡底部的行）。安卓底部会多出一条线，可以将height设置为0来暂时解决这个问题
                // height: 0,
            },
            labelStyle: {//文字的样式
                // fontSize: 13,
                // marginTop: 5,
                // marginBottom: 5,
            },
            iconStyle: {//图标的样式
                // marginBottom: 5,
            }
        },
        // tabBarComponent: RecodingBottomBar
        tabBarComponent: props => {
            return <RecodingBottomBars theme={props.theme} {...props} />
        }
    },
)

export default createAppContainer(MainNavigator)
