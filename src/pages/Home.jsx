import Button from '@mui/material/Button';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

import ContentCard from '../components/ContentCard';
import ContentWrapper from '../components/ContentWrapper';
import DataGraph from '../components/DataGraph';
import DataTable from '../components/DataTable';
import FileForm from '../components/FileForm';
import styles from '../styles/styles.module.css';

const Home = () => {
  const [data, setData] = useState({});
  const [display, setDisplay] = useState('table');

  const handleDisplay = (event, newDisplay) => {
    event.preventDefault();
    setDisplay(newDisplay);
  };

  const resetCSV = () => {
    setData({});
    setDisplay('table');
  };

  return (
    <>
      { !Object.keys(data).length ?
        <ContentWrapper center>
          <ContentCard className={styles.verticalcontainer}>
            <Typography variant='h4' sx={{textAlign: 'center'}} mb={4}>Purple House Data Dashboard</Typography>
            <FileForm setData={setData}/>
          </ContentCard>
        </ContentWrapper>
        :
        <ContentWrapper>
          <Button variant="outlined" onClick={() => resetCSV()}>
            Load a new CSV file
          </Button>
          <ToggleButtonGroup exclusive fullWidth value={display} onChange={handleDisplay}>
            <ToggleButton value='table'>Table</ToggleButton>
            <ToggleButton value='graph'>Graph</ToggleButton>
          </ToggleButtonGroup>
          { display === 'table' &&
            <ContentCard>
              <DataTable data={data} />
            </ContentCard>
          }
          { display === 'graph' &&
            <ContentCard>
              <DataGraph data={data}/>
            </ContentCard>
          }
        </ContentWrapper>
      }
    </>
  );
};
export default Home;