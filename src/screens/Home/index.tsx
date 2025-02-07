import { Header } from '@components/Header'
import { WeeklyProgress } from '@components/WeeklyProgress'
import { useNavigation } from '@react-navigation/native'
import { Text, TouchableOpacity } from 'react-native'

import { Container } from './styles'

export function Home() {
  const navigation = useNavigation()

  function handleDailyDiet() {
    navigation.navigate('daily-diet')
  }

  return (
    <Container>
      <Header />
      <WeeklyProgress />

      <TouchableOpacity
        onPress={handleDailyDiet}
        style={{
          padding: 16,
          width: '100%',
          alignItems: 'center',
          boxShadow: '0px 0px 0px 1px #fff',
        }}
      >
        <Text style={{ color: '#fff' }}>Daily Diet</Text>
      </TouchableOpacity>
    </Container>
  )
}
