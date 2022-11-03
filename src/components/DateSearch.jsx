import TextField from '@mui/material/TextField';
import moment from 'moment';
import { useState } from 'react';

const DateSearch = () => {
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
  
  return (
    <>
      <TextField
        id="date"
        label="Date"
        type="date"
        defaultValue={date}
        sx={{ width: 160 }}
        onChange={e => setDate(e.target.value)}
      />
      {date}
    </>
  );
};
export default DateSearch;