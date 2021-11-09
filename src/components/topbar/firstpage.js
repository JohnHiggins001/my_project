import React, { Component } from 'react'
import { View, Text, StatusBar, Button, TouchableOpacity } from 'react-native';
import FriendPage from './friendpage';

export default class firstPage extends Component {
    render() {
        return (
            <View >
                <StatusBar
                    networkActivityIndicatorVisible={true}
                    barStyle='dark-content'
                    hidden={false}
                    translucent={true} />
                {/* <Button title='跳转到聊天tab页' onPress={() => { this.props.navigation.navigate('chat') }}></Button> */}
            </View>
        )
    }
}
