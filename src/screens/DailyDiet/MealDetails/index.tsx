import { useNavigation, useRoute } from '@react-navigation/native'
import { ConfirmModal } from '@utils/modal/ConfirmModal'
import { useState } from 'react'

import {
  BackButton,
  BackIcon,
  Button,
  ButtonsContainer,
  CircleIcon,
  Container,
  Content,
  Header,
  MealDetailsContainer,
  MealName,
  PencilIcon,
  Tag,
  Text,
  TextHighlight,
  Title,
  TrashIcon,
} from './styles'

export interface MealDetailsProps {
  date: string
  name: string
  description: string
  time: string
  isOnDiet: boolean
}

function handleDeleteMeal() {
  // Implement delete meal
}

export function MealDetails() {
  const navigation = useNavigation()
  const route = useRoute()
  const { name, description, date, time, isOnDiet } =
    route.params as MealDetailsProps
  const [confirmModalVisible, setConfirmModalVisible] = useState(false)

  function handleGoDailyDiet() {
    navigation.navigate('daily-diet')
  }

  return (
    <Container isOnDiet={isOnDiet}>
      <Header>
        <BackButton onPress={handleGoDailyDiet}>
          <BackIcon />
        </BackButton>

        <Title>Refeição</Title>
      </Header>

      <Content>
        <MealDetailsContainer>
          <MealName>{name}</MealName>
          <Text>{description}</Text>
          <TextHighlight style={{ marginTop: 16 }}>Data e hora</TextHighlight>
          <Text>
            {date} às {time}
          </Text>
          <Tag>
            <CircleIcon isOnDiet={isOnDiet} />
            <Text>{isOnDiet ? 'dentro da dieta' : 'fora da dieta'}</Text>
          </Tag>
        </MealDetailsContainer>

        <ButtonsContainer>
          <Button type="edit">
            <PencilIcon />
            <TextHighlight>Editar refeição</TextHighlight>
          </Button>
          <Button type="delete" onPress={() => setConfirmModalVisible(true)}>
            <TrashIcon />
            <TextHighlight>Excluir refeição</TextHighlight>
          </Button>
        </ButtonsContainer>
      </Content>

      <ConfirmModal
        visible={confirmModalVisible}
        message="Deseja realmente excluir o registro da refeição?"
        cancelText="Cancelar"
        confirmText="Sim, Excluir"
        onConfirm={handleDeleteMeal}
        onCancel={() => {
          setConfirmModalVisible(false)
        }}
      />
    </Container>
  )
}
