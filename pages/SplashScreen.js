import React, { Component } from 'react'

import {
    StyleSheet,
    Text,
    View,
    Animated,
    ToastAndroid,
    ActivityIndicator
} from 'react-native'

export default class SplashScreen extends Component<{}> {
    constructor(props) {
        super(props)
        this.state = {
            fade: new Animated.Value(1)
        }
    }
    componentDidMount(){
        ToastAndroid.showWithGravity(
            'Desenvolvido por Fatec Taquaritinga',
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM
        )
        setTimeout(()=>{
            Animated.timing(                  // Animate over time
                this.state.fade,            // The animated value to drive
                {
                    toValue: 0,                  // Animate to opacity: 1 (opaque)
                    duration: 3000              // Make it take a while
                }
            ).start()
        }, 2000)    
    }
    render() {
        return (
            <Animated.View style={[styles.container, {opacity: this.state.fade}]}>
                <View style={styles.titleDiv}>
                    <Text style={styles.teste}>Anjos de Rua</Text>
                    <ActivityIndicator size={120} color="#ffaa00" />
                </View>
                {
                    /*
                <View>
                    <Text style={styles.subtitle}>Developed by Fatec Taquaritinga</Text>
                </View>
                */
                }
            </Animated.View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#66aaaa'
    },
    teste: {
        color: '#fff',
        fontSize: 30,
    },
    titleDiv: {
        flex: 1,
        justifyContent: 'center'
    },
    subtitle: {
        color: '#f1f2f6',
        fontSize: 20,
        fontFamily: 'notoserif',
    }
})
