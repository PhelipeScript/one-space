import logo from '@assets/daily-diet/logo.png'
import { Avatar } from '@components/Avatar'

import { Container, Logo } from './styles'

export function Header() {
  return (
    <Container>
      <Logo source={logo} />

      <Avatar size="SM" />
    </Container>
  )
}
