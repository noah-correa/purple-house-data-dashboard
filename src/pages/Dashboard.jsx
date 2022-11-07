import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';

import ContentCard from '../components/ContentCard';
import Graph from '../components/Graph';

const StatsBox = styled('div')`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 0;
`;

const StatsItem = styled('div')`
  flex: 1;
  text-align: center;
`;

const SplitHeader = styled('div')`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const Dashboard = ({ data }) => {
  const data24Hours = data.dataLast24Hours();

  const renderStats = (stats, label='') => {
    return (
      <Box>
        <SplitHeader>
          <h3>{label}:</h3>
          { Object.keys(stats).length > 0 &&
            <Chip label={`${stats.data.length} data points`} color='info'/>
          }
        </SplitHeader>
        { Object.keys(stats).length > 0 ?
          <StatsBox>
            {/* <StatsItem>Current: {stats.last.temp} °C</StatsItem> */}
            <StatsItem>Minimum: {stats.min.temp} °C</StatsItem>
            <Divider orientation='vertical' flexItem sx={{ mx: 2 }}/>
            <StatsItem>Average: {stats.avg} °C</StatsItem>
            <Divider orientation='vertical' flexItem sx={{ mx: 2 }}/>
            <StatsItem>Maximum: {stats.max.temp} °C</StatsItem>
          </StatsBox>
          :
          <div>No data available</div>
        }
      </Box>
    );
  };

  return (
    <>
      <ContentCard>
        <h3>Last 24 Hours</h3>
        { data24Hours.length > 0 ?
          <Graph data={data24Hours}/>
          :
          <div>No data available</div>
        }
      </ContentCard>
      <ContentCard>
        { renderStats(data.stats.today, 'Today') }
      </ContentCard>
      <ContentCard>
        { renderStats(data.stats.week, 'Week') }
      </ContentCard>
      <ContentCard>
        { renderStats(data.stats.month, 'Month') }
      </ContentCard>
    </>
  );
};
export default Dashboard;