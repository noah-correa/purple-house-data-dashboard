import {
  Brush,
  CartesianGrid,
  Label,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const DataGraph = ({ data }) => {
  return (
    <ResponsiveContainer width='100%' height={400}>
      <LineChart data={data.data}>
        <Line type='natural' dataKey='Temperature'/>
        <CartesianGrid stroke='#ccc' strokeDasharray="10 5"/>
        <XAxis dataKey={data.meta.fields[1]}>
          <Label value='Date' offset={0} position='bottom'/>
        </XAxis>
        <YAxis type='number' domain={[25, 35]}>
          <Label value='Temperature' offset={0} position='left'/>
        </YAxis>
        <ReferenceLine y={32} label='Max Temp' stroke='red'/>
        <Tooltip/>
        <Brush dataKey={data.meta.fields[0]} height={30} stroke="#8884d8"/>
      </LineChart>
    </ResponsiveContainer>
  );
};
export default DataGraph;