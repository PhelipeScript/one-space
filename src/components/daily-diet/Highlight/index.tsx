import { useNavigation } from '@react-navigation/native'

import {
  BackIcon,
  ButtonIcon,
  Container,
  Percentage,
  StatisticsIcon,
  Text,
} from './styles'

export interface HighlightProps {
  showButtonType: 'statistics' | 'back'
}

export function Highlight({ showButtonType }: HighlightProps) {
  const navigation = useNavigation()

  function handleGoToStatistics() {
    navigation.navigate('daily-diet/statistics')
  }

  function handleGoToDailyDiet() {
    navigation.navigate('daily-diet')
  }

  return (
    <Container>
      <ButtonIcon
        showButtonType={showButtonType}
        onPress={
          showButtonType === 'statistics'
            ? handleGoToStatistics
            : handleGoToDailyDiet
        }
      >
        {showButtonType === 'statistics' ? <StatisticsIcon /> : <BackIcon />}
      </ButtonIcon>
      <Percentage>50%</Percentage>
      <Text>das refeições dentro da dieta</Text>
    </Container>
  )
}
