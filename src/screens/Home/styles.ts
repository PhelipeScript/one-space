import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 0px 12px 24px;
  background-color: ${(props) => props.theme.COLORS.GRAY_700};
`

export const Title = styled.Text`
  color: #fff;
  font-size: 36px;
`
