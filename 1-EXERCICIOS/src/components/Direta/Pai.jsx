import { Text } from 'react-native'
import estilo from '../estilo'

import Filho from './Filho'

export default () => {
  let X = 13
  let Y = 100

  return (
    <>
      <Filho a={X} b={Y} />
      <Filho a={X + 100} b={Y + 200} />
    </>
  )
}