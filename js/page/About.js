import ParallaxScrollView from 'react-native-parallax-scroll-view'
import React, { Component } from 'react'
import { View, Text, Button, TouchableOpacity, StyleSheet, Image, DeviceInfo, Platform, Dimensions, TouchableWithoutFeedback, Alert } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import color from '../style/colorStyle'
const PARALLAX_HEADER_HEIGHT = 280
const window = Dimensions.get('window');
const AVATAR_SIZE = 90;
const TOP = (Platform.OS === 'ios') ? 50 + (DeviceInfo.isIPhoneX_deprecated ? 24 : 0) : 0;
const STICKY_HEADER_HEIGHT = (Platform.OS === 'ios') ? 44 + TOP : 50;

export default class About extends Component {
    constructor(props) {
        super(props)
        this.props = props
        this.state = {
            data: null
        }
    }

    componentDidMount() {
        this.loadData()
    }
    onClick(key) {
        switch (key) {
            case 'back':
                const { navigation } = this.props
                navigation.goBack()
                break
            case 'share':
                Alert.alert('点击了', key)

                break
            default: break
        }
    }
    loadData() {
        fetch('https://www.devio.org/io/GitHubPopular/json/github_app_config.json')
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Network Error');
            })
            .then(config => {
                if (config) {
                    this.setState({
                        data: config,
                    });
                }
            })
            .catch(e => {
                console(e);
            });
    }
    getParallaxRenderConfig(params) {
        if (!params) return
        const { theme } = this.props.navigation.state.params
        let config = {};
        let avatar = typeof (params.avatar) === 'string' ? { uri: params.avatar } : params.avatar;
        config.renderBackground = () => (
            <View key="background">
                <Image source={{
                    uri: params.backgroundImg,
                    width: window.width,
                    height: PARALLAX_HEADER_HEIGHT,
                }} />
                <View style={{
                    position: 'absolute',
                    top: 0,
                    width: window.width,
                    backgroundColor: 'rgba(0,0,0,.4)',
                    height: PARALLAX_HEADER_HEIGHT,
                }} />
            </View>
        );
        config.renderForeground = () => (
            <View key="parallax-header" style={styles.parallaxHeader}>
                <Image style={styles.avatar}
                    source={avatar} />
                <Text style={styles.sectionSpeakerText}>
                    {params.name}
                </Text>
                <Text style={styles.sectionTitleText}>
                    {params.description}
                </Text>
            </View>
        );
        config.renderStickyHeader = () => (
            <View key="sticky-header" style={styles.stickySection}>
                <Text style={styles.stickySectionText}>{params.name}</Text>
            </View>
        );
        config.renderFixedHeader = () => (
            <View key="fixed-header" style={styles.fixedSection}>
                <TouchableOpacity
                    onPress={() => this.onClick('back')}
                >
                    <Ionicons
                        name={'arrow-back'}
                        size={26}
                        style={{
                            marginRight: 10,
                            alignSelf: 'center',
                            color: color.whiteColor,
                        }} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.onClick('share')}
                >
                    <Ionicons
                        name={'ios-share'}
                        size={26}
                        style={{
                            color: color.whiteColor,
                            textAlign: 'center',
                        }}
                    />
                </TouchableOpacity>
            </View>
        );
        return config;

    }
    render() {
        const { theme } = this.props.navigation.state.params
        const { data } = this.state
        const renderConfig = this.getParallaxRenderConfig(data && data.app);

        return (
            <ParallaxScrollView
                backgroundColor={theme}
                contentBackgroundColor={color.flatItemColor}
                parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT}
                stickyHeaderHeight={100}
                backgroundScrollSpeed={10}
                {...renderConfig}
            >
                <TouchableOpacity
                    style={styles.itemRow}>
                    <View style={styles.leftRow}>
                        <View style={{ backgroundColor: theme, padding: 8, borderRadius: 180, borderColor: theme, borderWidth: 0 }}>
                            {/* <MaterialIcons name={'emoji-people'}
                                size={45}
                                style={{ color: color.whiteColor }} /> */}
                            <Ionicons name={'logo-github'}
                                size={45}
                                style={{ color: color.whiteColor }} />
                        </View>

                        <Text style={{ fontWeight: 'bold', color: color.blackTextColor, fontSize: 18, marginLeft: 10 }}>Higgins</Text>
                    </View>
                    <FontAwesome name={'angle-right'}
                        size={26}
                        style={{ color: theme, }} />
                </TouchableOpacity>
            </ParallaxScrollView>
        )
    }
}

const styles = StyleSheet.create({
    itemRow: {
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    leftRow: {
        flexDirection: 'row',
        alignItems: 'center'
    }, container: {
        flex: 1,
        backgroundColor: 'black',
    },
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: window.width,
        height: PARALLAX_HEADER_HEIGHT,
    },
    stickySection: {
        height: STICKY_HEADER_HEIGHT,
        alignItems: 'center',
        paddingTop: TOP,
    },
    stickySectionText: {
        color: 'white',
        fontSize: 20,
        margin: 10,
    },
    fixedSection: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        paddingRight: 8,
        paddingLeft: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: TOP,
    },
    fixedSectionText: {
        color: '#999',
        fontSize: 20,
    },
    parallaxHeader: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column',
        paddingTop: 100,
    },
    avatar: {
        marginBottom: 10,
        borderRadius: AVATAR_SIZE / 2,
    },
    sectionSpeakerText: {
        color: 'white',
        fontSize: 24,
        paddingVertical: 5,
        marginBottom: 10,
    },
    sectionTitleText: {
        color: 'white',
        fontSize: 16,
        marginRight: 10,
        marginLeft: 10,
    },
    item: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingBottom: 15,
    },
})