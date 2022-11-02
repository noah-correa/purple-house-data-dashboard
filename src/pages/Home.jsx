import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

import ContentCard from '../components/ContentCard';
import ContentWrapper from '../components/ContentWrapper';
import Dashboard from '../components/Dashboard';
import DataGraph from '../components/DataGraph';
import DataTable from '../components/DataTable';
import FileForm from '../components/FileForm';
import Data from '../Data';
import styles from '../styles/styles.module.css';

const Home = () => {
  const [data, setData] = useState(new Data());
  const [display, setDisplay] = useState('');

  const handleDisplay = (event, newDisplay) => {
    event.preventDefault();
    setDisplay(newDisplay);
  };

  const resetCSV = () => {
    setData(new Data());
    setDisplay('');
  };

  const renderMainContent = (disp, data) => {
    switch(disp) {
    case 'table':
      return <DataTable data={data}/>;
    case 'graph':
      return <DataGraph data={data}/>;
    default:
      return <Dashboard data={data}/>;
    }
  };

  return (
    <>
      { data.empty ?
        <ContentWrapper center>
          <ContentCard className={styles.verticalcontainer}>
            <Typography variant='h4' sx={{textAlign: 'center'}} mb={4}>Purple House Data</Typography>
            <FileForm setData={setData}/>
          </ContentCard>
        </ContentWrapper>
        :
        <ContentWrapper>
          <Button variant="outlined" onClick={() => resetCSV()}>
            Load a new CSV file
          </Button>
          <Divider>
            <Chip label={`Sensor: ${data.name}`} />
          </Divider>
          <ToggleButtonGroup exclusive fullWidth value={display} onChange={handleDisplay}>
            <ToggleButton value=''>Dashboard</ToggleButton>
            <ToggleButton value='table'>Table</ToggleButton>
            <ToggleButton value='graph'>Graph</ToggleButton>
          </ToggleButtonGroup>
          <ContentCard>
            { renderMainContent(display, data) }
          </ContentCard>
        </ContentWrapper>
      }
    </>
  );
};
export default Home;