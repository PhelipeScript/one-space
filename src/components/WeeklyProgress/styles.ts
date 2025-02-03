import { Fire } from 'phosphor-react-native'
import styled, { css } from 'styled-components/native'

interface DayCardProps {
  current: boolean
}

export const DayCard = styled.TouchableOpacity<DayCardProps>`
  ${(props) => css`
    background-color: ${props.current
      ? props.theme.COLORS.GRAY_300
      : props.theme.COLORS.GRAY_400};
  `}

  align-items: center;
  justify-content: flex-end;
  border-radius: 24px;
  width: 60px;
  height: 90px;
  margin-right: 5px;
`

export const DayOfTheMonth = styled.Text`
  ${(props) => css`
    font-family: ${props.theme.FONT_FAMILY.ROBOTO_BOLD};
    font-size: ${props.theme.FONT_SIZE.LG}px;
    line-height: ${props.theme.FONT_SIZE.LG * 1.6}px;
    color: ${props.theme.COLORS.GRAY_100};
  `}
`

export const DayOfTheWeek = styled.Text`
  ${(props) => css`
    font-family: ${props.theme.FONT_FAMILY.ROBOTO_REGULAR};
    font-size: ${props.theme.FONT_SIZE.LG}px;
    line-height: ${props.theme.FONT_SIZE.LG * 1.6}px;
    color: ${props.theme.COLORS.GRAY_200};
  `}

  margin-bottom: 10px;
`

export const FireIcon = styled(Fire).attrs((props) => ({
  size: 16,
  color: props.theme.COLORS.ORANGE,
  weight: 'fill',
}))``
