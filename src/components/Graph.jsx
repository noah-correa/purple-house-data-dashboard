import Alert from '@mui/material/Alert';
import { CartesianGrid, Line, LineChart, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

// import { styled } from '@mui/material/styles';
// const LabelBox = styled('div')`
//   background-color: #e0e0e0;
//   color: black;
//   /* padding: 5px 5px; */
//   padding: 1em;
//   width: 100%;
//   height: 100%;
//   border-radius: 5px;
// `;


const Graph = ({ data }) => {
  const CustomLabel = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <Alert severity={payload[0].value >= 32 ? 'error' : 'info'}>
          <strong>{`${payload[0].value} ${payload[0].unit}`}</strong>
          <div>{payload[0].payload.date}</div>
          <div>{payload[0].payload.time}</div>
        </Alert>
      );
    }
    return null;
  };

  const WarningDot = ({ value, cx, cy }) => {
    if (value >= 32) return (

      <svg x={cx - 4} y={cy - 4} width={8} height={8}>
        <g transform="translate(4 4)">
          <circle r='4' fill='white'/>
          <circle r='2.5' fill='red'/>
        </g>
      </svg>
    );
    return (
      <svg x={cx - 4} y={cy - 4} width={8} height={8}>
        <g transform="translate(4 4)">
          <circle r='4' fill='limegreen'/>
          {/* <circle r='2' fill='white'/> */}
        </g>
      </svg>
    );
  };

  return (
    <>
      { data.length > 0 &&
        <ResponsiveContainer width='100%' height={500}>
          <LineChart data={data} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
            <Line type='linear' dataKey='temp' unit='°C' dot={<WarningDot/>}/>
            <CartesianGrid stroke='#ccc' strokeDasharray="3 3" vertical={false}/>
            <XAxis dataKey='time'/>
            <YAxis type='number' domain={['dataMin-1', 'dataMax+1']} unit='°C' interval={0}/>
            <ReferenceLine y={32} stroke='red' strokeDasharray='9 3'/>
            <Tooltip content={<CustomLabel/>}/>
          </LineChart>
        </ResponsiveContainer>
      }
    </>
  );
};

export default Graph;
