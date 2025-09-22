import { View, StyleSheet } from 'react-native'

export default ({ cor }) => {
  const lado = 50
  return (
    <View style={{
      height: lado,
      width: lado,
      backgroundColor: cor || '#000'
    }} />
  )
}