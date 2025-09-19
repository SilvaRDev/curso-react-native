import { Text } from 'react-native'
import { View, Button, StyleSheet } from 'react-native'

export default ({ inc, dec }) => {
  return (
    <View style={style.Botoes}>
      <Button title="+" onPress={inc} />
      <Button title="-" onPress={dec} />
    </View>
  )
}

const style = StyleSheet.create({
  Botoes: {
    flexDirection: 'row'
  }
})
