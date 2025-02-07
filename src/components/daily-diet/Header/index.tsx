import logo from '@assets/daily-diet/logo.png'
import { Avatar } from '@components/Avatar'
import { useNavigation } from '@react-navigation/native'

import { BackButton, BackIcon, Container, Logo } from './styles'

export function Header() {
  const navigation = useNavigation()

  function handleGoHome() {
    navigation.navigate('home')
  }

  return (
    <Container>
      <BackButton onPress={handleGoHome}>
        <BackIcon />
      </BackButton>
      <Logo source={logo} />

      <Avatar size="SM" />
    </Container>
  )
}
