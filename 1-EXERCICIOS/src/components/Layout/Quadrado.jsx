import { View, StyleSheet } from 'react-native'

export default ({ cor }) => {
  return (
    <View style={{
      height: 20,
      width: 20,
      backgroundColor: cor || '#000'
    }} />
  )
}