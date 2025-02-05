import { Container, Content, Input, Label, Title } from './styles'

export function RegisterMeal() {
  return (
    <Container>
      <Title>Nova refeição</Title>

      <Content>
        <Label>Nome</Label>
        <Input placeholder="Digite o nome da refeição..." />

        <Label>Descrição</Label>
        <Input
          multiline
          numberOfLines={6}
          textAlignVertical="top"
          placeholder="Digite informações sobre a refeição..."
          style={{ height: 125 }}
        />
      </Content>
    </Container>
  )
}
