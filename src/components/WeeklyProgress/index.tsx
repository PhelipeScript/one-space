import { FlatList } from 'react-native'

import { DayCard, DayOfTheMonth, DayOfTheWeek, FireIcon } from './styles'

export function WeeklyProgress() {
  const currentDay = '04'
  const days = [
    { day: '01', weekDay: 'Seg', accessed: true },
    { day: '02', weekDay: 'Ter', accessed: false },
    { day: '03', weekDay: 'Qua', accessed: false },
    { day: '04', weekDay: 'Qui', accessed: true },
    { day: '05', weekDay: 'Sex', accessed: true },
    { day: '06', weekDay: 'Sáb', accessed: true },
    { day: '07', weekDay: 'Dom', accessed: false },
  ]

  return (
    <FlatList
      data={days}
      keyExtractor={(item) => item.day}
      renderItem={({ item }) => (
        <DayCard current={item.day === currentDay}>
          {item.accessed && <FireIcon />}
          <DayOfTheMonth>{item.day}</DayOfTheMonth>
          <DayOfTheWeek>{item.weekDay}</DayOfTheWeek>
        </DayCard>
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  )
}
