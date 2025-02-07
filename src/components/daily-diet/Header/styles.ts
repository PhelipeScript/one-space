import { CaretLeft } from 'phosphor-react-native'
import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`

export const BackButton = styled.TouchableOpacity``

export const BackIcon = styled(CaretLeft).attrs((props) => ({
  size: 32,
  color: props.theme.COLORS.WHITE,
}))``
