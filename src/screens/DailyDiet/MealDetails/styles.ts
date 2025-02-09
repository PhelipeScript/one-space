import {
  ArrowLeft,
  Circle,
  PencilSimpleLine,
  Trash,
} from 'phosphor-react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

interface ContainerProps {
  isOnDiet: boolean
}

export const Container = styled(SafeAreaView)<ContainerProps>`
  flex: 1;
  background-color: ${(props) =>
    props.isOnDiet
      ? props.theme.COLORS.GREEN_LIGHT
      : props.theme.COLORS.RED_LIGHT};
`

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 24px;
`

export const BackButton = styled.TouchableOpacity``

export const BackIcon = styled(ArrowLeft).attrs((props) => ({
  size: 24,
  color: props.theme.COLORS.GRAY_600,
}))``

export const Title = styled.Text`
  ${(props) => css`
    font-family: ${props.theme.FONT_FAMILY.NUNITO_SANS_BOLD};
    font-size: ${props.theme.FONT_SIZE.LG}px;
    line-height: ${props.theme.FONT_SIZE.LG * 1.3}px;
    color: ${props.theme.COLORS.GRAY_600};
  `}

  flex: 1;
  text-align: center;
`

export const Content = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: 24px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${(props) => props.theme.COLORS.GRAY_700};
`

export const MealDetailsContainer = styled.View`
  gap: 12px;
  padding: 24px 0;
`

export const MealName = styled.Text`
  ${(props) => css`
    font-family: ${props.theme.FONT_FAMILY.NUNITO_SANS_BOLD};
    font-size: ${props.theme.FONT_SIZE.XL}px;
    line-height: ${props.theme.FONT_SIZE.XL * 1.3}px;
    color: ${props.theme.COLORS.GRAY_100};
  `}
`

export const Text = styled.Text`
  ${(props) => css`
    font-family: ${props.theme.FONT_FAMILY.NUNITO_SANS_REGULAR};
    font-size: ${props.theme.FONT_SIZE.MD}px;
    line-height: ${props.theme.FONT_SIZE.MD * 1.3}px;
    color: ${props.theme.COLORS.GRAY_200};
  `}
`

export const TextHighlight = styled.Text`
  ${(props) => css`
    font-family: ${props.theme.FONT_FAMILY.NUNITO_SANS_BOLD};
    font-size: ${props.theme.FONT_SIZE.SM}px;
    line-height: ${props.theme.FONT_SIZE.SM * 1.3}px;
    color: ${props.theme.COLORS.GRAY_100};
  `}
`

export const Tag = styled.View`
  ${(props) => css`
    background-color: ${props.theme.COLORS.GRAY_600};
  `}

  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 150px;
  padding: 4px 12px;
  margin-top: 16px;
  border-radius: 20px;
`

interface CircleIconProps {
  isOnDiet: boolean
}

export const CircleIcon = styled(Circle).attrs({
  size: 8,
  weight: 'fill',
})<CircleIconProps>`
  color: ${(props) =>
    props.isOnDiet
      ? props.theme.COLORS.GREEN_DARK
      : props.theme.COLORS.RED_DARK};
`

export const ButtonsContainer = styled.View`
  gap: 12px;
`

interface ButtonProps {
  type: 'edit' | 'delete'
}

export const Button = styled.TouchableOpacity<ButtonProps>`
  ${(props) => css`
    border: 2px solid ${props.theme.COLORS.GRAY_400};
    background-color: ${props.type === 'edit'
      ? props.theme.COLORS.GRAY_400
      : props.theme.COLORS.GRAY_700};
  `}

  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 16px 24px;
  border-radius: 6px;
`

export const PencilIcon = styled(PencilSimpleLine).attrs((props) => ({
  size: 18,
  color: props.theme.COLORS.GRAY_100,
}))``

export const TrashIcon = styled(Trash).attrs((props) => ({
  size: 18,
  color: props.theme.COLORS.GRAY_100,
}))``
