// imported from modules
import React, { Component } from 'react'

import {
    StyleSheet,
    Text,
    View,
    Button,
    TouchableOpacity,
    TextInput,
    ActivityIndicator
} from 'react-native'

import Btn from '../components/Btn'
import { Icon } from 'react-native-elements'

export default class Home extends Component<{}> {
    constructor(props) {
        super(props)
        this.state = {
            login: '',
            senha: '',
            mostraSenha: false,
            logando: false
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.cabecalho}>
                    <Text style={styles.fontPadrao}>Adote esta Causa</Text>
                </View>
                { !this.state.logando &&
                <View style={styles.corpo}>
                    <Text style={{ fontSize: 16, marginBottom: 5 }}>Login:</Text>
                    <TextInput style={styles.inputs} placeholder="Digite o Login" /*autoFocus*/ 
                        onChangeText={login=> this.setState({login})}
                        value={this.state.login}
                        autoCapitalize="none"
                    />
                    <View style={{ flexDirection: 'row', width: '90%', alignItems: 'center', justifyContent: 'center'}}>
                        <View style={{flex:1, width: '100%'}}>
                            <Text style={{fontSize:16, marginBottom:5}}>Senha:</Text>
                            <TextInput style={styles.inputs} placeholder="Digite a Senha" secureTextEntry={!this.state.mostraSenha}
                                onChangeText={senha => this.setState({ senha })}
                                value={this.state.senha}
                            />
                        </View>
                        <View style={{marginLeft: -40}}>
                            <TouchableOpacity 
                                onPress={() => this.setState({mostraSenha: !this.state.mostraSenha})}
                            >
                                <Icon
                                    name={this.state.mostraSenha === true ? 'eye-with-line' : 'eye'}
                                    type='entypo'
                                    color={this.state.mostraSenha === true ? '#555' : '#aaa'}
                                    size={20}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Btn style={styles.loginBtn} text='Entrar'
                        onPress={() =>{
                            this.setState({logando: !this.state.logando})
                            setTimeout(()=>{
                                alert('logado')
                                this.setState({logando: false, login: '', senha: '', mostraSenha: false})
                            }, 3000)
                        }}
                    />
                    <Btn style={{backgroundColor: "#ffee33", marginBottom: 10}} text='Limpar Campos'
                        onPress={()=>{
                            this.setState({senha: '', login: ''})
                        }}
                    />
                </View>}
                {this.state.logando && <ActivityIndicator size={120} color="#ffaa00" />}
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
    cabecalho: {
        height:'30%'
    },
    corpo: {
        flex: 1,
        width: '100%',
        alignContent: 'center',
    },
    fontPadrao:{
        color: '#333',
        fontSize: 26
    },
    inputs: {
        padding:10,
        fontSize: 18,
        marginBottom: 10,
        width: '90%'
    },
    btn:{
        flex:1,
        padding:12,
        borderRadius: 10,
        marginBottom: 10,
        width: '90%'
    },
    loginBtn:{
        backgroundColor: '#53ee63',
        marginBottom: 10,
    }
})
