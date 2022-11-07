import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import ContentCard from '../components/ContentCard';
import ContentWrapper from '../components/ContentWrapper';
import FileForm from '../components/FileForm';
import Dashboard from './Dashboard';
import DateSearch from './DateSearch';

const Home = ({ display, setDisplay, data, setData }) => {
  

  const renderMainContent = (disp, data) => {
    switch(disp) {
    case 'dashboard':
      return <Dashboard data={data}/>;
    case 'datesearch':
      return <DateSearch data={data}/>;
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
        <Box>
          <Typography align='center' variant='h5' sx={{ pb: 1 }}>AskSensors CSV File Upload</Typography>
          <FileForm onSubmit={handleSubmit}/>
        </Box>
      </ContentCard>
    </ContentWrapper>
  );

  return (
    <ContentWrapper>
      <Divider>
        <Chip label={`Sensor: ${data.name}`} />
      </Divider>
      {/* <ContentCard> */}
      { renderMainContent(display, data) }
      {/* </ContentCard> */}
    </ContentWrapper>
  );
};

export default Home;
