import { Header } from '@components/daily-diet/Header'
import { Highlight } from '@components/daily-diet/Highlight'
import { Meals } from '@components/daily-diet/Meals'

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
