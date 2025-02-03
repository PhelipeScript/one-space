import { Avatar } from '@components/Avatar'

import logo from '../../assets/logo.png'
import { Container, Logo } from './styles'

export function Header() {
  return (
    <Container>
      <Logo source={logo} />

      <Avatar size="SM" />
    </Container>
  )
}
