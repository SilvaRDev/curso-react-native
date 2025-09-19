import { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import estilo from '../estilo'

import ContadorDisplay from './ContadorDisplay'
import ContadorBotoes from './ContadorBotoes'

export default () => {
  const [num, setNum] = useState(0)

  const inc = () => setNum(num + 1)
  const dec = () => setNum(num - 1)

  return (
    <>
      <Text style={estilo.fontG}>
        Contador
      </Text>
      <ContadorDisplay num={num} />
      <ContadorBotoes inc={inc} dec={dec} />
    </>
  )
}
