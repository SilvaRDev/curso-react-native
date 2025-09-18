import { useState } from 'react'
import { Text } from 'react-native'
import Filho from './Filho'
import estilo from '../estilo'

export default () => {
  const [text, setText] = useState('')
  const [num, setNum] = useState(0)

  function exibirValor(number, t) {
    setNum(number)
    setText(t)
  }

  return (
    <>
      <Text style={estilo.fontG}>
        {text}{num}
      </Text>
      <Filho min={1} max={60} fct={exibirValor} />
    </>
  )
}
