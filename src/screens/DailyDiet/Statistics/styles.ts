import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.COLORS.GREEN_LIGHT};
`

export const Content = styled.View`
  flex: 1;
  align-items: center;
  gap: 12px;
  padding: 24px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${(props) => props.theme.COLORS.GRAY_700};
`

export const Title = styled.Text`
  ${(props) => css`
    font-family: ${props.theme.FONT_FAMILY.NUNITO_SANS_BOLD};
    font-size: ${props.theme.FONT_SIZE.SM}px;
    line-height: ${props.theme.FONT_SIZE.SM * 1.3}px;
    color: ${props.theme.COLORS.GRAY_100};
  `}
`

export const StatisticsCardContainer = styled.View`
  flex-direction: row;
  gap: 12px;
  padding: 0 6px;
`
