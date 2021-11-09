import React, { Component } from 'react'
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import firstpage from './firstpage';
import chatpage from './chatpage';
import friendpage from './friendpage';
import listpage from './listpage';
import mypage from './mypage';
import color from '../../../js/style/colorStyle'

const TabNavigator = createBottomTabNavigator(
    {
        firstpage: {
            screen: firstpage,
            navigationOptions:
            {
                tabBarLabel: '首页',
                tabBarIcon: ({ tintColor, focused }) => (
                    <Ionicons name={focused ? "ios-home" : "ios-home-outline"}
                        size={26}
                        style={{ color: tintColor }} />
                )
            }
        },
        friendpage: {
            screen: friendpage,
            navigationOptions: {
                tabBarLabel: '朋友圈',
                tabBarIcon: ({ tintColor, focused }) => (
                    <Ionicons
                        name={focused ? "ios-male-female" : "ios-male-female-outline"}
                        size={26}
                        style={{ color: tintColor }}
                    />
                )
            }
        },
        listpage: {
            screen: listpage,
            navigationOptions: {
                tabBarLabel: '列表页',
                tabBarIcon: ({ tintColor, focused }) => (
                    <Ionicons
                        name={focused ? "ios-list" : "ios-list-outline"}
                        size={26}
                        style={{ color: tintColor }}
                    />
                )
            }
        },
        chat: {
            screen: chatpage,
            navigationOptions: {
                tabBarLabel: '聊天',
                tabBarIcon: ({ tintColor, focused }) => (
                    <Ionicons
                        name={focused ? "ios-chatbox" : "ios-chatbox-outline"}
                        size={26}
                        style={{ color: tintColor }}
                    />
                )
            }
        },
        mypage: {
            screen: mypage,
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
        }
    }
)

export default createAppContainer(TabNavigator)