import { useNavigation } from '@react-navigation/native'
import { MealDTOProps } from '@storage/meal/types'
import { SectionList } from 'react-native'

import { MealCard } from '../MealCard'
import {
  AddIcon,
  Container,
  MealSectionHeader,
  NewMealButton,
  Text,
  Title,
} from './styles'

export function Meals() {
  const navigation = useNavigation()

  const meals = [
    {
      date: new Date('2025-02-03T00:00:00'),
      data: [
        {
          name: 'Café da Manhã',
          description: 'Omelete e Suco de Laranja',
          time: new Date('2025-02-03T08:00:00'),
          isOnDiet: true,
        },
        {
          name: 'Lanche da Manhã',
          description: 'Biscoito de Polvilho',
          time: new Date('2025-02-03T10:30:00'),
          isOnDiet: false,
        },
        {
          name: 'Almoço',
          description: 'Arroz, Feijão e Frango Grelhado',
          time: new Date('2025-02-03T12:30:00'),
          isOnDiet: true,
        },
        {
          name: 'Lanche da Tarde',
          description: 'Bolo de Chocolate',
          time: new Date('2025-02-03T15:45:00'),
          isOnDiet: false,
        },
        {
          name: 'Jantar',
          description: 'Salada e Peito de Frango',
          time: new Date('2025-02-03T19:00:00'),
          isOnDiet: true,
        },
        {
          name: 'Ceia',
          description: 'Iogurte com Granola',
          time: new Date('2025-02-03T22:00:00'),
          isOnDiet: true,
        },
      ],
    },
    {
      date: new Date('2025-02-04T00:00:00'),
      data: [
        {
          name: 'Café da Manhã',
          description: 'Omelete e Suco de Laranja',
          time: new Date('2025-02-04T08:00:00'),
          isOnDiet: true,
        },
        {
          name: 'Lanche da Manhã',
          description: 'Biscoito de Polvilho',
          time: new Date('2025-02-04T10:30:00'),
          isOnDiet: false,
        },
        {
          name: 'Almoço',
          description: 'Arroz, Feijão e Frango Grelhado',
          time: new Date('2025-02-04T12:30:00'),
          isOnDiet: true,
        },
        {
          name: 'Lanche da Tarde',
          description: 'Bolo de Chocolate',
          time: new Date('2025-02-04T15:45:00'),
          isOnDiet: false,
        },
        {
          name: 'Jantar',
          description: 'Salada e Peito de Frango',
          time: new Date('2025-02-04T19:00:00'),
          isOnDiet: true,
        },
        {
          name: 'Ceia',
          description: 'Iogurte com Granola',
          time: new Date('2025-02-04T22:00:00'),
          isOnDiet: true,
        },
      ],
    },
  ]

  function handleRegisterNewMeal() {
    navigation.navigate('daily-diet/register-meal')
  }

  function handleMealDetails(meal: MealDTOProps) {
    navigation.navigate('daily-diet/meal-details', meal)
  }

  return (
    <Container>
      <Title>Refeições</Title>
      <NewMealButton onPress={handleRegisterNewMeal}>
        <AddIcon />
        <Text>Nova refeição</Text>
      </NewMealButton>

      <SectionList
        sections={meals}
        keyExtractor={(item, index) => item.name + index}
        renderItem={({ item, section }) => (
          <MealCard
            mealTime={item.time.toLocaleTimeString()}
            mealName={item.name}
            isOnDiet={item.isOnDiet}
            onPress={() =>
              handleMealDetails({
                ...item,
                time: item.time.toLocaleTimeString(),
                date: section.date.toLocaleDateString(),
              })
            }
          />
        )}
        renderSectionHeader={({ section: { date } }) => (
          <MealSectionHeader>{date.toLocaleDateString()}</MealSectionHeader>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[{ paddingBottom: 100 }]}
      />
    </Container>
  )
}
