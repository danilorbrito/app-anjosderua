import React, { Component } from 'react'

import {
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native'

import { Icon } from 'react-native-elements'

import Btn from '../components/Btn'

export default class Denuncias extends Component<{}> {
    constructor(props){
        super(props)
        this.state = {
            descricao: '',
            lat: null,
            lon: null,
            error: null
        }
    }
    componentDidMount(){
        navigator.geolocation.getCurrentPosition(pos=>{
            this.setState({
                lat: pos.coords.latitude,
                lon: pos.coords.longitude
            })
        },err=>{
            this.setState({
                error: JSON.stringify(err)
            })
        })
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.teste}>Denuncias</Text>
                <View style={{justifyContent: 'flex-start', flex: 1, width: '100%', height:'97%', alignSelf: 'center'}}>
                    <Text style={{ fontSize: 16, marginBottom: 5 }}>Descrição</Text>
                    <TextInput style={styles.inputs}
                        value={this.state.descricao}
                        onChangeText={descricao => this.setState({descricao})}
                        multiline={true}
                        placeholder={!!this.state.error ? 'Digite a Descrição da denúncia e Endereço' : 'Digite a Descrição da denúncia'}
                    />
                    <Btn
                        style={{ backgroundColor: "#ddd", marginTop: 15 }}
                        onPress={() => null}
                    >
                        <Icon
                            name='camera'
                            type='entypo'
                            color='#333'
                        />
                    </Btn>
                    <Btn
                        text='Denunciar'
                        style={{ backgroundColor: "#F65454", marginTop: 20 }}
                        onPress={() => {
                            alert(this.state.descricao + '\n' + 'lat' + this.state.lat + '\n' + 'lon' + this.state.lon)
                        }}
                    />
                    {
                        /*
                        <Text style={{ fontSize:16 }}>Latitude: {this.state.lat}</Text>
                        <Text style={{ fontSize: 16 }}>Longitude: {this.state.lon}</Text>
                        <Text style={{ fontSize: 16 }}>{this.state.error}</Text>
                        */
                    }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#eee'
    },
    teste: {
        color: '#333',
        fontSize: 26,
    },
    inputs: {
        maxHeight: 100,
        textAlign: 'left',
        padding: 10,
        fontSize: 18,
        marginBottom: 10,
        width: '90%'
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
})
