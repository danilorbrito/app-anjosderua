// imported from modules
import React, { Component } from 'react'

import {
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

export default class Btn extends Component<{}> {
    render() {
        return (
            <TouchableOpacity style={[styles.btn, this.props.style]} onPress={this.props.onPress}>
                {this.props.text &&<Text style={{ fontSize: 18, textAlign:'center' }}>{this.props.text}</Text>}
                { this.props.children }
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    btn: {
        padding: 12,
        borderRadius: 10,
    }
})
