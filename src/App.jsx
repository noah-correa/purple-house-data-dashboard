import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from 'react';

import Header from './components/Header';
import SiteWrapper from './components/SiteWrapper';
import Home from './pages/Home';
import darkTheme from './styles/themes/darkTheme';

const MAX_TEMP_KEY = 'PH_MAX_TEMP';
const DEFAULT_MAX_TEMP = 32;

const App = () => {
  const [display, setDisplay] = useState('');
  const [data, setData] = useState([]);
  const [maxTemp, setMaxTemp] = useState(localStorage.getItem(MAX_TEMP_KEY) || DEFAULT_MAX_TEMP);
  
  useEffect(() => {
    localStorage.setItem(MAX_TEMP_KEY, Number.parseFloat(maxTemp));
  }, [maxTemp]);

  const newFile = () => {
    if (confirm('Are you sure?')) {
      setData([]);
      setDisplay('');
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <SiteWrapper>
        <Header display={display} setDisplay={setDisplay} data={data} newFile={newFile} maxTemp={maxTemp} setMaxTemp={setMaxTemp}/>
        <Home display={display} setDisplay={setDisplay} data={data} setData={setData} maxTemp={maxTemp}/>
      </SiteWrapper>
    </ThemeProvider>
  );
};

export default App;
