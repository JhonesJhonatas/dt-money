import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/defalut'
import { GlobalStyles } from './styles/global'
import { Transactions } from './pages/Transactions'

export function App() {

  return (

    <ThemeProvider theme={defaultTheme}>

      <GlobalStyles />

      <Transactions />
      
    </ThemeProvider>

  )

}

