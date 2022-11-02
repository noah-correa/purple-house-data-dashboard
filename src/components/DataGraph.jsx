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
  const CustomLabel = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
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
      { data.length > 0 ? 
        <ResponsiveContainer width='100%' height={500}>
          <LineChart data={data} margin={{ top: 10, right: 10, left: 20, bottom: 10 }}>
            <Line type='linear' dataKey='temp' unit='°C'/>
            <CartesianGrid stroke='#ccc' strokeDasharray="3 3" vertical={false}/>
            <XAxis dataKey='string'/>
            <YAxis type='number' domain={['dataMin-2', 'dataMax+2']} unit='°C' interval={0}/>
            <ReferenceLine y={32} stroke='red' strokeDasharray='9 3'/>
            <Tooltip content={<CustomLabel/>}/>
          </LineChart>
        </ResponsiveContainer>
        :
        <div>No data available</div>
      }
    </>
  );
};

export default DataGraph;
