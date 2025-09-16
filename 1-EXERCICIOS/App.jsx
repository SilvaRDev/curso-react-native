import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import CompPadrao, { Comp1, Comp2 } from './src/components/Multi'
import Primeiro from './src/components/Primeiro'

export default function App() {
  return (
    <SafeAreaView>
      <CompPadrao />
      <Comp1 />
      <Comp2 />

      <Primeiro />
    </SafeAreaView>
  )
}
