import { CaretLeft, Circle } from 'phosphor-react-native'
import { TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  background-color: ${(props) => props.theme.COLORS.GRAY_700};
`

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Title = styled.Text`
  ${(props) => css`
    font-family: ${props.theme.FONT_FAMILY.NUNITO_SANS_BOLD};
    font-size: ${props.theme.FONT_SIZE.LG}px;
    line-height: ${props.theme.FONT_SIZE.LG * 1.3}px;
    color: ${props.theme.COLORS.GRAY_100};
  `}

  flex: 1;
  text-align: center;
  margin: 24px 0;
`

export const BackButton = styled.TouchableOpacity``

export const BackIcon = styled(CaretLeft).attrs((props) => ({
  size: 32,
  color: props.theme.COLORS.GRAY_100,
}))``

export const Content = styled.View`
  flex: 1;
  justify-content: space-between;
  width: 100%;
  padding: 12px 24px 24px;
  background-color: ${(props) => props.theme.COLORS.GRAY_600};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`

export const Form = styled.View``

export const InputContainer = styled.View``

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
  ${(props) => css`
    font-family: ${props.theme.FONT_FAMILY.NUNITO_SANS_BOLD};
    font-size: ${props.theme.FONT_SIZE.MD}px;
    line-height: ${props.theme.FONT_SIZE.MD * 1.3}px;
    border: 1px solid ${props.theme.COLORS.GRAY_400};
  `}
  width: 100%;
  border-radius: 6px;
  padding: 12px;
  margin-top: 6px;
`

export const MealDateTimeContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const MealDateTimeButton = styled.TouchableOpacity`
  width: 100%;
  border: 1px solid ${(props) => props.theme.COLORS.GRAY_400};
  border-radius: 6px;
  padding: 12px;
  margin-top: 6px;
`

type IsOnDietProps = {
  isOnDiet?: boolean
}

type IsOnDietButtonProps = IsOnDietProps & {
  selected?: boolean
}

export const Text = styled.Text<IsOnDietProps>`
  ${(props) => css`
    font-family: ${props.theme.FONT_FAMILY.NUNITO_SANS_BOLD};
    font-size: ${props.theme.FONT_SIZE.MD}px;
    line-height: ${props.theme.FONT_SIZE.MD * 1.3}px;
    color: ${props.isOnDiet
      ? props.theme.COLORS.GRAY_700
      : props.theme.COLORS.GRAY_100};
  `}
`

export const IsOnDietButton = styled.TouchableOpacity<IsOnDietButtonProps>`
  ${(props) => css`
    background-color: ${props.selected
      ? props.isOnDiet
        ? props.theme.COLORS.GREEN_LIGHT
        : props.theme.COLORS.RED_LIGHT
      : props.theme.COLORS.GRAY_400};

    border: 2px solid
      ${props.selected
        ? props.isOnDiet
          ? props.theme.COLORS.GREEN_DARK
          : props.theme.COLORS.RED_DARK
        : props.theme.COLORS.GRAY_400};
  `}
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 48%;
  padding: 16px;
  margin-top: 6px;
  border-radius: 6px;
`

export const IsOnDietIcon = styled(Circle)<IsOnDietProps>`
  ${(props) => css`
    color: ${props.isOnDiet
      ? props.theme.COLORS.GREEN_DARK
      : props.theme.COLORS.RED_DARK};
  `}
`

export const RegisterMealButton = styled.TouchableOpacity`
  ${(props) => css`
    background-color: ${props.theme.COLORS.GRAY_500};
  `}

  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 16px 24px;
  margin-top: 24px;
  border-radius: 6px;
`
