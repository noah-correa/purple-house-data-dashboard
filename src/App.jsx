import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';

import Header from './components/Header';
import SiteWrapper from './components/SiteWrapper';
import Data from './Data';
import Home from './pages/Home';
import darkTheme from './styles/themes/darkTheme';

const App = () => {
  const [display, setDisplay] = useState('');
  const [data, setData] = useState(new Data());

  const newFile = () => {
    setData(new Data());
    setDisplay('');
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <SiteWrapper>
        <Header display={display} setDisplay={setDisplay} data={data} newFile={newFile}/>
        <Home display={display} setDisplay={setDisplay} data={data} setData={setData}/>
      </SiteWrapper>
    </ThemeProvider>
  );
};

export default App;
