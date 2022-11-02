import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';

import ContentCard from '../components/ContentCard';
import ContentWrapper from '../components/ContentWrapper';
import Dashboard from '../components/Dashboard';
import DataGraph from '../components/DataGraph';
import FileForm from '../components/FileForm';
import Data from '../Data';
import styles from '../styles/styles.module.css';

const Home = ({ display, setDisplay, data, setData }) => {
  

  const renderMainContent = (disp, data) => {
    switch(disp) {
    case 'datesearch':
      return <DataGraph data={data}/>;
    case 'dashboard':
      return <Dashboard data={data}/>;
    case '':
      setData(new Data());
      return;
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
          <ContentCard className={styles.verticalcontainer}>
            <FileForm onSubmit={handleSubmit}/>
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