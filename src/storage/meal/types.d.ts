export interface MealDTOProps {
  date: string
  name: string
  description: string
  time: string
  isOnDiet: boolean
}

export interface MealsDTOProps {
  date: string
  data: MealDTOProps[]
}
