import { Text } from 'react-native'
import estilo from '../estilo'
import { Button } from 'react-native'

export default (props) => {

  function generateNum(min, max) {
    const fator = max - min + 1
    return parseInt(Math.random() * fator) + min
  }

  return (
    <Button
      title='Executar'
      onPress={() => {
        const n = generateNum(props.min, props.max)
        props.fct(n, 'O valor é: ')
      }}
    />
  )
}