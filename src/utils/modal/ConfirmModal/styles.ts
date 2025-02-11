import styled, { css } from 'styled-components/native'

export const Overlay = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.COLORS.GRAY_700 + '80'};
`

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  gap: 32px;
  width: 85%;
  padding: 32px;
  background-color: ${(props) => props.theme.COLORS.GRAY_600};
  border-radius: 8px;
`

export const Message = styled.Text`
  ${(props) => css`
    font-family: ${props.theme.FONT_FAMILY.NUNITO_SANS_BOLD};
    font-size: ${props.theme.FONT_SIZE.LG}px;
    line-height: ${props.theme.FONT_SIZE.LG * 1.3}px;
    color: ${(props) => props.theme.COLORS.GRAY_100};
  `}

  text-align: center;
`

export const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: 12px;
  width: 285px;
  padding-right: 12px;
`

interface ButtonProps {
  type: 'primary' | 'secondary'
}

export const Button = styled.TouchableOpacity<ButtonProps>`
  ${(props) => css`
    border: 1px solid ${props.theme.COLORS.GRAY_100};
    background-color: ${props.type === 'primary'
      ? props.theme.COLORS.GRAY_100
      : props.theme.COLORS.GRAY_600};
  `}

  align-items: center;
  justify-content: center;
  padding: 16px 24px;
  border-radius: 6px;
  width: 50%;
`

export const ButtonText = styled.Text<ButtonProps>`
  ${(props) => css`
    font-family: ${props.theme.FONT_FAMILY.NUNITO_SANS_BOLD};
    font-size: ${props.theme.FONT_SIZE.SM}px;
    line-height: ${props.theme.FONT_SIZE.SM * 1.3}px;
    color: ${props.type === 'primary'
      ? props.theme.COLORS.GRAY_600
      : props.theme.COLORS.GRAY_100};
  `}
`
