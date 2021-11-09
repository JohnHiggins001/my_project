import 'react-native-gesture-handler';
import React, { Component } from 'react'
import { View, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import HomeTab from '../page/hometabs/HomeTab'
import color from '../style/colorStyle'

const styles = StyleSheet.create({
    tabStyle: {
        minWidth: 50,
        textAlign: 'center'
    },
    indicatorStyle: {
        height: 2,
        backgroundColor: 'white'
    },
    labelStyle: {
        fontSize: 13,
        marginTop: 6,
        marginBottom: 6,
    }
})
const HomeTopNavigator = createAppContainer(createMaterialTopTabNavigator(
    {
        homeTab: {
            screen: HomeTab,
            navigationOptions: {
                title: 'tab1'
            }
        },
        homeTab2: {
            screen: HomeTab2,
            navigationOptions: {
                title: 'tab2'
            }
        },
        homeTab3: {
            screen: HomeTab3,
            navigationOptions: {
                title: 'tab3'
            }
        },
        homeTab4: {
            screen: HomeTab4,
            navigationOptions: {
                title: 'tab4'
            }
        },
        homeTab5: {
            screen: HomeTab5,
            navigationOptions: {
                title: 'tab5'
            }
        },
    },
    {
        animationEnabled: true,
        tabBarOptions: {
            tabStyle: styles.tabStyle,
            upperCaseLabel: false,
            scrollEnabled: true,
            style: {
                backgroundColor: color.activeBarColor
            },
            indicatorStyle: styles.indicatorStyle,
            labelStyle: styles.labelStyle
        },
        lazy: true
    }
))



export default createAppContainer(HomeTopNavigator)