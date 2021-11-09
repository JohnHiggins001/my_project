import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux'
import actions from '../redux/action';
import Ionicons from 'react-native-vector-icons/Ionicons';
import color from '../style/colorStyle'
import NavigationBar from '../common/NavigationBar';

class Me extends Component {
    constructor(props) {
        super(props)
    }

    onClick(key) {
        const { onThemeChange } = this.props
        onThemeChange(color.black)
    }

    render() {
        const { theme } = this.props;
        let statusBar = {
            backgroundColor: color.activeBarColor,
            barStyle: 'light-content',
        };
        let navigationBar =
            <NavigationBar
                title={'我的'}
                statusBar={statusBar}
            // style={theme.styles.navBar}
            />;
        return (
            <View style={styles.container}>
                {navigationBar}
                <ScrollView>
                    <TouchableOpacity
                        style={styles.item}
                        onPress={() => this.onClick('about')}
                    >
                        <View style={styles.about_left}>
                            <Ionicons
                                name={'ios-hand-left'}
                                size={40}
                                style={{
                                    marginRight: 10,
                                    color: color.activeBarColor,
                                    textAlign: 'center',
                                }}
                            />
                        </View>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>我的</Text>
                        <Ionicons
                            name={'ios-hand-right'}
                            size={16}
                            style={{
                                marginRight: 10,
                                alignSelf: 'center',
                                color: color.activeBarColor,
                            }} />
                    </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    about_left: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    item: {
        backgroundColor: 'white',
        padding: 10,
        height: 90,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    groupTitle: {
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 5,
        fontSize: 12,
        color: 'gray',
    },
})

const mapDispatchToProps = dispatch => ({
    onThemeChange: theme => dispatch(actions.onThemeChange(theme))
})

export default connect(null, mapDispatchToProps)(Me)