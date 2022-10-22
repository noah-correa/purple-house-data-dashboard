import Box from '@mui/material/Box';



const Dashboard = ({ data }) => {
  console.log(data);
  return (
    <>
      <Box>
        <h3>Today:</h3>
        { !Object.keys(data.stats.today).length ?
          <div>No data from today</div>
          :
          <div>
            <div>{data.stats.today.data.length} total data points</div>
            <ul>
              <li>Current: {data.stats.today.last.temp} °C</li>
              <li>Average: {data.stats.today.avg} °C</li>
              <li>Minimum: {data.stats.today.min.temp} °C</li>
              <li>Maximum: {data.stats.today.max.temp} °C</li>
            </ul>
          </div>
        }
        <hr/>
        <h3>Week:</h3>
        { !Object.keys(data.stats.week).length ?
          <div>No data from the past week</div>
          :
          <div>
            <div>{data.stats.week.data.length} total data points</div>
            <ul>
              <li>Current: {data.stats.week.last.temp} °C</li>
              <li>Average: {data.stats.week.avg} °C</li>
              <li>Minimum: {data.stats.week.min.temp} °C</li>
              <li>Maximum: {data.stats.week.max.temp} °C</li>
            </ul>
          </div>
        }
        <hr/>
        <h3>Month:</h3>
        { !Object.keys(data.stats.month).length ?
          <div>No data from the past month</div>
          :
          <div>
            <div>{data.stats.month.data.length} total data points</div>
            <ul>
              <li>Current: {data.stats.month.last.temp} °C</li>
              <li>Average: {data.stats.month.avg} °C</li>
              <li>Minimum: {data.stats.month.min.temp} °C</li>
              <li>Maximum: {data.stats.month.max.temp} °C</li>
            </ul>
          </div>
        }
      </Box>
    </>
  );
};
export default Dashboard;