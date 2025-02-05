import { Container, ContainerProps, Subtitle, Title } from './styles'

export type StatisticsCardProps = ContainerProps & {
  title: string
  subtitle: string
}

export function StatisticsCard({
  title,
  subtitle,
  size = 'full',
  backgroundColor = 'GRAY_600',
  textColor = 'GRAY_100',
}: StatisticsCardProps) {
  return (
    <Container size={size} backgroundColor={backgroundColor}>
      <Title textColor={textColor}>{title}</Title>
      <Subtitle textColor={textColor}>{subtitle}</Subtitle>
    </Container>
  )
}
