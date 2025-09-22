import { View, StyleSheet } from 'react-native'

export default () => {
  return (
    <View style={style.FlexV4}>
      <View style={style.V0} />
      <View style={style.V1} />
      <View style={style.V2} />
    </View>
  )
}

const style = StyleSheet.create({
  FlexV4: {
    flexGrow: 1,
    width: '100',
    backgroundColor: '#000'
  },
  V0: {
    backgroundColor: '#8312ed',
    height: 300
  },
  V1: {
    backgroundColor: '#ff801a',
    flexGrow: 3
  },
  V2: {
    backgroundColor: '#50d1d6',
    flexGrow: 1
  }
})