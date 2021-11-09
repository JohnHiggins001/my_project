import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default class Collect extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Collect页面</Text>
                <Text style={{ textAlign: 'center' }} onPress={() => this.props.navigation.navigate('DetailPage', {
                    name: 'dsad', sex: 'sd', age: 19
                })}>跳转到详情页面</Text>
            </View>
        )
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