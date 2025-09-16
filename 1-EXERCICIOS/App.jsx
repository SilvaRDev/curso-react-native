import { View, Text } from 'react-native'

import Primeiro from './src/components/Primeiro'

export default function App() {
  return (
    <View>
      <Text>Valor da expressão: {1 + 1}</Text>
      <Primeiro />
    </View>
  )
}
