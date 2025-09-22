import { Text, FlatList } from 'react-native'
import estilo from '../estilo'

import produtos from './Produtos'

export default () => {
  const produtoRender = ({ item: p }) => {
    return (
      <Text>
        {p.id} - {p.nome} - R${p.preco}
      </Text>
    )
  }
  return (
    <>
      <Text style={estilo.fontG}>Lista de produtos V2</Text>
      <FlatList
        data={produtos}
        keyExtractor={(i) => `${i.id}`}
        renderItem={produtoRender}
      />
    </>
  )
}
