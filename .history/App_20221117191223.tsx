import { Groups } from "@screens/Groups";
import theme from './src/theme'
import { ThemeProvider } from 'styled-components'
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Groups/>
    </ThemeProvider>
  );
}
