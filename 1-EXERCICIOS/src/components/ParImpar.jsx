import { View, Text } from 'react-native'
import estilo from './estilo'

export default ({num = 0}) => {
  return (
    <View>
      <Text style={estilo.fontG}>O resultado é:</Text>
      {num % 2 === 0 
        ? <Text style={estilo.fontG}>Par</Text>
        : <Text style={estilo.fontG}>Ímpar</Text>
      }
    </View>
  )
}