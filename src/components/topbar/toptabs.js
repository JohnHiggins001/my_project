import React, { Component } from 'react'
import { Text } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons'
import firstpage from './firstpage';
import chatpage from './chatpage';
import friendpage from './friendpage';
import listpage from './listpage';
import mypage from './mypage';

const TabNavigator = createMaterialTopTabNavigator(
    {
        firstpage: {
            screen: firstpage,
            navigationOptions:
            {
                tabBarLabel: '首页',
                tabBarIcon: ({ tintColor, focused }) => {
                    <Icon
                        name="ios-add"
                        size={26}
                        style={{ color: tintColor }}
                    />
                }
            }
        },
        friendpage: {
            screen: friendpage,
            navigationOptions: {
                tabBarLabel: '朋友圈',
                tabBarIcon: ({ tintColor, focused }) => {
                    <Icon
                        name={'ios-people'}
                        size={26}
                        style={{ color: tintColor }}
                    />
                }
            }
        },
        listpage: {
            screen: listpage,
            navigationOptions: {
                tabBarLabel: '列表页',
                tabBarIcon: ({ tintColor, focused }) => {
                    <Icon
                        name={'ios-people'}
                        size={26}
                        style={{ color: tintColor }}
                    />
                }
            }
        },
        chat: {
            screen: chatpage,
            navigationOptions: {
                tabBarLabel: '聊天',
                tabBarIcon: ({ tintColor, focused }) => {
                    <Icon
                        name={'ios-people'}
                        size={26}
                        style={{ color: tintColor }}
                    />
                }
            }
        },
        mypage: {
            screen: mypage,
            navigationOptions: {
                tabBarLabel: '我的',
                // tabBarLabel: ({ tintColor, focused }) => (
                //     <Text style={{ color: focused ? 'white' : 'black' }}></Text>
                // ),
                tabBarIcon: ({ tintColor, focused }) => (
                    <Icon
                        name={'ios-people'}
                        size={26}
                        style={{ color: tintColor }}
                    />
                ),
            }
        },
    },
    {
        swipeEnabled: false,
        animationEnabled: false,
        tabBarOptions: {
            // activeTintColor: 'red'
            scrollEnabled: true,
            tabStyle:
            {
                minWidth: 50,

            },
            upperCaseLabel: false,
            style: { backgroundColor: '#879' },
            indicatorStyle: {
                height: 2,
                backgroundColor: 'white'
            },
            labelStyle: {
                fontSize: 13,
                //  paddingTop: 10,
            }
        }
    }
)

export default createAppContainer(TabNavigator)