import {
  BackButton,
  BackIcon,
  Container,
  ListButton,
  ListIcon,
  Title,
} from './styles'

interface HeaderProps {
  title?: string
  showBackButton?: boolean
}

export function Header({ title, showBackButton = false }: HeaderProps) {
  return (
    <Container>
      {showBackButton && (
        <BackButton>
          <BackIcon />
        </BackButton>
      )}

      <Title>{title || 'One Space'}</Title>

      <ListButton>
        <ListIcon />
      </ListButton>
    </Container>
  )
}
