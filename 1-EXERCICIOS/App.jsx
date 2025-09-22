import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import Diferenciar from './src/components/Diferenciar'
// import ContadorV2 from './src/components/Contador/ContadorV2'
// import Pai from './src/components/Indireta/Pai'
// import Pai from './src/components/Direta/Pai'
//import Contador from './src/components/Contador'
/* import Botao from './src/components/Botao' */
/* import Titulo from './src/components/Titulo' */
/* import Aleatorio from './src/components/Aleatorio' */
/* import MinMax from './src/components/MinMax' */
/* import CompPadrao, { Comp1, Comp2 } from './src/components/Multi'
import Primeiro from './src/components/Primeiro' */

export default function App() {
  return (
    <SafeAreaView style={style.App}>
      <Diferenciar />
      {/* <Aleatorio min={1} max={60} />
      <ContadorV2 />
      <Pai />
      <Contador initial={19} step={5} />
      <Contador initial={100} step={8} />
      <Botao />
      <Titulo
        principal="Cadastro produto"
        secundario="Tela de cadastro do produto"
      />
      <Aleatorio min={1} max={60} />
      <Aleatorio min={1} max={60} />
      <Aleatorio min={1} max={60} />
      <Aleatorio min={1} max={60} />
      <Aleatorio min={1} max={60} /> */}
      {/* <MinMax min='3' max='20' />
      <MinMax min='1' max='94' /> */}
      {/* <CompPadrao />
      <Comp1 />
      <Comp2 />
      <Primeiro /> */}
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
})
