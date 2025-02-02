import {
  BackButton,
  BackIcon,
  Container,
  ListButton,
  ListIcon,
  Title,
} from './styles'

interface ToolbarProps {
  title?: string
  showBackButton?: boolean
}

export function Toolbar({ title, showBackButton = false }: ToolbarProps) {
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
