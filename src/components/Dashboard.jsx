import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

import DataGraph from './DataGraph';

const StatsBox = styled('ul')`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0;
`;

const StatsItem = styled('li')`
  width: 35%;
`;


const SplitHeader = styled('div')`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const Dashboard = ({ data }) => {

  const renderStats = (stats, label='') => {
    return (
      <Box>
        <SplitHeader>
          <h3>{label}:</h3>
          { Object.keys(stats).length > 0 &&
            <div>({stats.data.length} data points)</div>
          }
        </SplitHeader>
        { Object.keys(stats).length > 0 ?
          <StatsBox>
            <StatsItem>Current: {stats.last.temp} °C</StatsItem>
            <StatsItem>Minimum: {stats.min.temp} °C</StatsItem>
            <StatsItem>Average: {stats.avg} °C</StatsItem>
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
      <Box>
        <h3>Last 24 Hours</h3>
        <DataGraph data={data.dataLast24Hours()}/>
      </Box>
      <hr/>
      { renderStats(data.stats.today, 'Today') }
      <hr/>
      { renderStats(data.stats.week, 'Week') }
      <hr/>
      { renderStats(data.stats.month, 'Month') }
    </>
  );
};
export default Dashboard;