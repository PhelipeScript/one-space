import { Container, DefaultProfilePicture } from './styles'

export interface AvatarProps {
  size: 'SM' | 'LG'
}

export function Avatar({ size }: AvatarProps) {
  return (
    <Container size={size}>
      <DefaultProfilePicture />
    </Container>
  )
}
