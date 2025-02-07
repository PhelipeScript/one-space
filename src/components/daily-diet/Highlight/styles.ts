import { ArrowLeft, ArrowUpRight } from 'phosphor-react-native'
import styled, { css } from 'styled-components/native'

import { HighlightProps } from '.'

export const Container = styled.View`
  ${(props) => css`
    background-color: ${props.theme.COLORS.GREEN_LIGHT};
  `}
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 20px 16px;
  margin: 12px 0;
  position: relative;
`

export const ButtonIcon = styled.TouchableOpacity<HighlightProps>`
  position: absolute;
  top: 8px;
  ${(props) => {
    const position = {
      back: 'left: 8px;',
      statistics: 'right: 8px;',
    }

    return css`
      ${position[props.showButtonType]}
    `
  }}
`

export const StatisticsIcon = styled(ArrowUpRight).attrs((props) => ({
  size: 24,
  color: props.theme.COLORS.GREEN_DARK,
}))``

export const BackIcon = styled(ArrowLeft).attrs((props) => ({
  size: 24,
  color: props.theme.COLORS.GREEN_DARK,
}))``

export const Percentage = styled.Text`
  ${(props) => css`
    font-family: ${props.theme.FONT_FAMILY.NUNITO_SANS_BOLD};
    font-size: ${props.theme.FONT_SIZE.XXL}px;
    line-height: ${props.theme.FONT_SIZE.XXL * 1.3}px;
    color: ${props.theme.COLORS.GRAY_700};
  `}
`

export const Text = styled.Text`
  ${(props) => css`
    font-family: ${props.theme.FONT_FAMILY.NUNITO_SANS_REGULAR};
    font-size: ${props.theme.FONT_SIZE.SM}px;
    line-height: ${props.theme.FONT_SIZE.SM * 1.3}px;
    color: ${props.theme.COLORS.GRAY_400};
  `}
`
