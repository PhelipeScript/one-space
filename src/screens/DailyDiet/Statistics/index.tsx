import { Highlight } from '@components/daily-diet/Highlight'

import { Container, Content, Title } from './styles'

export function Statistics() {
  return (
    <Container>
      <Highlight showButtonType="back" />
      <Content>
        <Title>Estatísticas gerais</Title>
      </Content>
    </Container>
  )
}
