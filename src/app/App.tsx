import React from 'react';
import './styles/global.css'
import {Routes} from './routes/Routes'
import './shared/contexts/theme'
import { ThemeProvider } from './shared/contexts/theme';

function App() {
  return (
    <ThemeProvider>
    <Routes />
    </ThemeProvider>
  );
}

export default App;
