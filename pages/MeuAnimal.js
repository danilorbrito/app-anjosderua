import React, { Component } from 'react'

import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'

export default class MeuAnimal extends Component<{}> {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.teste}>Meu Animal</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eee'
    },
    teste: {
        color: '#333',
        fontSize: 26,
    }
})
