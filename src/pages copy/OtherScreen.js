
import React from 'react';
import {
    View, Button,
    StatusBar, TouchableOpacity,
    StyleSheet, ActivityIndicator,
} from 'react-native';
import styles from '../common/styles';

export default class OtherScreen extends React.Component {
    static navigationOptions = {
        title: 'Lots of features here',
    };

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={{ borderRadius: 8, backgroundColor: 'black', height: 50, marginBottom: 15, marginLeft: 15, marginRight: 15, marginTop: 10, padding: 5 }}
                    onPress={this._jumpToHomeScreen}
                >
                    <Button color='white' title="go to home Screen" onPress={this._jumpToHomeScreen} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ borderRadius: 8, backgroundColor: 'black', height: 50, marginBottom: 15, marginLeft: 15, marginRight: 15, marginTop: 10, padding: 5 }}
                    onPress={this._jumpToSectionListScreen}
                >
                    <Button color='white' title="go to section List Screen" onPress={this._jumpToSectionListScreen} />

                </TouchableOpacity>
                <TouchableOpacity
                    style={{ borderRadius: 8, backgroundColor: 'black', height: 50, marginBottom: 15, marginLeft: 15, marginRight: 15, marginTop: 10, padding: 5 }}
                    onPress={this._jumpToNavScreen}
                >
                    <Button color='white' title="go to nav Screen" onPress={this._jumpToNavScreen} />

                </TouchableOpacity>
                <TouchableOpacity
                    style={{ borderRadius: 8, backgroundColor: 'black', height: 50, marginBottom: 15, marginLeft: 15, marginRight: 15, marginTop: 10, padding: 5 }}
                    onPress={this._jumpToBottomTabScreen}
                >
                    <Button color='white' title="go to bottom Tab Screen" onPress={this._jumpToBottomTabScreen} />

                </TouchableOpacity>
                <TouchableOpacity
                    style={{ borderRadius: 8, backgroundColor: 'black', height: 50, marginBottom: 15, marginLeft: 15, marginRight: 15, marginTop: 10, padding: 5 }}
                    onPress={this._jumpToTopTabScreen}
                >
                    <Button color='white' title="go to top Tab Screen" onPress={this._jumpToTopTabScreen} />

                </TouchableOpacity>
                <StatusBar barStyle="default" />
            </View>
        );
    }

    _jumpToHomeScreen = async () => {
        // await AsyncStorage.clear();
        // this.props.navigation.navigate('Austh');
        this.props.navigation.navigate('Home', {
            name: '首页',
            mode: 'edit',
        });
    };

    _jumpToSectionListScreen = async () => {
        // await AsyncStorage.clear();
        // this.props.navigation.navigate('Austh');
        this.props.navigation.navigate('Section', {
            name: 'Section页面',
            mode: 'edit',
        });
    };

    _jumpToNavScreen = async () => {
        // await AsyncStorage.clear();
        // this.props.navigation.navigate('Austh');
        this.props.navigation.navigate('NavScreen', {
            name: 'Nav页面',
            mode: 'edit',
        });
    };

    _jumpToBottomTabScreen = () => {
        this.props.navigation.navigate('BottomTabsPage', {
            name: 'bottomTab页面',
            mode: 'edit',
        })
    }

    _jumpToTopTabScreen = () => {
        this.props.navigation.navigate('TopTabsPage', {
            name: 'topTab页面',
            mode: 'edit',
        })
    }
}
