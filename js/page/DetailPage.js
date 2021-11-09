import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, Alert } from 'react-native';
import { WebView } from 'react-native-webview';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import NavigationBar from '../common/NavigationBar';
import ViewUtil from '../common/ViewUtil';
import color from '../style/colorStyle'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons';

const baseUrl = 'https://github.com/'
export default class DetailPage extends Component {
    constructor(props) {
        super(props)
        this.value = props.navigation.state.params.value
        this.title = this.value.type == 'search' ? (this.value.fullName || this.value.url) : (this.value.full_name || this.value.archive_url)
        this.url = this.value.type == 'search' ? `${baseUrl}${this.value.fullName}` : (this.value.html_url || `${baseUrl}${this.value.full_name}`)
        this.state = {
            title: this.title,
            url: this.url,
            canGoBack: false,
        }
    }

    onShareBtnClick() {

    }

    renderRightButton() {
        return (
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    onPress={() => {

                    }}

                >
                    <FontAwesome
                        name={'star-o'}
                        size={20}
                        style={{ color: 'white', marginRight: 10 }}
                    />
                </TouchableOpacity>
                {
                    ViewUtil.getShareButton(() => this.onShareBtnClick())
                }
            </View>
        )
    }

    callBack() {
        const { navigation, canGoBack } = this.props
        navigation.goBack()
    }

    onNavigationStateChange(navState) {
        this.setState({
            canGoBack: navState.canGoBack,
            url: navState.url
        })
    }
    render() {
        const { title, url } = this.state
        console.log('url--->', url)
        let statusBar = {
            backgroundColor: color.activeBarColor,
            barStyle: 'light-content',
        };
        let navigationBar =
            <NavigationBar
                // title={title}
                statusBar={statusBar}
            // leftButton={ViewUtil.getLeftButton(() => this.callBack())}
            // rightButton={this.renderRightButton}
            // style={theme.styles.navBar}
            />;
        return (
            <View style={styles.container}>
                {navigationBar}
                <TouchableWithoutFeedback
                    underlayColor={{ opacity: 1, color: '' }}
                    style={styles.item}>

                    <TouchableOpacity onPress={() => this.callBack()}>
                        <Ionicons
                            name={'ios-arrow-back'}
                            size={26}
                            style={{ color: 'white' }}
                        />
                    </TouchableOpacity>
                    <Text numberOfLines={1} style={{ marginLeft: 15, marginRight: 15, flex: 1, color: 'white', fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>{title}</Text>
                    <TouchableOpacity
                        onPress={() => {

                        }}

                    >
                        <FontAwesome
                            name={'star-o'}
                            size={20}
                            style={{ color: 'white', marginRight: 10 }}
                        />
                    </TouchableOpacity>
                    {
                        <TouchableOpacity
                            underlayColor={'transparent'}
                            onPress={() => { }}>
                            <Ionicons
                                name={'md-share'}
                                size={20}
                                style={{ opacity: 0.9, marginRight: 10, color: 'white' }}
                            />
                        </TouchableOpacity>}
                </TouchableWithoutFeedback>
                <WebView
                    ref={webView => this.webView = webView}
                    onNavigationStateChange={e => this.onNavigationStateChange(e)}
                    source={{ uri: url }}
                    startInLoadingState={true}
                />
                {/* <Text style={{ textAlign: 'center' }}>{'接收到的参数为:' + JSON.stringify(this.props.navigation.state.params)}</Text> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',

    },
    text: {
        fontSize: 13,
        // textAlign: 'center'
    },
    item: {
        backgroundColor: color.activeBarColor,
        paddingBottom: 10,
        // height: 90,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
})