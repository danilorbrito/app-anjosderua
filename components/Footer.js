import React, { Component } from 'react'

import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'

import { Icon } from 'react-native-elements'

import {
    Link
} from 'react-router-native'

export default class Footer extends Component<{}> {
    constructor(props) {
        super(props)
        this.state = {
            color: '#ccc'
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Link to='/' onPress={this.props.home} style={styles.linkPad} disabled={this.props.pagina === 'Home'}>
                    <Icon
                        name='sign-in'
                        type='font-awesome'
                        color={(this.props.pagina === 'Home' && this.state.color) || '#1E90FF'}
                    />
                </Link>
                <Link to='/acompanhamento' onPress={this.props.acompanhamento} style={styles.linkPad} disabled={this.props.pagina === 'Acompanhamento'}>
                    <Icon
                        name='baidu'
                        type='entypo'
                        color={(this.props.pagina === 'Acompanhamento' && this.state.color) || '#cd853f'}
                    />
                </Link>
                <Link to='/doacoes' onPress={this.props.doacoes} style={styles.linkPad} disabled={this.props.pagina === 'Doacoes'}>
                    <Icon
                        name='attach-money'
                        type='material'
                        size={26}
                        color={(this.props.pagina === 'Doacoes' && this.state.color) || '#228b22'}
                    />
                </Link>
                <Link to='/denuncias' onPress={this.props.denuncias} style={styles.linkPad} disabled={this.props.pagina === 'Denuncias'}>
                    <Icon
                        name='alert'
                        type='foundation'
                        color={(this.props.pagina === 'Denuncias' && this.state.color) || '#FFaf00'}
                    />
                </Link>
            </View> 
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        paddingVertical: 2,
        paddingHorizontal: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#eee'
    },
    fonte: {
        fontSize: 20
    },
    linkPad: {
        padding: 7
    }
})


