import { Text } from 'react-native'
import estilo from './estilo'
import Condicional from './Condicional'

export default (props) => {
  const usuario = props.usuario || {}
  return (
    <>
      <Condicional teste={usuario && usuario.nome && usuario.email}>
        <Text style={estilo.fontG}>Usuário Logado:</Text>
        <Text style={estilo.fontG}>
          {usuario.nome} - {usuario.email}
        </Text>
      </Condicional>
    </>
  )
}
