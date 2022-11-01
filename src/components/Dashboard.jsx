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
  width: 40%;
`;


const StatsHeader = styled('div')`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const Dashboard = ({ data }) => {
  const renderStats = (stats, label='') => {
    return (
      <Box>
        <StatsHeader>
          <h3>{label}:</h3>
          { Object.keys(stats).length &&
            <div>({data.stats.today.data.length} data points)</div>
          }
        </StatsHeader>
        { !Object.keys(stats).length ?
          <div>No data available for {label.toLowerCase()}</div>
          :
          <StatsBox>
            <StatsItem>Current: {stats.last.temp} °C</StatsItem>
            <StatsItem>Minimum: {stats.min.temp} °C</StatsItem>
            <StatsItem>Average: {stats.avg} °C</StatsItem>
            <StatsItem>Maximum: {stats.max.temp} °C</StatsItem>
          </StatsBox>
        }
      </Box>
    );
  };


  return (
    <>
      <Box>
        <DataGraph data={data}/>
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