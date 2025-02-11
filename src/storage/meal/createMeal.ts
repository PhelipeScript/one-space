import AsyncStorage from '@react-native-async-storage/async-storage'
import { DAILY_DIET_COLLECTION } from '@storage/storageConfig'

import { fetchMeals } from './fetchMeals'
import { MealDTOProps } from './types'

export async function createMeal(meal: MealDTOProps) {
  const storedMeals = await fetchMeals()

  if (storedMeals.length > 0) {
    const indexMealsWithSameDate = storedMeals.findIndex((m) => {
      const getDatePart = (date: string) => date.split('T')[0]

      return getDatePart(meal.date) === getDatePart(m.date)
    })

    if (indexMealsWithSameDate > -1) {
      storedMeals[indexMealsWithSameDate].data.push(meal)
    } else {
      storedMeals.push({ date: meal.date, data: [meal] })
    }
  } else {
    storedMeals.push({ date: meal.date, data: [meal] })
  }

  await AsyncStorage.setItem(
    DAILY_DIET_COLLECTION.MEALS,
    JSON.stringify(storedMeals),
  )
}
