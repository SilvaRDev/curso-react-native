import { Text } from 'react-native'

export default (props) => {
  const randNum = Math.floor(Math.random() * (props.max - props.min)) + props.min
  return (
    <Text>O número gerado foi: {randNum}!</Text>
  )
}