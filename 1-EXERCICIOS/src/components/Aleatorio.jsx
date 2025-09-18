import { Text } from 'react-native'
import estilo from './estilo'

export default ({ min, max }) => {
  const randNum = Math.floor(Math.random() * (max - min)) + min
  return (
    <Text style={estilo.fontG}>O número gerado foi: {randNum}!</Text>
  )
}