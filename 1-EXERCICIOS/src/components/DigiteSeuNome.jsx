import { useState } from 'react'
import { View, TextInput, Text } from 'react-native'
import estilo from './estilo'

export default () => {
  const [nome, setNome] = useState('Teste')
  return (
    <View>
      <Text style={estilo.fontG}>{nome}</Text>
      <TextInput 
        placeholder='Digite o seu nome'
        value={nome}
        onChangeText={nome => setNome(nome)}
      />
    </View>
  )
}