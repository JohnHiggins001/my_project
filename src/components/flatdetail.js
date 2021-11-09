
import React, { Component } from "react";
import { FlatList, Button, Text, Dimensions, StyleSheet, View } from "react-native";
const { width, height } = Dimensions.get('window')
export default class Index extends Component {
    // 构造
    constructor(props) {
        super(props);
    }
    refreshing() {
        let timer = setTimeout(() => {
            clearTimeout(timer)
            alert('刷新成功')
        }, 1500)
    }
    _onload() {
        let timer = setTimeout(() => {
            clearTimeout(timer)
            alert('加载成功')
        }, 1500)
    }
    render() {
        var data = [];
        for (var i = 0; i < 100; i++) {
            data.push({ key: i, title: i + '' });
        }

        return (
            <View style={{ flex: 1 }}>
                <Text>详情页面</Text>
            </View>
        );
    }

}
const styles = StyleSheet.create({
    container: {

    },
    content: {
        width: width,
        height: height,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cell: {
        height: 100,
        backgroundColor: 'purple',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: '#ececec',
        borderBottomWidth: 1

    },
    txt: {
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white',
        fontSize: 30,
    }

})