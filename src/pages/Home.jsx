import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import ContentCard from '../components/ContentCard';
import ContentWrapper from '../components/ContentWrapper';
import Dashboard from '../components/Dashboard';
import DateSearch from '../components/DateSearch';
import FileForm from '../components/FileForm';

const Home = ({ display, setDisplay, data, setData }) => {
  

  const renderMainContent = (disp, data) => {
    switch(disp) {
    case 'datesearch':
      return <DateSearch data={data}/>;
    case 'dashboard':
      return <Dashboard data={data}/>;
    }
  };

  const handleSubmit = (data) => {
    setData(data);
    setDisplay('dashboard');
  };

  return (
    <>
      { data.empty ?
        <ContentWrapper center>
          <ContentCard>
            <Box>
              <Typography align='center' variant='h5' sx={{ pb: 1 }}>AskSensors CSV File Upload</Typography>
              <FileForm onSubmit={handleSubmit}/>
            </Box>
          </ContentCard>
        </ContentWrapper>
        :
        <ContentWrapper>
          <Divider>
            <Chip label={`Sensor: ${data.name}`} />
          </Divider>
          <ContentCard>
            { renderMainContent(display, data) }
          </ContentCard>
        </ContentWrapper>
      }
    </>
  );
};
export default Home;