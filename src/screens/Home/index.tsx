import { Header } from '@components/Header'
import { Toolbar } from '@components/Toolbar'

import { Container } from './styles'

export function Home() {
  return (
    <Container>
      <Toolbar />

      <Header />
    </Container>
  )
}
