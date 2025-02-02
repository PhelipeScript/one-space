import { User } from 'phosphor-react-native'
import styled, { css } from 'styled-components/native'

import { AvatarProps } from '.'

export const Container = styled.TouchableOpacity<AvatarProps>`
  ${(props) => css`
    background-color: ${(props) => props.theme.COLORS.GRAY_200};
    width: ${props.size === 'SM' ? 45 : 75}px;
    height: ${props.size === 'SM' ? 45 : 75}px;
  `}

  border-radius: 9999px;
  align-items: center;
  justify-content: center;
`

export const DefaultProfilePicture = styled(User).attrs((props) => ({
  size: 32,
  color: props.theme.COLORS.GRAY_700,
}))``
