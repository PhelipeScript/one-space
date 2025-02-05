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
  return (
    <Container>
      <ButtonIcon showButtonType={showButtonType}>
        {showButtonType === 'statistics' ? <StatisticsIcon /> : <BackIcon />}
      </ButtonIcon>
      <Percentage>50%</Percentage>
      <Text>das refeições dentro da dieta</Text>
    </Container>
  )
}
