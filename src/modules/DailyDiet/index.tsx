import { Header } from './components/Header'
import { Highlight } from './components/Highlight'
import { Meals } from './components/Meals'
import { Container } from './styles'

export function DailyDiet() {
  return (
    <Container>
      <Header />
      <Highlight showButtonType="statistics" />
      <Meals />
    </Container>
  )
}
