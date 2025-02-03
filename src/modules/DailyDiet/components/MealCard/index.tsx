import { TouchableOpacityProps } from 'react-native'
import { useTheme } from 'styled-components/native'

import {
  Container,
  MealName,
  MealTime,
  MealType,
  VerticalDivider,
} from './styles'

export type MealCardProps = TouchableOpacityProps & {
  mealTime: string
  mealName: string
  isOnDiet: boolean
}

export function MealCard({
  mealTime,
  mealName,
  isOnDiet,
  ...rest
}: MealCardProps) {
  const { COLORS } = useTheme()

  return (
    <Container {...rest}>
      <MealTime>{mealTime}</MealTime>
      <VerticalDivider />
      <MealName numberOfLines={1} ellipsizeMode="tail">
        {mealName}
      </MealName>
      <MealType color={isOnDiet ? COLORS.GREEN_MID : COLORS.RED_MID} />
    </Container>
  )
}
