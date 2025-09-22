import { View, StyleSheet } from 'react-native'

export default ({ cor, lado }) => {
  const ladoProp = lado || 50 
  return (
    <View style={{
      height: ladoProp,
      width: ladoProp,
      backgroundColor: cor || '#000'
    }} />
  )
}