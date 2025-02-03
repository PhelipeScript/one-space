import { AddIcon, Container, NewMealButton, Text, Title } from './styles'

export function Meals() {
  return (
    <Container>
      <Title>Refeições</Title>
      <NewMealButton>
        <AddIcon />
        <Text>Nova refeição</Text>
      </NewMealButton>
    </Container>
  )
}
