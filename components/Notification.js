import React, { Component } from 'react'

import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    PanResponder,
    Animated
} from 'react-native'

export default class Notification extends Component<{}>{
    constructor(props){
        super(props)
    }

    translateX = new Animated.Value(0)
    
    _panResponder = PanResponder.create({
        onMoveShouldSetResponderCapture: () => true,

        onMoveShouldSetPanResponderCapture: () => true,

        onPanResponderMove: Animated.event([null, {dx: this.translateX}]),

        onPanResponderRelease: (e, {vx, dx}) => {

            const screenWidth = Dimensions.get("window").width
            
            if (Math.abs(vx) >= 0.5 || Math.abs(dx) >= 0.5 * screenWidth) {
                Animated.timing(this.translateX, {
                    toValue: dx > 0 ? screenWidth : -screenWidth,
                    duration: 200
                }).start(this.props.onDismiss)
            } else {
                Animated.spring(this.translateX, {
                    toValue: 0,
                    bounciness: 10
                }).start()
            }
        }
    })
    
    render(){
        return(
            <View style={styles.notificationBox} {...this._panResponder.panHandlers}>
                <Text style={styles.notificationTitle}>
                    {this.props.item.titulo}
                </Text>
                <Text style={styles.notificationTexto}>
                    {this.props.item.texto}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    notificationBox: {
        flex: 1,
        padding: 10,
        width: 250,
        borderBottomColor: '#777',
        borderBottomWidth: 0.5,
        marginBottom: 5,
        transform: [{ translateX: this.translateX }]
    },
    notificationTitle: {
        fontSize: 18,
        color: '#333'
    },
    notificationTexto: {
        fontSize: 16,
        color: '#555'
    }
})