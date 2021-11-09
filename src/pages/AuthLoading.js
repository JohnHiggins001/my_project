import React from 'react';
import {
    View, Button,
    StatusBar, AsyncStorage,
    StyleSheet, ActivityIndicator,
} from 'react-native';
import styles from '../common/styles';

export default class AuthLoadingScreen extends React.Component {
    constructor() {
        super();
        this._bootstrapAsync();
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('userToken');

        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        console.log('userToken-->', userToken);
        this.props.navigation.navigate(userToken ? 'Auth' : 'App');
    };

    // Render any loading content that you like here
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}