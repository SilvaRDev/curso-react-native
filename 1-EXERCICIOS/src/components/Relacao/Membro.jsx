import { Text } from 'react-native'
import estilo from '../estilo'

export default ({nome, sobrenome}) => {
  return (
    <>
      <Text style={estilo.fontG}>
        {nome} {sobrenome}
      </Text>
    </>
  )
}