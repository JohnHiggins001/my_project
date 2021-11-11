import React, { Component } from 'react'
import { View, Text, Image, Button, StyleSheet } from 'react-native'
import color from '../style/colorStyle'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HTMLView from 'react-native-htmlview';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import Storage from '../common/Storage'
import Types from '../redux/action/types'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class CollectItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isStar: false,
        }
    }

    _loadWebView(url) {
        console.log('_loadWebView---->', url)
    }

    render() {
        const { item, onItemSelect, theme } = this.props
        if (!item || !item.id) return null;
        let desc = `<p><a href="https://www.baidu.com" target="_blank">${item && item.description}</a></p>`
        let meta = `<p><a href="https://www.baidu.com" target="_blank">updated_at:${item && item.updated_at}</a></p>`
        item.type = 'collect'
        return (
            <TouchableWithoutFeedback onPress={() => { onItemSelect(item) }} >
                <View style={styles.container}>
                    <Text
                        numberOfLines={1}
                        style={styles.title}>{item && item.full_name ? item.full_name : item.fullName}</Text>
                    <HTMLView
                        onLinkPress={(url) => this._loadWebView(url)}
                        // numberOfLines={3}
                        // style={styles.description}
                        stylesheet={descStyles}
                        value={desc} />
                    <HTMLView
                        // numberOfLines={1}
                        // style={styles.meta}
                        stylesheet={StyleSheet.create({
                            p: {
                                marginLeft: 5,
                                marginTop: 5,
                                fontSize: 14,
                            },
                            a: {
                                fontWeight: 'bold',
                                color: theme
                            }
                        })}
                        value={meta}
                        onLinkPress={(url) => this._loadWebView(url)}
                    />
                    <View style={styles.body}>
                        <Text style={styles.author}>{item.owner ? 'author :' : 'Build by:'}</Text>
                        <Image style={styles.image} source={{ uri: item.owner ? item.owner.avatar_url : item.contributors[0] }}></Image>
                        <Text style={styles.star}>{item.stargazers_count ? 'star:' + item.stargazers_count : 'fork:' + item.forkCount}</Text>

                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 5,
        marginTop: 10,
        backgroundColor: color.whiteColor,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: color.flatItemColor,
        marginLeft: 15,
        marginRight: 15,
        // minHeight: 120,
    },
    body: {
        flexDirection: 'row',
        backgroundColor: color.whiteColor,
        alignItems: 'center',
        marginLeft: 5,
        // position: 'absolute',
        // bottom: 2,
        // left: 10,
    },
    title: {
        fontSize: 18,
        color: color.blackTextColor,
        fontWeight: 'bold',
        marginLeft: 5,
    },
    description: {
        color: color.blackTextColor,
        fontWeight: 'bold',
        marginTop: 5,
        fontSize: 14,
    },
    meta: {
        color: color.activeBarColor,
        fontWeight: 'bold',
        fontSize: 14,
        // position: 'absolute',
        // bottom: 32,
        // left: 10,
    },
    author: {
        color: color.blackTextColor,
        fontWeight: 'bold',
        fontSize: 15,
    },
    star: {
        flex: 1,
        color: color.blackTextColor,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 15,
    },
    image: {
        width: 20,
        height: 20,
        borderRadius: 180,
        borderWidth: 1,
        borderColor: color.blackTextColor,
        marginLeft: 6,
    }

})

const metaStyles = StyleSheet.create({
    p: {
        marginLeft: 5,
        marginTop: 5,
        fontSize: 14,
    },
    a: {
        fontWeight: 'bold',
        color: color.activeBarColor
    }
})

const descStyles = StyleSheet.create({
    p: {
        marginLeft: 5,
        marginTop: 5,
        fontSize: 14,
    },
    a: {
        fontWeight: 'bold',
        color: color.blackTextColor
    }
})