import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

import { FeedbackProps } from '.'

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background-color: ${(props) => props.theme.COLORS.GRAY_700};
`

export const Title = styled.Text<FeedbackProps>`
  ${(props) => css`
    font-family: ${props.theme.FONT_FAMILY.NUNITO_SANS_BOLD};
    font-size: ${props.theme.FONT_SIZE.XL}px;
    line-height: ${props.theme.FONT_SIZE.XL * 1.3}px;
    color: ${props.isOnDiet
      ? props.theme.COLORS.GREEN_DARK
      : props.theme.COLORS.RED_DARK};
  `}
`

export const Text = styled.Text`
  ${(props) => css`
    font-family: ${props.theme.FONT_FAMILY.NUNITO_SANS_REGULAR};
    font-size: ${props.theme.FONT_SIZE.MD}px;
    line-height: ${props.theme.FONT_SIZE.MD * 1.3}px;
    color: ${props.theme.COLORS.GRAY_200};
    text-align: center;
  `}
`

export const TextHighlight = styled.Text`
  ${(props) => css`
    font-family: ${props.theme.FONT_FAMILY.NUNITO_SANS_BOLD};
    font-size: ${props.theme.FONT_SIZE.MD}px;
    line-height: ${props.theme.FONT_SIZE.MD * 1.3}px;
    color: ${props.theme.COLORS.GRAY_200};
  `}
`

export const FeedbackImage = styled.Image`
  filter: invert(1);
  margin: 24px 0px;
  width: 224px;
  height: 288px;
`

export const GoToListMealsButton = styled.TouchableOpacity`
  ${(props) => css`
    background-color: ${props.theme.COLORS.GRAY_500};
    padding: 16px 24px;
    border-radius: 6px;
  `}
`
