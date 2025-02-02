import { Avatar } from '@components/Avatar'

import { Container, Subtitle, Title, TitleContainer } from './styles'

export function Header() {
  return (
    <Container>
      <TitleContainer>
        <Title>Hey, John!</Title>
        <Subtitle>welcome back</Subtitle>
      </TitleContainer>

      <Avatar size="LG" />
    </Container>
  )
}
