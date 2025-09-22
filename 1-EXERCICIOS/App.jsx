import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import FlexBoxV3 from './src/components/Layout/FlexBoxV3'
// import FlexBoxV2 from './src/components/Layout/FlexBoxV2'
// import FlexBoxV1 from './src/components/Layout/FlexBoxV1'
// import Quadrado from './src/components/Layout/Quadrado'
// import DigiteSeuNome from './src/components/DigiteSeuNome'
// import ListaProdutosV2 from './src/components/Produtos/ListaProdutosV2'
// import ListaProdutos from './src/components/Produtos/ListaProdutos'
// import UsuarioLogado from './src/components/UsuarioLogado'
// import Familia from './src/components/Relacao/Familia'
// import Membro from './src/components/Relacao/Membro'
//import ParImpar from './src/components/ParImpar'
//import Diferenciar from './src/components/Diferenciar'
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
      <FlexBoxV3 />
      {/* <Aleatorio min={1} max={60} />
      <FlexBoxV2 />
      <FlexBoxV1 />
      <DigiteSeuNome />
      <ListaProdutosV2 />
      <ListaProdutos />
      <UsuarioLogado usuario={{ nome: 'Gui', email: 'Gui@gui.com' }} />
      <UsuarioLogado usuario={{ nome: 'Jão' }} />
      <UsuarioLogado usuario={{ email: 'carlos@empresa.com' }} />
      <UsuarioLogado usuario={{}} />
      <Familia >
        <Membro nome='Francisco' sobrenome='Arruda' />
        <Membro nome='Josefa' sobrenome='Arruda' />
      </Familia>
      <Familia >
        <Membro nome='João' sobrenome='Da Silva' />
        <Membro nome='José' sobrenome='Da Silva' />
        <Membro nome='Guilherme' sobrenome='Da Silva' />
        <Membro nome='Alana' sobrenome='Da Silva' />
      </Familia>
      <ParImpar num={5} />
      <Diferenciar />
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
