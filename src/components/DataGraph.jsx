import { CartesianGrid, Label, Line, LineChart, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const DataGraph = ({ data }) => {
  return (
    <ResponsiveContainer width='100%' height={500}>
      <LineChart data={data.data}>
        <Line type='natural' dataKey='Temperature'/>
        <CartesianGrid stroke='#ccc' strokeDasharray="10 5"/>
        <XAxis dataKey='Date'>
          <Label value='Date' offset={0} position='bottom'/>
        </XAxis>
        <YAxis type='number' domain={[25, 35]} tickCount={10}>
          <Label value='Temperature' offset={0} position='left'/>
        </YAxis>
        <ReferenceLine y={32} label='Max Temp' stroke='red'/>
        <Tooltip/>
      </LineChart>
    </ResponsiveContainer>
  );
};
export default DataGraph;