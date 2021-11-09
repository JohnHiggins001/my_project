import 'react-native-gesture-handler';
import React, { Component } from 'react'
import { View, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import HomeTopTab from '../page/hometabs/HomeTopTab'
import TopTabs from '../../src/components/topbar/toptabs';
import color from '../style/colorStyle'

export default class TopNavigator extends Component {
    constructor(props) {
        super(props)
        this.tabNames = ['java', 'Android', 'ios', 'C++', 'C#', 'Php', 'Oracle', 'JavaScript']
    }

    createTabs() {
        const tabs = {}
        const { keys, theme } = this.props;
        this.tabNames.forEach((item, index) => {
            tabs[`tab${index}`] = {
                screen: props => <HomeTopTab {...props} tabLabel={item} theme={theme} />,
                navigationOptions: {
                    title: item,
                }
            }
        })
        // console.log('tabs--->', tabs)
        return tabs;
    }

    render() {
        const HomeTopNavigator = createAppContainer(createMaterialTopTabNavigator(
            this.createTabs(),
            {
                swipeEnabled: false,
                animationEnabled: false,
                tabBarOptions: {
                    activeTintColor: color.activeTopBarColor,
                    inactiveTintColor: "#f9f9f9",
                    scrollEnabled: true,
                    tabStyle:
                    {
                        minWidth: 50,
                    },
                    upperCaseLabel: false,
                    style: { backgroundColor: color.topBarbackgroundColor },
                    indicatorStyle: {
                        height: 2,
                        backgroundColor: color.whiteColor
                    },
                    labelStyle: {
                        fontSize: 14,
                        //  paddingTop: 10,
                    }
                }

            }

        ))
        return (
            <HomeTopNavigator />
        );

    }
}
const styles = StyleSheet.create({
    tabStyle: {
        minWidth: 20,
    },
    indicatorStyle: {
        backgroundColor: "white",
        height: 2,
    },
    labelStyle: {
        fontSize: 13,
        marginTop: 6,
        marginBottom: 6,
    }
})
