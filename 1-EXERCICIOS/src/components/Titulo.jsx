import { Text } from "react-native"
import estilo from "./estilo"

export default ({principal, secundario}) => {
  return (
    <>
      <Text style={estilo.fontG}>{principal}</Text>
      <Text>{secundario}</Text>
    </>
  )
}
