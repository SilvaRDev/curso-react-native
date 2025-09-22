import { View, Text } from 'react-native'
import estilo from '../estilo'

import Produtos from './Produtos'

export default () => {
  function obterLista() {
    return Produtos.map((p) => {
      return (
        <View key={p.id}>
          <Text>
            {p.id} | {p.nome} - R${p.preco}
          </Text>
        </View>
      )
    })
  }
  return (
    <>
      <Text style={estilo.fontG}>
        Lista de produtos
      </Text>
      {obterLista()}
    </>
  )
}
