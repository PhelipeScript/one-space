export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      'daily-diet': undefined
      'daily-diet/statistics': undefined
      'daily-diet/register-meal': undefined
      'daily-diet/feedback': {
        isOnDiet: boolean
      }
      'daily-diet/meal-details': {
        name: string
        description: string
        date: string
        time: string
        isOnDiet: boolean
      }
    }
  }
}
