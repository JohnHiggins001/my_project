import React from 'react';
import {
    View, Button,
    StatusBar, AsyncStorage,
    StyleSheet, ActivityIndicator, FlatList, Text,
    RefreshControl, TouchableOpacity,
} from 'react-native';
import styles from '../common/styles';
const CITY_NAMES = ['北京', '上海', '广州', '深圳', '北京', '上海', '广州', '深圳', '北京', '上海', '广州', '深圳', '北京', '上海', '广州', '深圳'];

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            isShowLoading: true,
            dataArr: CITY_NAMES,
        }
        this.showIndicator = true;
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
        console.log('data-->', data)
        return (
            <View style={{ marginLeft: 15, marginRight: 15, justifyContent: 'center', alignItems: 'center', borderRadius: 8, backgroundColor: 'red', width: 400, height: 100, marginTop: 10 }}>
                <Text style={{ fontSize: 18, color: 'white', fontWeight: '700' }}>{data.item}</Text>
            </View >
        )
    }

    onJumpToSectionList = () => {
        const { navigation } = this.props

        console.log('点击了Button---->', navigation),
            navigation.navigate('Section')
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="dark-content" />
                {/* <Button title="Show me more of the app" onPress={this._showMoreApp} /> */}
                {/* <Button title="Actually, sign me out :)" onPress={this._signOutAsync} /> */}
                <TouchableOpacity onPress={this.onJumpToSectionList} style={{ justifyContent: 'center', alignItems: 'center', height: 50, marginLeft: 15, marginRight: 15, borderRadius: 8, backgroundColor: 'blue' }}>
                    <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }} title="去Section页面" onPress={this.onJumpToSectionList}>去section页面</Text>
                </TouchableOpacity>
                <FlatList
                    data={this.state.dataArr}
                    renderItem={(item) => this.renderItem(item)}
                    // refreshing={this.state.isLoading}
                    // onRefresh={this.loadData}
                    refreshControl={
                        <RefreshControl
                            title={'Loading'}
                            colors={['red']}
                            tintColor={'green'}
                            refreshing={this.state.isLoading}
                            onRefresh={this.loadData}
                        />
                    }
                    ListFooterComponent={this.showDownIndicator}
                    onEndReached={this.loadMore}

                >


                </FlatList>

            </View>
        );
    }

    _showMoreApp = () => {
        this.props.navigation.navigate('Other');
    };

    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };
}