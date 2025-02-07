import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { DailyDiet } from '@screens/DailyDiet'
import { Feedback } from '@screens/DailyDiet/Feedback'
import { RegisterMeal } from '@screens/DailyDiet/RegisterMeal'
import { Statistics } from '@screens/DailyDiet/Statistics'
import { Home } from '@screens/Home'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />

      <Screen name="daily-diet" component={DailyDiet} />
      <Screen name="daily-diet/statistics" component={Statistics} />
      <Screen name="daily-diet/register-meal" component={RegisterMeal} />
      <Screen name="daily-diet/feedback" component={Feedback} />
    </Navigator>
  )
}
