import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeProvider, CssBaseline } from '@mui/material'
import theme from './theme'
import { Provider } from 'react-redux'
import store from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
)
