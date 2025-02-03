import { Header } from './components/Header'
import { Highlight } from './components/Highlight'
import { Container } from './styles'

export function DailyDiet() {
  return (
    <Container>
      <Header />
      <Highlight showButtonType="statistics" />
    </Container>
  )
}
