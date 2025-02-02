import { Loading } from '@components/Loading'
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto'
import { Test } from '@screens/Test'
import theme from '@theme/index'
import { ThemeProvider } from 'styled-components/native'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  })
  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Test /> : <Loading />}
    </ThemeProvider>
  )
}
