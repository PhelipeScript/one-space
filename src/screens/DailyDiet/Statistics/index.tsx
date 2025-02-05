import { Highlight } from '@components/daily-diet/Highlight'
import { StatisticsCard } from '@components/daily-diet/StatisticsCard'

import { Container, Content, StatisticsCardContainer, Title } from './styles'

export function Statistics() {
  return (
    <Container>
      <Highlight showButtonType="back" />
      <Content>
        <Title>Estatísticas gerais</Title>

        <StatisticsCard
          title="22"
          subtitle="melhor sequência de pratos dentro da dieta"
        />

        <StatisticsCard title="109" subtitle="refeições registradas" />

        <StatisticsCardContainer>
          <StatisticsCard
            title="99"
            subtitle="refeições dentro da dieta"
            size="half"
            backgroundColor="GREEN_LIGHT"
            textColor="GRAY_600"
          />

          <StatisticsCard
            title="10"
            subtitle="refeições fora da dieta"
            size="half"
            backgroundColor="RED_LIGHT"
            textColor="GRAY_600"
          />
        </StatisticsCardContainer>
      </Content>
    </Container>
  )
}
