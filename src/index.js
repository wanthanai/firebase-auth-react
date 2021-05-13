import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// styled components
import { ThemeProvider } from 'styled-components'

// theme value of ThemeProvider attribute theme
const theme = {
  colors: {
    font: '#bfbfbf',
    background: '#171717'
  }
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);