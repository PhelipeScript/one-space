import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 32px 0;
  width: 100%;
`

export const TitleContainer = styled.View``

export const Title = styled.Text`
  ${(props) => css`
    font-family: ${props.theme.FONT_FAMILY.BOLD};
    font-size: ${props.theme.FONT_SIZE.XL}px;
    line-height: ${props.theme.FONT_SIZE.XL * 1.6}px;
    color: ${props.theme.COLORS.GRAY_100};
  `}
`

export const Subtitle = styled.Text`
  ${(props) => css`
    font-family: ${props.theme.FONT_FAMILY.REGULAR};
    font-size: ${props.theme.FONT_SIZE.SM}px;
    color: ${props.theme.COLORS.GRAY_200};
  `}
`
