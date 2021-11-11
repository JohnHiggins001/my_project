import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, StatusBar, NativeModules, ScrollView, Modal, Dimensions } from 'react-native';
import { HeaderTitle } from 'react-navigation-stack';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import HomeTopNavigator from '../navigator/HomeTopNavigator';
import color from '../style/colorStyle'
import NavigationBar from '../common/NavigationBar'
import { onThemeChange } from '../redux/action/theme';
import { connect } from 'react-redux';
import actions from '../redux/action';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Themes from '../common/Themes.json'

const window = Dimensions.get('window');

class Me extends Component {
    static navigationOptions = {
        title: 'Welcome to the app!',
    };

    constructor(props) {
        super(props)
        this.value = '';
        this.state = {
            modalVisible: false,
        }
    }

    getDeviceInfo() {
        // NativeModules.RNToolsManager.getAppVersion((event) => {
        //     console.log('DeviceInfo--->', event);
        // })
    }

    onClick(key) {

    }

    onColorChange(color) {
        const { onThemeChange, } = this.props
        const { modalVisible } = this.state
        this.setState({ modalVisible: !modalVisible }, () => { onThemeChange(color) });
    }

    onAboutJump() {
        const { navigation } = this.props
        navigation.navigate('AboutPage', { ...this.props })
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    renderDialog = () => {
        console.log('Themes------->', Themes)
        return (
            Themes && Themes.map((item, index) => {
                return (
                    <TouchableOpacity
                        style={{ borderRadius: 8, borderColor: color.flatItemColor, borderWidth: 1, backgroundColor: item, margin: 5, height: 120, width: window.width / 3.5, justifyContent: 'center' }}
                        onPress={() => {
                            this.onColorChange(item)
                        }}>
                        {/* <Text style={styles.textStyle}>哈哈哈</Text> */}
                    </TouchableOpacity>
                )
            })
        );
    }
    render() {
        const { theme } = this.props
        const { modalVisible } = this.state
        let statusBar = {
            backgroundColor: theme,
            barStyle: 'light-content',
        };
        let navigationBar =
            <NavigationBar
                title={''}
                statusBar={statusBar}
            // style={theme.styles.navBar}
            />;
        return (
            <View style={styles.container}>
                {navigationBar}

                <TouchableWithoutFeedback style={[styles.item, { backgroundColor: theme }]}>

                    <TouchableOpacity
                        onPress={() => this.onClick('share')}
                    >
                        <Ionicons
                            name={'ios-share'}
                            size={26}
                            style={{
                                marginLeft: 10,
                                color: color.whiteColor,
                                textAlign: 'center',
                            }}
                        />
                    </TouchableOpacity>
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>我的</Text>
                    <TouchableOpacity
                        onPress={() => this.onClick('share')}
                    >
                        <Ionicons
                            name={'ios-search'}
                            size={26}
                            style={{
                                marginRight: 10,
                                alignSelf: 'center',
                                color: color.whiteColor,
                            }} />
                    </TouchableOpacity>
                </TouchableWithoutFeedback>

                <ScrollView>
                    <TouchableOpacity
                        onPress={() => this.onAboutJump()}
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
                    <View style={[styles.underline, { backgroundColor: theme }]}></View>
                    <TouchableOpacity style={styles.itemRow}>
                        <View style={styles.leftRow}>
                            <MaterialCommunityIcons name={'teach'}
                                size={26}
                                style={{ color: theme }} />

                            <Text style={{ color: color.blackTextColor, fontSize: 14, marginLeft: 10 }}>个人信息</Text>
                        </View>
                        <FontAwesome name={'angle-right'}
                            size={26}
                            style={{ color: theme, }} />
                    </TouchableOpacity>
                    <View style={[styles.underline, { backgroundColor: theme }]}></View>
                    <Text style={[styles.underspace, { backgroundColor: theme }]}>主题设置</Text>
                    <TouchableOpacity style={styles.itemRow}>
                        <View style={styles.leftRow}>
                            <MaterialCommunityIcons name={'teach'}
                                size={26}
                                style={{ color: theme }} />

                            <Text style={{ color: color.blackTextColor, fontSize: 14, marginLeft: 10 }}>自定义语言</Text>
                        </View>
                        <FontAwesome name={'angle-right'}
                            size={26}
                            style={{ color: theme, }} />
                    </TouchableOpacity>
                    <View style={[styles.underline, { backgroundColor: theme }]}></View>
                    <TouchableOpacity style={styles.itemRow}>
                        <View style={styles.leftRow}>
                            <MaterialCommunityIcons name={'teach'}
                                size={26}
                                style={{ color: theme }} />

                            <Text style={{ color: color.blackTextColor, fontSize: 14, marginLeft: 10 }}>语言排序</Text>
                        </View>
                        <FontAwesome name={'angle-right'}
                            size={26}
                            style={{ color: theme, }} />
                    </TouchableOpacity>
                    <View style={[styles.underline, { backgroundColor: theme }]}></View>
                    <TouchableOpacity
                        onPress={() => { this.setModalVisible(!modalVisible) }}
                        style={styles.itemRow}>
                        <View style={styles.leftRow}>
                            <MaterialCommunityIcons name={'teach'}
                                size={26}
                                style={{ color: theme }} />

                            <Text style={{ color: color.blackTextColor, fontSize: 14, marginLeft: 10 }}>修改主题</Text>
                        </View>
                        <FontAwesome name={'angle-right'}
                            size={26}
                            style={{ color: theme, }} />
                    </TouchableOpacity>
                    <View style={[styles.underline, { backgroundColor: theme }]}></View>
                    <Text style={[styles.underspace, { backgroundColor: theme }]}>标签管理</Text>
                    <TouchableOpacity style={styles.itemRow}>
                        <View style={styles.leftRow}>
                            <MaterialCommunityIcons name={'teach'}
                                size={26}
                                style={{ color: theme }} />

                            <Text style={{ color: color.blackTextColor, fontSize: 14, marginLeft: 10 }}>自定义标签</Text>
                        </View>
                        <FontAwesome name={'angle-right'}
                            size={26}
                            style={{ color: theme, }} />
                    </TouchableOpacity>
                    <View style={[styles.underline, { backgroundColor: theme }]}></View>
                    <TouchableOpacity style={styles.itemRow}>
                        <View style={styles.leftRow}>
                            <MaterialCommunityIcons name={'teach'}
                                size={26}
                                style={{ color: theme }} />

                            <Text style={{ color: color.blackTextColor, fontSize: 14, marginLeft: 10 }}>标签排序</Text>
                        </View>
                        <FontAwesome name={'angle-right'}
                            size={26}
                            style={{ color: theme, }} />
                    </TouchableOpacity>
                    <View style={[styles.underline, { backgroundColor: theme }]}></View>
                    <TouchableOpacity style={styles.itemRow}>
                        <View style={styles.leftRow}>
                            <MaterialCommunityIcons name={'teach'}
                                size={26}
                                style={{ color: theme }} />

                            <Text style={{ color: color.blackTextColor, fontSize: 14, marginLeft: 10 }}>标签移除</Text>
                        </View>
                        <FontAwesome name={'angle-right'}
                            size={26}
                            style={{ color: theme, }} />
                    </TouchableOpacity>
                    <View style={[styles.underline, { backgroundColor: theme }]}></View>
                    <Text style={[styles.underspace, { backgroundColor: theme }]}>设置</Text>
                    <TouchableOpacity style={styles.itemRow} onPress={() => {
                        this.getDeviceInfo()
                    }}>
                        <View style={styles.leftRow}>
                            <MaterialCommunityIcons name={'teach'}
                                size={26}
                                style={{ color: theme }} />

                            <Text style={{ color: color.blackTextColor, fontSize: 14, marginLeft: 10 }}>关于</Text>
                        </View>
                        <FontAwesome name={'angle-right'}
                            size={26}
                            style={{ color: theme, }} />
                    </TouchableOpacity>
                    <View style={[styles.underline, { backgroundColor: theme }]}></View>

                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                        }}
                    >
                        <View style={styles.modalContainer}>

                            <ScrollView>

                                <TouchableOpacity
                                    style={{ ...styles.openButton }}
                                    onPress={() => {
                                    }}
                                >
                                    {/* <View style={styles.selectTab}> */}
                                    {this.renderDialog()}

                                    {/* </View> */}
                                </TouchableOpacity>
                            </ScrollView>
                        </View>
                    </Modal>

                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.backgroundColor
    },
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
    },
    text: {
        fontSize: 13,
        textAlign: 'center'
    },
    tabStyle: {
        // minWidth: 50,
        padding: 0
    },
    indicatorStyle: {
        height: 2,
        backgroundColor: 'white',
    },
    labelStyle: {
        fontSize: 13,
        marginTop: 6,
        marginBottom: 6,
    },
    item: {
        // backgroundColor: color.activeBarColor,
        // height: 90,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingBottom: 15,
    },
    groupTitle: {
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 5,
        fontSize: 12,
        color: 'gray',
    },
    underline: {
        // backgroundColor: '#f7b517',
        height: 0.5
    },
    underspace: {
        // backgroundColor: '#f7b517',
        padding: 10,
        fontSize: 16,
        color: color.whiteColor,
        fontWeight: 'bold'
    },
    text: {
        fontSize: 13,
        textAlign: 'center'
    },
    tabStyle: {
        // minWidth: 50,
        padding: 0
    },
    indicatorStyle: {
        height: 2,
        backgroundColor: 'white',
    },
    labelStyle: {
        fontSize: 13,
        marginTop: 6,
        marginBottom: 6,
    },
    selectTab: {
        // borderRadius: 10,
    },
    modalContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.45)',
        flex: 1,
    },
    centeredView: {
        // marginTop: 60,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    arrow: {
        color: color.whiteColor,
        paddingTop: -15,
    },
    openButton: {
        // flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.whiteColor,
        padding: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: color.flatItemColor,
    },
    textStyle: {
        color: color.whiteColor,
        padding: 10,
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    lineSpace: {
        height: 0.5,
        backgroundColor: 'darkgray'
    },
})
const mapStateToProps = state => ({
    theme: state.theme.theme
})

const mapDispatchToProps = dispatch => ({
    onThemeChange: color => dispatch(actions.onThemeChange(color))
})
export default connect(mapStateToProps, mapDispatchToProps)(Me)
