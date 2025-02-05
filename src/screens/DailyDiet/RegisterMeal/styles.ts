import { TextInput } from 'react-native'
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${(props) => props.theme.COLORS.GRAY_700};
`

export const Title = styled.Text`
  ${(props) => css`
    font-family: ${props.theme.FONT_FAMILY.NUNITO_SANS_BOLD};
    font-size: ${props.theme.FONT_SIZE.LG}px;
    line-height: ${props.theme.FONT_SIZE.LG * 1.3}px;
    color: ${props.theme.COLORS.GRAY_100};
    margin: 24px 0;
  `}
`

export const Content = styled.View`
  flex: 1;
  width: 100%;
  padding: 12px 24px;
  background-color: ${(props) => props.theme.COLORS.GRAY_600};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`

export const Label = styled.Text`
  ${(props) => css`
    font-family: ${props.theme.FONT_FAMILY.NUNITO_SANS_BOLD};
    font-size: ${props.theme.FONT_SIZE.SM}px;
    line-height: ${props.theme.FONT_SIZE.SM * 1.3}px;
    color: ${props.theme.COLORS.GRAY_200};
    margin-top: 24px;
  `}
`

export const Input = styled(TextInput).attrs((props) => ({
  placeholderTextColor: props.theme.COLORS.GRAY_300,
  color: props.theme.COLORS.GRAY_100,
  selectionColor: props.theme.COLORS.GREEN_LIGHT,
  underlineColorAndroid: 'transparent',
  autoCorrect: false,
}))`
  width: 100%;
  border: 1px solid ${(props) => props.theme.COLORS.GRAY_400};
  border-radius: 6px;
  padding: 12px;
  margin-top: 6px;
`
