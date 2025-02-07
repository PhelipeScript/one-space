import IsNotOnDietImage from '@assets/daily-diet/boy_illustration.png'
import IsOnDietImage from '@assets/daily-diet/girl_illustration.png'

import {
  Container,
  FeedbackImage,
  GoToListMealsButton,
  Text,
  TextHighlight,
  Title,
} from './styles'

export interface FeedbackProps {
  isOnDiet: boolean
}

export function Feedback({ isOnDiet }: FeedbackProps) {
  return (
    <Container>
      <Title isOnDiet={isOnDiet}>
        {isOnDiet ? 'Continue assim!' : 'Que pena!'}
      </Title>
      <Text>
        {isOnDiet ? 'Você continua' : 'Você'}
        {isOnDiet ? (
          <TextHighlight> dentro da dieta. </TextHighlight>
        ) : (
          <TextHighlight> saiu da dieta </TextHighlight>
        )}
        {isOnDiet
          ? 'Muito bem!'
          : 'dessa vez, mas continue se esforçando e não desista!'}
      </Text>
      <FeedbackImage source={isOnDiet ? IsOnDietImage : IsNotOnDietImage} />
      <GoToListMealsButton>
        <TextHighlight>Ir para a página inicial</TextHighlight>
      </GoToListMealsButton>
    </Container>
  )
}
