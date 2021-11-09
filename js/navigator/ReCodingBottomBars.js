import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { BottomTabBar } from 'react-navigation-tabs';
import { connect } from 'react-redux'

class RecodingBottomBars extends Component {
    render() {
        return <BottomTabBar
            {...this.props}
            activeTintColor={this.props.theme}
        />
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    text: {
        fontSize: 13,
        textAlign: 'center'
    }
})

const mapStateToProps = state => ({
    theme: state.theme.theme
});

export default connect(mapStateToProps)(RecodingBottomBars)
