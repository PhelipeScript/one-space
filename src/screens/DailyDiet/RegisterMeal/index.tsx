import { DateTimePickerAndroid } from '@react-native-community/datetimepicker'
import { useState } from 'react'

import {
  Container,
  Content,
  Input,
  InputContainer,
  Label,
  MealDateTimeButton,
  MealDateTimeContainer,
  Text,
  Title,
} from './styles'

export function RegisterMeal() {
  const [date, setDate] = useState<Date>(new Date())
  const [time, setTime] = useState<Date>(new Date())

  const showDatePicker = () => {
    DateTimePickerAndroid.open({
      value: date,
      mode: 'date',
      is24Hour: true,
      onChange: (event, selectedDate) => {
        if (event.type === 'set' && !!selectedDate) {
          setDate(selectedDate)
        }
      },
    })
  }

  const showTimePicker = () => {
    DateTimePickerAndroid.open({
      value: time,
      mode: 'time',
      is24Hour: true,
      onChange: (event, selectedTime) => {
        if (event.type === 'set' && !!selectedTime) {
          setTime(selectedTime)
        }
      },
    })
  }

  return (
    <Container>
      <Title>Nova refeição</Title>

      <Content>
        <InputContainer>
          <Label>Nome</Label>
          <Input placeholder="Digite o nome da refeição..." />
        </InputContainer>

        <InputContainer>
          <Label>Descrição</Label>
          <Input
            multiline
            numberOfLines={6}
            textAlignVertical="top"
            placeholder="Digite informações sobre a refeição..."
            style={{ height: 125 }}
          />
        </InputContainer>

        <MealDateTimeContainer>
          <InputContainer style={{ width: '48%' }}>
            <Label>Data</Label>
            <MealDateTimeButton onPress={showDatePicker}>
              <Text>{date.toLocaleDateString()}</Text>
            </MealDateTimeButton>
          </InputContainer>

          <InputContainer style={{ width: '48%' }}>
            <Label>Hora</Label>
            <MealDateTimeButton onPress={showTimePicker}>
              <Text>{time.toLocaleTimeString()}</Text>
            </MealDateTimeButton>
          </InputContainer>
        </MealDateTimeContainer>
      </Content>
    </Container>
  )
}
