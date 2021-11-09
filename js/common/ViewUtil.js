import { TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, { Component } from 'react'

export default class ViewUtil {
    static getLeftButton(callBack) {
        return (
            <TouchableOpacity onPress={() => callBack}>
                <Ionicons
                    name={'ios-arrow-back'}
                    size={26}
                    style={{ color: 'white' }}
                />
            </TouchableOpacity>
        )
    }
    static getShareButton(callBack) {
        return (
            <TouchableOpacity
                underlayColor={'transparent'}
                onPress={() => callBack}>
                <Ionicons
                    name={'md-share'}
                    size={20}
                    style={{ opacity: 0.9, marginRight: 10, color: 'white' }}
                />
            </TouchableOpacity>
        )
    }
}