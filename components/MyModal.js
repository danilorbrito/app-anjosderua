import React, { Component } from 'react'

import {
    Modal,
    StyleSheet,
    Text,
    View,
    ScrollView,
    PanResponder,
    TouchableOpacity,
    Animated
} from 'react-native'

export default class MyModal extends Component<{}>{
    constructor(props){
        super(props)
        this.state = {
            trx: new Animated.Value(1),
            notifications: [
                {
                    titulo: 'Meu Titulo 1',
                    texto: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit...'
                },
                {
                    titulo: 'Meu Titulo 2',
                    texto: 'Libero architecto ea harum consectetur perferendis saepe...'
                },
                {
                    titulo: 'Meu Titulo 3',
                    texto: 'laudantium dolorem, voluptates nobis doloremque odit qui quibusdam...'
                },
                {
                    titulo: 'Meu Titulo 4',
                    texto: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit...'
                },
                {
                    titulo: 'Meu Titulo 5',
                    texto: 'Libero architecto ea harum consectetur perferendis saepe...'
                },
                {
                    titulo: 'Meu Titulo 6',
                    texto: 'laudantium dolorem, voluptates nobis doloremque odit qui quibusdam...'
                }
            ]
        }
    }


    _panResponder = PanResponder.create({
        onMoveShouldSetResponderCapture: () => true,

        onMoveShouldSetPanResponderCapture: () => true,

        onPanResponderMove: Animated.event([null, { dx: this.translateX }]),

        onPanResponderRelease: (e, { vx, dx }) => {

            const screenWidth = (Dimensions.get("window").width)/2

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
            <Modal
                animatioType="fade"
                transparent={true}
                visible={this.props.visible} onRequestClose={() => this.props.close}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.boxContainer}>
                        <TouchableOpacity onPress={this.props.fecharModal} style={styles.modalFecha}>
                            <Text style={styles.modalFechaX}>X</Text>
                        </TouchableOpacity>
                        <ScrollView style={{flex:1, width:'90%', alignSelf: 'center'}}>
                            {this.state.notifications.map((item, key)=>{
                                return(
                                    <Animated.View style={[styles.notificationBox, {transform: [{ translateX: this.state.trx }]}]} {...this._panResponder.panHandler} key={key}>
                                        <Text style={styles.notificationTitle}>
                                            {item.titulo}
                                        </Text>
                                        <Text style={styles.notificationTexto}>
                                            {item.texto}
                                        </Text>
                                    </Animated.View>
                                )
                            })}
                        </ScrollView>
                    </View>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    boxContainer: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 20,
        minHeight: 30,
        width: '75%',
        maxHeight: '70%',
        alignSelf: 'center',
        alignContent: 'center',
        justifyContent: 'center'
    },
    modalFecha: {
        alignSelf: 'flex-end',
        paddingHorizontal: 8,
        paddingVertical: 3,
        top: -15,
        right:-7
    },
    modalFechaX:{
        fontSize: 18,
        fontWeight: 'bold',
    },
    notificationBox: {
        flex: 1,
        padding: 10,
        width: 250,
        borderBottomColor: '#777',
        borderBottomWidth: 0.5,
        marginBottom: 5
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


