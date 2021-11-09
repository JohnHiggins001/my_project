import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { BottomTabBar } from 'react-navigation-tabs';


export default class TabBarComponent extends Component {
    constructor(props) {
        super(props)
        this.theme = {
            tintColor: props.activeTintColor,
            updateTime: new Date().getTime(),
        }
    }

    render() {
        const { routes, index } = this.props.navigation.state;
        if (routes[index].params) {
            const { theme } = routes[index].params;
            if (theme && theme.updateTime > this.theme.updateTime) {
                this.theme = theme;
            }
        }
        return <BottomTabBar
            {...this.props}
            activeTintColor={this.theme.tintColor || this.props.activeTintColor}
        />
    }


}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    text: {
        fontSize: 13,
        textAlign: 'center'
    }
})