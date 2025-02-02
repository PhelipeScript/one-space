import { Header } from '@components/Header'

import { Container, Title } from './styles'

export function Test() {
  return (
    <Container>
      <Header showBackButton />
      <Title>Test works</Title>
    </Container>
  )
}
