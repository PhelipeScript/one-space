import { Header } from '@components/Header'
import { Toolbar } from '@components/Toolbar'
import { WeeklyProgress } from '@components/WeeklyProgress'

import { Container } from './styles'

export function Home() {
  return (
    <Container>
      <Toolbar />

      <Header />
      <WeeklyProgress />
    </Container>
  )
}
