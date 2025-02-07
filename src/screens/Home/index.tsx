import { Header } from '@components/Header'
import { Toolbar } from '@components/Toolbar'
import { WeeklyProgress } from '@components/WeeklyProgress'
import { DailyDiet } from '@screens/DailyDiet'
import { Feedback } from '@screens/DailyDiet/Feedback'
import { RegisterMeal } from '@screens/DailyDiet/RegisterMeal'
import { Statistics } from '@screens/DailyDiet/Statistics'

import { Container } from './styles'

export function Home() {
  return (
    <Container>
      <Toolbar showBackButton title="Daily Diet" />

      {/* <Header />
      <WeeklyProgress /> */}

      <Feedback isOnDiet />
    </Container>
  )
}
