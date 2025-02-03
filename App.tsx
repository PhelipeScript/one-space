import { Loading } from '@components/Loading'
import {
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from '@expo-google-fonts/nunito-sans'
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto'
import { Home } from '@screens/Home'
import theme from '@theme/index'
import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components/native'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    NunitoSans_400Regular,
    NunitoSans_700Bold,
    Roboto_700Bold,
  })
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      {fontsLoaded ? <Home /> : <Loading />}
    </ThemeProvider>
  )
}
