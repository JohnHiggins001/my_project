import React, { Component } from 'react';
import {
    Alert,
    Modal,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    DeviceEventEmitter,
    AsyncStorage,
} from 'react-native';
import { HeaderTitle } from 'react-navigation-stack';
import SearchTopNavigator from '../navigator/SearchTopNavigator';
import color from '../style/colorStyle'
import NavigationBar from '../common/NavigationBar'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import actions from '../redux/action';
import Types from '../redux/action/types';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'

const SearchListUrl = `https://github.com/trending/`;
const query_star = '?since=daily'

class Search extends Component {
    static navigationOptions = {
        title: 'Welcome to the app!',
    };

    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false,
            dates: [
                {
                    name: '今天',
                    type: 'daily',
                    isSelect: true,
                },
                {
                    name: '本周',
                    type: 'weekly',
                    isSelect: false,
                },
                {
                    name: '本月',
                    type: 'monthly',
                    isSelect: false,
                },]
        };
        this.value = '';

    }

    onClick(key) {

    }

    onPageTitleClick() {
        const { modalVisible } = this.state;
        this.setModalVisible(!modalVisible);
        const { onNeedRefresh } = this.props
        onNeedRefresh('noNeed')
        DeviceEventEmitter.emit(Types.TEST_DEVICE_EMMIT, 'noNeed')
    }

    refresh(type, index) {
        // let dates = this.state.dates;
        // dates.forEach((item, pos) => {
        //     if (index == pos) {
        //         item.isSelect = true
        //     } else {
        //         item.isSelect = false
        //     }
        // })
        // this.setState({
        //     dates
        // })
        const { onNeedRefresh } = this.props
        onNeedRefresh('Need')
        this.loadData(type)
    }

    loadData(type) {
        const { onSearchTypeChange } = this.props
        onSearchTypeChange(type)
        this.setState({ modalVisible: !this.state.modalVisible });
    }

    getUrl(key) {
        return SearchListUrl + key + query_star;
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    renderDialog = () => {
        return (
            this.state.dates.map((item, index) => {
                return (
                    <TouchableOpacity
                        style={{ backgroundColor: 'white' }}
                        onPress={() => {
                            this.refresh(item.type, index)
                        }}>
                        <Text style={styles.textStyle}>{item.name}</Text>
                        <View style={styles.lineSpace}></View>
                    </TouchableOpacity>
                )
            })
        )
    }
    render() {
        const { modalVisible } = this.state;
        const { theme } = this.props
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
                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            // this.setModalVisible(!modalVisible);
                        }}
                    >
                        <View style={styles.modalContainer}>

                            <View style={styles.centeredView}>
                                <MaterialIcons
                                    name={'arrow-drop-up'}
                                    size={36}
                                    style={styles.arrow}
                                />
                                <TouchableOpacity
                                    style={{ ...styles.openButton }}
                                    onPress={() => {
                                        this.setModalVisible(!modalVisible);
                                    }}
                                >
                                    <View style={styles.selectTab}>
                                        {this.renderDialog()}

                                    </View>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </Modal>
                    <TouchableOpacity
                        style={{ alignItems: 'center', flexDirection: 'row' }}
                        onPress={() => {
                            this.onPageTitleClick()
                        }}
                    >

                        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>搜索</Text>
                        <MaterialIcons
                            name={'arrow-drop-down'}
                            size={26}
                            style={styles.arrow}
                        />
                    </TouchableOpacity>
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

                <SearchTopNavigator {...this.props} />
                {/* <View style={{ justifyContent: 'center', alignSelf: 'center', }}>
                    <Text style={{ textAlign: 'center' }} onPress={() => this.props.navigation.navigate('DetailPage', {
                        name: 'dsad', sex: 'sd', age: 19
                    })}>跳转到详情页面</Text>
                    <Text style={{ textAlign: 'center', }} onPress={() => this.props.navigation.navigate('FetchDemoPage', {
                        name: 'dsad', sex: 'sd', age: 19
                    })}>跳转到网络请求页面</Text>
                </View> */}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        backgroundColor: color.activeBarColor,
        // height: 90,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },

    selectTab: {
        // borderRadius: 10,
    },
    modalContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.45)',
        alignItems: "center",
        flex: 1,
    },
    centeredView: {
        marginTop: 60,
        justifyContent: 'center',
        alignItems: 'center',
        alignItems: "center",
    },
    arrow: {
        color: color.whiteColor,
        paddingTop: -15,
    },
    openButton: {
        backgroundColor: color.whiteColor,
        marginTop: -15,
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: color.flatItemColor,
    },
    textStyle: {
        color: color.blackTextColor,
        textAlign: "center",
        padding: 10,
        fontSize: 14,
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

// const mapStateToProps = state => ({
//     search: state.search,
// })
const mapStateToProps = state => ({
    theme: state.theme.theme
});
const mapDispatchToProps = dispatch => ({
    onSearchTypeChange: type => dispatch(actions.onSearchTypeChange(type)),
    onNeedRefresh: type => dispatch(actions.onNeedRefresh(type))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
// export default Search
