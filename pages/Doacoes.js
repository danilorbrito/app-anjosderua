import React, { Component } from 'react'

import {
    StyleSheet,
    Text,
    TextInput,
    Slider,
    Switch,
    View
} from 'react-native'

import Btn from '../components/Btn'

export default class Doacoes extends Component<{}>{
    constructor(props){
        super(props)
        this.state = {
            doacao: 2,
            mostra: true
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.titulo}>Doações</Text>
                {this.state.mostra &&
                <View>
                    <Text style={{marginLeft:10, marginBottom: 5, fontSize: 18}}>Valor:</Text>
                    <Slider 
                        minimumValue={2}
                        value={this.state.doacao}
                        maximumValue={100}
                        step={5}
                        onValueChange={value => this.setState({doacao: value})}
                    />
                    <View style={{width:'100%', flexDirection: 'row', justifyContent: 'center'}}>
                        <Text style={{ fontSize: 17}}>R$&nbsp;</Text>
                        <Text style={{ fontSize: 17, color: '#228b22'}}>{this.state.doacao.toFixed(2).replace(/\./g, ',')}</Text>
                    </View>
                </View>
                }
                {!this.state.mostra &&
                <View>
                    <Text style={{ fontSize: 16, marginBottom: 5 }}>Valor 200 - 1000</Text>
                    <TextInput style={styles.inputs}
                        onChangeText={valor =>{
                            if(valor == ''){ valor = 0}
                            valor = parseFloat(valor)
                            this.setState({ doacao: valor })
                        }}
                        value={this.state.doacao.toString()}
                        keyboardType="numeric"
                    />
                </View>
                } 
                <View style={{width:'100%', flexDirection: 'row', justifyContent: 'flex-end'}}>
                    <Text style={{ fontSize: 17 }}>Outros Valores: {!this.state.mostra && 'Sim'}{this.state.mostra && 'Não'}</Text>
                    <Switch value={!this.state.mostra} onValueChange={e=> this.setState({mostra: !this.state.mostra, doacao: 200})}/>
                </View>
                <Btn
                    text='Doar'
                    style={{backgroundColor: "#228f32", marginTop: 20}}
                    onPress={()=>{
                        if(this.state.mostra){
                            alert(this.state.doacao)
                            this.setState({ doacao: 2 })
                        } else if(this.state.doacao >= 200 && this.state.doacao <= 1000){
                            alert(this.state.doacao)
                            this.setState({ doacao: 2, mostra: true })
                        } else {
                            alert('Valor Invalido')
                        }
                    }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eee',
        flex:1,
        paddingHorizontal: 10
    },
    titulo: {
        color: '#333',
        fontSize: 26,
        textAlign: 'center',
        marginBottom: 100
    },
    inputs: {
        padding: 10,
        fontSize: 18,
    }
})
