import 'react-native-gesture-handler';
import React, { Component } from 'react'
import { View, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import SearchTopTab from '../page/searchtabs/index'
import color from '../style/colorStyle'

const tabNames = ['All', 'C#', 'php', 'Python', 'Objective-C'];

export default class TopNavigator extends Component {
    constructor(props) {
        super(props)
    }


    createTabs() {
        const tabs = {}
        const { keys, theme, navigation } = this.props;
        tabNames.forEach((item, index) => {
            tabs[`tab${index}`] = {
                screen: props => <SearchTopTab  {...props} tabLabel={item} theme={theme} onItemSelect={(value) => { navigation.navigate('DetailPage', { ...this.props, value, }) }} />,
                navigationOptions: {
                    title: item,

                }
            }
        })
        // console.log('tabs--->', tabs)
        return tabs;
    }

    render() {
        const SearchTopNavigator = createAppContainer(createMaterialTopTabNavigator(
            this.createTabs(),
            {
                swipeEnabled: false,
                animationEnabled: false,
                tabBarOptions: {
                    activeTintColor: color.activeTopBarColor,
                    activeTintColor: color.inActiveTopBarColor,
                    scrollEnabled: true,
                    tabStyle:
                    {
                        minWidth: 50,

                    },
                    upperCaseLabel: false,
                    style: { backgroundColor: color.activeBarColor },
                    indicatorStyle: {
                        height: 2,
                        backgroundColor: color.whiteColor
                    },
                    labelStyle: {
                        fontSize: 16,
                        fontWeight: 'bold'
                        //  paddingTop: 10,
                    }
                }

            }
,
        ))
        return (
            <SearchTopNavigator />
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

