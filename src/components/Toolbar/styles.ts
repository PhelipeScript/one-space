import { CaretLeft, List } from 'phosphor-react-native'
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.Text`
  text-align: center;
  flex: 1;
  ${(props) => css`
    font-family: ${props.theme.FONT_FAMILY.ROBOTO_BOLD};
    font-size: ${props.theme.FONT_SIZE.LG}px;
    color: ${props.theme.COLORS.GRAY_100};
  `}
`

export const BackButton = styled.TouchableOpacity``

export const BackIcon = styled(CaretLeft).attrs((props) => ({
  size: 32,
  color: props.theme.COLORS.WHITE,
}))``

export const ListButton = styled.TouchableOpacity``

export const ListIcon = styled(List).attrs((props) => ({
  size: 32,
  color: props.theme.COLORS.WHITE,
}))``
