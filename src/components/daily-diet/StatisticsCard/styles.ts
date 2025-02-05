import theme from '@theme/index'
import styled, { css } from 'styled-components/native'

export interface ContainerProps {
  size?: 'full' | 'half'
  backgroundColor?: keyof typeof theme.COLORS
  textColor?: keyof typeof theme.COLORS
}

export const Container = styled.View<ContainerProps>`
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: ${(props) => (props?.size === 'half' ? '50%' : '100%')};
  padding: 16px;
  border-radius: 8px;
  background-color: ${(props) =>
    props.theme.COLORS[props.backgroundColor || 'GRAY_600']};
`

export const Title = styled.Text<ContainerProps>`
  ${(props) => css`
    font-family: ${props.theme.FONT_FAMILY.NUNITO_SANS_BOLD};
    font-size: ${props.theme.FONT_SIZE.XL}px;
    line-height: ${props.theme.FONT_SIZE.XL * 1.3}px;
    color: ${props.theme.COLORS[props.textColor || 'GRAY_100']};
    text-align: center;
  `}
`

export const Subtitle = styled.Text<ContainerProps>`
  ${(props) => css`
    font-family: ${props.theme.FONT_FAMILY.NUNITO_SANS_REGULAR};
    font-size: ${props.theme.FONT_SIZE.SM}px;
    line-height: ${props.theme.FONT_SIZE.SM * 1.3}px;
    color: ${props.theme.COLORS[props.textColor || 'GRAY_200']};
    text-align: center;
  `}
`
