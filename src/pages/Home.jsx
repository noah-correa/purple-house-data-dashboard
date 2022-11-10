import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import ContentCard from '../components/ContentCard';
import ContentWrapper from '../components/ContentWrapper';
import FileForm from '../components/FileForm';
import styles from '../styles/styles.module.css';
import Dashboard from './Dashboard';
import DateSearch from './DateSearch';

const Home = ({ display, setDisplay, data, setData, maxTemp }) => {

  const renderMainContent = (disp, data) => {
    switch(disp) {
    case 'dashboard':
      return <Dashboard data={data} maxTemp={maxTemp}/>;
    case 'datesearch':
      return <DateSearch data={data} maxTemp={maxTemp}/>;
    default:
      return;
    }
  };

  const handleSubmit = (data) => {
    setData(data);
    setDisplay('dashboard');
  };

  if (data.empty) return (
    <ContentWrapper center>
      <ContentCard>
        <Box className={styles.verticalcontainer} sx={{ width: '100%' }}>
          <Typography align='center' variant='h5' sx={{ pb: 1 }}>AskSensors CSV File Upload</Typography>
          <FileForm onSubmit={handleSubmit}/>
        </Box>
      </ContentCard>
    </ContentWrapper>
  );

  return (
    <ContentWrapper>
      <Divider>
        <Chip label={`Sensor: ${data.name}`} color='secondary'/>
      </Divider>
      { renderMainContent(display, data) }
    </ContentWrapper>
  );
};

export default Home;
