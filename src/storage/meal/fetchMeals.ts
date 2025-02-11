import AsyncStorage from '@react-native-async-storage/async-storage'
import { DAILY_DIET_COLLECTION } from '@storage/storageConfig'

import { MealsDTOProps } from './types'

export async function fetchMeals() {
  const storage = await AsyncStorage.getItem(DAILY_DIET_COLLECTION.MEALS)

  const meals: MealsDTOProps[] = storage ? JSON.parse(storage) : []

  return meals
}
