// Hooks
import { useState } from 'react'

import estilo from './estilo'
import { Text, Button } from 'react-native'

export default ({initial, step}) => {
  //let number = initial
  const [number, setNumber] = useState(initial)

  const inc = () => setNumber(number + step)
  const dec = () => setNumber(number - step)

  return (
    <>
      <Text style={estilo.fontG}>{number}</Text>
      <Button title="+" onPress={inc} />
      <Button title="-" onPress={dec} />
    </>
  )
}
