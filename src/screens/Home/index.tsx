import { Header } from '@components/Header'
import { Toolbar } from '@components/Toolbar'
import { WeeklyProgress } from '@components/WeeklyProgress'
import { DailyDiet } from '@screens/DailyDiet'

import { Container } from './styles'

export function Home() {
  return (
    <Container>
      <Toolbar showBackButton title="Daily Diet" />

      {/* <Header />
      <WeeklyProgress /> */}

      <DailyDiet />
    </Container>
  )
}
