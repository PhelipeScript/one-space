import { Circle, LineVertical } from 'phosphor-react-native'
import styled, { css } from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  border: 1px solid ${(props) => props.theme.COLORS.GRAY_500};
  flex-direction: row;
  align-items: center;
  gap: 12px;
  border-radius: 6px;
  padding: 16px;
  margin-top: 8px;
`

export const MealTime = styled.Text`
  ${(props) => css`
    font-family: ${props.theme.FONT_FAMILY.NUNITO_SANS_BOLD};
    font-size: ${props.theme.FONT_SIZE.XS}px;
    line-height: ${props.theme.FONT_SIZE.XS * 1.3}px;
    color: ${props.theme.COLORS.GRAY_100};
  `}
`

export const VerticalDivider = styled(LineVertical).attrs((props) => ({
  size: 14,
  color: props.theme.COLORS.GRAY_300,
}))``

export const MealName = styled.Text`
  ${(props) => css`
    font-family: ${props.theme.FONT_FAMILY.NUNITO_SANS_REGULAR};
    font-size: ${props.theme.FONT_SIZE.MD}px;
    line-height: ${props.theme.FONT_SIZE.MD * 1.3}px;
    color: ${props.theme.COLORS.GRAY_200};
  `}

  flex: 1;
`

export const MealType = styled(Circle).attrs({ size: 14, weight: 'fill' })``
