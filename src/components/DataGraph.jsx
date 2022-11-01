import { styled } from '@mui/material/styles';
import { CartesianGrid, Line, LineChart, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const LabelBox = styled('div')`
  background-color: #e0e0e0;
  color: black;
  /* padding: 5px 5px; */
  padding: 1em;
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;


const DataGraph = ({ data }) => {
  const graphData = data.dataLast24Hours();

  const CustomLabel = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      // console.log(active);
      // console.log(payload);
      // console.log(label);
      return (
        <LabelBox>
          <strong>{`${payload[0].value} ${payload[0].unit}`}</strong>
          <div>{label}</div>
        </LabelBox>
      );
    }
    return null;
  };

  return (
    <>
      <h3>Last 24 Hours</h3>
      <ResponsiveContainer width='100%' height={500}>
        <LineChart data={graphData} margin={{ top: 10, right: 10, left: 20, bottom: 10 }}>
          <Line type='linear' dataKey='temp' unit='°C'/>
          <CartesianGrid stroke='#ccc' strokeDasharray="3 3" vertical={false}/>
          <XAxis dataKey='string'/>
          <YAxis type='number' domain={['dataMin-2', 'dataMax+2']} unit='°C' interval={0}/>
          <ReferenceLine y={32} stroke='red' strokeDasharray='9 3'/>
          <Tooltip content={<CustomLabel/>}/>
          {/* <Brush dataKey='string' height={30} stroke="#8884d8"/> */}
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default DataGraph;
