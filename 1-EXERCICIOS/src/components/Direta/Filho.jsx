import { Text } from 'react-native'
import estilo from '../estilo'

export default ({a, b}) => {
  return (
    <>
      <Text style={estilo.fontG}>{a}</Text>
      <Text style={estilo.fontG}>{b}</Text>
    </>
  )
}