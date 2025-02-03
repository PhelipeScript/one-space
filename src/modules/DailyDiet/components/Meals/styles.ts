import { Plus } from 'phosphor-react-native'
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
`

export const Title = styled.Text`
  ${(props) => css`
    font-family: ${props.theme.FONT_FAMILY.NUNITO_SANS_REGULAR};
    font-size: ${props.theme.FONT_SIZE.MD}px;
    line-height: ${props.theme.FONT_SIZE.MD * 1.3}px;
    color: ${props.theme.COLORS.GRAY_100};
  `}

  margin-bottom: 8px;
`

export const NewMealButton = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.COLORS.GRAY_400};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 24px;
  border-radius: 6px;
`

export const Text = styled.Text`
  ${(props) => css`
    font-family: ${props.theme.FONT_FAMILY.NUNITO_SANS_BOLD};
    font-size: ${props.theme.FONT_SIZE.SM}px;
    line-height: ${props.theme.FONT_SIZE.SM * 1.3}px;
    color: ${props.theme.COLORS.GRAY_100};
  `}
`

export const AddIcon = styled(Plus).attrs((props) => ({
  size: 18,
  color: props.theme.COLORS.GRAY_100,
}))``
