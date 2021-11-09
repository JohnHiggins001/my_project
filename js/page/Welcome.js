import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';

export default class Welcome extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.timer = setTimeout(() => {
            //跳转到首页
        }, 2000)
    }

    componentWillUnmount() {
        //页面销毁时候 清空计时器
        this.timer && clearTimeout(this.timer)
    }

    _toHomePage = () => {
        setTimeout(() => {
            this.props.navigation.navigate('MainPage')
        }, 200)
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this._toHomePage()}>
                    <Text style={styles.text}>WelcomePage页面</Text>
                </TouchableOpacity>
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

    }
})