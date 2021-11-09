
import React from 'react';
import {
    View, Button, Linking,
    StatusBar, TouchableOpacity,
    StyleSheet, ActivityIndicator, Platform,
} from 'react-native';
import styles from '../common/styles';

export default class OtherScreen extends React.Component {

    constructor(props) {
        super(props)
    }

    static navigationOptions = {
        title: 'Lots of features here',
    };

    componentDidMount() {
        if (Platform.OS === 'android') {
            Linking.getInitialURL().then(url => {
                this.navigate(url);
            });
        } else {
            Linking.addEventListener('url', this.handleOpenURL);
        }
    }

    componentWillUnmount() {
        Linking.removeEventListener('url', this.handleOpenURL);
    }

    navigate = url => {
        const { navigate } = this.props.navigation;
        const route = url.replace(/.*?:\/\//g, '');

        const routeName = route.split('/')[0];
        if (routeName === 'form') {
            navigate('Form');
        }
    };

    handleOpenURL = event => {
        console.log(event.url)
        this.navigate(event.url);
    };

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={{ borderRadius: 8, backgroundColor: 'black', height: 50, marginBottom: 15, marginLeft: 15, marginRight: 15, marginTop: 10, padding: 5 }}
                    onPress={this._jumpToWhichScreen.bind(this, 'home')}
                >
                    <Button color='white' title="go to home Screen" onPress={this._jumpToWhichScreen.bind(this, 'home')} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ borderRadius: 8, backgroundColor: 'black', height: 50, marginBottom: 15, marginLeft: 15, marginRight: 15, marginTop: 10, padding: 5 }}
                    onPress={this._jumpToWhichScreen.bind(this, 'section')}
                >
                    <Button color='white' title="go to section List Screen" onPress={this._jumpToWhichScreen.bind(this, 'section')} />

                </TouchableOpacity>
                <TouchableOpacity
                    style={{ borderRadius: 8, backgroundColor: 'black', height: 50, marginBottom: 15, marginLeft: 15, marginRight: 15, marginTop: 10, padding: 5 }}
                    onPress={this._jumpToWhichScreen.bind(this, 'nav')}
                >
                    <Button color='white' title="go to nav Screen" onPress={this._jumpToWhichScreen.bind(this, 'nav')} />

                </TouchableOpacity>
                <TouchableOpacity
                    style={{ borderRadius: 8, backgroundColor: 'black', height: 50, marginBottom: 15, marginLeft: 15, marginRight: 15, marginTop: 10, padding: 5 }}
                    onPress={this._jumpToWhichScreen.bind(this, 'bottomTab')}
                >
                    <Button color='white' title="go to bottom Tab Screen" onPress={this._jumpToWhichScreen.bind(this, 'bottomTab')} />

                </TouchableOpacity>
                <TouchableOpacity
                    style={{ borderRadius: 8, backgroundColor: 'black', height: 50, marginBottom: 15, marginLeft: 15, marginRight: 15, marginTop: 10, padding: 5 }}
                    onPress={this._jumpToWhichScreen.bind(this, 'topTab')}
                >
                    <Button color='white' title="go to top Tab Screen" onPress={this._jumpToWhichScreen.bind(this, 'topTab')} />

                </TouchableOpacity>

                <StatusBar barStyle="default" />
            </View>
        );
    }

    _jumpToWhichScreen(type) {
        console.log('type--->', type)
        const { navigation } = this.props
        switch (type) {
            case 'home':
                navigation.navigate('Home', {
                    name: '首页',
                    mode: 'edit',
                });
                break;
            case 'section':
                navigation.navigate('Section', {
                    name: 'Section页面',
                    mode: 'edit',
                });
                break;
            case 'nav':
                navigation.navigate('NavScreen', {
                    name: 'Nav页面',
                    mode: 'edit',
                });
                break;
            case 'bottomTab':
                navigation.navigate('BottomTabsPage', {
                    name: 'bottomTab页面',
                    mode: 'edit',
                })
                break;
            case 'topTab':
                navigation.navigate('TopTabsPage', {
                    name: 'topTab页面',
                    mode: 'edit',
                })
                break;
            default: break;
        }
    };

}
