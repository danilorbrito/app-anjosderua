// imported from modules
import React, { Component } from 'react'

import {
  StyleSheet,
  View,
  AsyncStorage
} from 'react-native'

import {
  NativeRouter,
  Route
} from 'react-router-native'

// imported from personal archives
  
  //imported from components
    import Header from './components/Header'
    import Footer from './components/Footer'
    import MyModal from './components/MyModal'
  
  // imported from pages
    import SplashScreen from './pages/SplashScreen'
    import Home from './pages/Home'
    import MeuAnimal from './pages/MeuAnimal'
    import Denuncias from './pages/Denuncias'
    import Doacoes from './pages/Doacoes'

export default class App extends Component<{}> {
  constructor(props){
    super(props)
    this.state = {
      splash: true,
      pagina: 'Home',
      modalVisible: false
    }
  }

  async componentDidMount(){
    try {
      setTimeout(async ()=>{
        this.setState({splash: false})
      }, 4500)
    } catch (err) { }
  }

  componentWillUnmount() {
    this.setState({ modalVisible: false })
  }

  render() {
    if(this.state.splash === true)
      return(<SplashScreen/>)
    return (
      <NativeRouter>
        <View style={styles.container}>
          <MyModal visible={this.state.modalVisible} fecharModal={()=> this.setState({modalVisible: false})}/>
          <Header 
            abrirModal={()=> this.setState({modalVisible: true})}  
          />
          <View style={{flex:1, padding:3, justifyContent:'center'}}>
            <Route exact path='/' component={Home}/>
            <Route path='/acompanhamento' component={MeuAnimal}/>
            <Route path='/denuncias' component={Denuncias}/>
            <Route path='/doacoes' component={Doacoes}/>
          </View>
          <Footer
            pagina={this.state.pagina}
            home={() => this.setState({ pagina: 'Home' })}
            acompanhamento={() => this.setState({ pagina: 'Acompanhamento' })}
            denuncias={() => this.setState({ pagina: 'Denuncias' })}
            doacoes={() => this.setState({ pagina: 'Doacoes' })}
          />
        </View>
      </NativeRouter>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee'
  }
})
