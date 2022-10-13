import './App.css';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import { ProvideAuth } from './Auth';
import SiteWrapper from './components/SiteWrapper';
import Router from './Router';
import darkTheme from './styles/themes/darkTheme';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <ProvideAuth>
        <SiteWrapper>
          <Router/>
        </SiteWrapper>
      </ProvideAuth>
    </ThemeProvider>
  );
}

export default App;
