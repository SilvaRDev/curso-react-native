import { Component } from 'react'
import { Text, TextInput } from 'react-native'
import estilo from '../estilo'

export default class Mega extends Component {
  
  state = {
    qtDeNumeros: this.props.qtDeNumeros
  }

  alterarQtdeNumero(qtd) {
    this.setState({ qtDeNumeros: qtd })
  }

  render() {
    return (
      <>
        <Text style={estilo.fontG}>
          Gerador de Mega-Sena
          {this.state.qtDeNumeros}
        </Text>
        <TextInput 
          placeholder='Qtd de Números'
          value={this.state.qtDeNumeros}
          onChangeText={this.alterarQtdeNumero}
        />
      </>
    )
  }

}