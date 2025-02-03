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
  const meals = [
    {
      date: '2025-02-03',
      data: [
        {
          mealTime: '08:00',
          mealName: 'Café da Manhã - Omelete e Suco de Laranja',
          isOnDiet: true,
        },
        {
          mealTime: '10:30',
          mealName: 'Lanche da Manhã - Biscoito de Polvilho',
          isOnDiet: false,
        },
        {
          mealTime: '12:30',
          mealName: 'Almoço - Arroz, Feijão e Frango Grelhado',
          isOnDiet: true,
        },
        {
          mealTime: '15:45',
          mealName: 'Lanche da Tarde - Bolo de Chocolate',
          isOnDiet: false,
        },
        {
          mealTime: '19:00',
          mealName: 'Jantar - Salada e Peito de Frango',
          isOnDiet: true,
        },
        {
          mealTime: '22:00',
          mealName: 'Ceia - Iogurte com Granola',
          isOnDiet: true,
        },
      ],
    },
    {
      date: '2025-02-04',
      data: [
        {
          mealTime: '08:00',
          mealName: 'Café da Manhã - Omelete e Suco de Laranja',
          isOnDiet: true,
        },
        {
          mealTime: '10:30',
          mealName: 'Lanche da Manhã - Biscoito de Polvilho',
          isOnDiet: false,
        },
        {
          mealTime: '12:30',
          mealName: 'Almoço - Arroz, Feijão e Frango Grelhado',
          isOnDiet: true,
        },
        {
          mealTime: '15:45',
          mealName: 'Lanche da Tarde - Bolo de Chocolate',
          isOnDiet: false,
        },
        {
          mealTime: '19:00',
          mealName: 'Jantar - Salada e Peito de Frango',
          isOnDiet: true,
        },
        {
          mealTime: '22:00',
          mealName: 'Ceia - Iogurte com Granola',
          isOnDiet: true,
        },
      ],
    },
  ]

  return (
    <Container>
      <Title>Refeições</Title>
      <NewMealButton>
        <AddIcon />
        <Text>Nova refeição</Text>
      </NewMealButton>

      <SectionList
        sections={meals}
        keyExtractor={(item, index) => item.mealName + index}
        renderItem={({ item }) => (
          <MealCard
            mealTime={item.mealTime}
            mealName={item.mealName}
            isOnDiet={item.isOnDiet}
          />
        )}
        renderSectionHeader={({ section: { date } }) => (
          <MealSectionHeader>{date}</MealSectionHeader>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[{ paddingBottom: 100 }]}
      />
    </Container>
  )
}
