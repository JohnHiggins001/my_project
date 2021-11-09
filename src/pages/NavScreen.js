import React from 'react';
import {
    View, Button,
    StatusBar,
    StyleSheet, ActivityIndicator, FlatList, Text,
    RefreshControl, SectionList, TouchableOpacity,
} from 'react-native';
import styles from '../common/styles';
import Ionicons from 'react-native-vector-icons/Ionicons'

const CITY_NAMES = [
    { data: ['北京', '上海', '广州', '深圳',], title: '一线城市' },
    { data: ['沈阳', '大连', '唐山', '青岛',], title: '二线城市' },
    { data: ['吉林', '长春', '四平', '辽源', '通化', '榆树',], title: '三线城市' }];

export default class NavScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            isShowLoading: true,
            dataArr: CITY_NAMES,
        }
        this.showIndicator = true;
    }
    static navigationOptions = {
        title: 'Welcome to the app!',
    };

    loadData = () => {
        this.setState({
            isLoading: true
        }, console.log('setState在这里结束了'));
        setTimeout(() => {
            let newData = []
            for (let i = CITY_NAMES.length - 1; i > 0; i--) {
                newData.push(CITY_NAMES[i]);
            }
            this.setState({
                dataArr: newData,
                isLoading: false
            })
        }, 2000)
    }

    loadData = () => {
        this.setState({
            isLoading: true
        }, console.log('setState在这里结束了'));
        setTimeout(() => {
            let newData = []
            for (let i = CITY_NAMES.length - 1; i > 0; i--) {
                newData.push(CITY_NAMES[i]);
            }
            this.setState({
                dataArr: newData,
                isLoading: false
            })
        }, 2000)
    }

    showDownIndicator = () => {
        return (<View >
            <ActivityIndicator style={{ margin: 10 }} size={'large'} tintColor={'red'} animating={true} />
            <Text style={{ color: 'red', textAlign: 'center' }}>正在加载更多...</Text>
        </View>)
    }


    loadMore = () => {
        setTimeout(() => {
            let newData = []
            for (let i = CITY_NAMES.length - 1; i > 0; i--) {
                newData.push(CITY_NAMES[i]);
            }
            this.setState({
                dataArr: newData,
            })
        }, 3000)

    }

    renderItem(data) {
        // console.log('data-->', data)
        return (
            <View style={{ height: 100, justifyContent: 'center', alignItems: 'center', marginLeft: 15, marginRight: 15, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                <Text style={{ fontSize: 18, color: 'white', fontWeight: '700' }}>{data.item}</Text>
            </View >
        )
    }

    _renderSectionHeader({ section }) {
        return (
            <View style={{ marginLeft: 15, marginRight: 15, height: 30, flexDirection: 'row', backgroundColor: 'orange', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'white', textAlign: 'center', fontSize: 18, fontWeight: 'bold' }}>{section.title}</Text>
            </View>
        )
    }

    render() {
        const { navigation } = this.props;
        // console.log('接受到的导航参数--->', navigation.state.params)
        return (
            <View style={styles.container}>
                <Button title="Show me more of the app" onPress={this._showMoreApp} />
                <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />

                <SectionList
                    style={{ flex: 1 }}
                    sections={CITY_NAMES}
                    renderItem={(data) => this.renderItem(data)}
                    renderSectionHeader={(data) => this._renderSectionHeader(data)}
                    ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: '#e0e0e0', marginTop: 10 }}></View>}
                />
            </View>
        );
    }

    _showMoreApp = () => {
        this.props.navigation.navigate('Other');
    };

    _signOutAsync = () => {
        this.props.navigation.navigate('Auth');
    };
}