import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.COLORS.GRAY_700};
`

export const LoadIndicator = styled.ActivityIndicator.attrs((props) => ({
  color: props.theme.COLORS.WHITE,
}))``
