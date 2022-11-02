import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import moment from 'moment';
import Papa from 'papaparse';
import { useRef, useState } from 'react';

import Data from '../Data';
import styles from '../styles/styles.module.css';

const FileForm = ({ onSubmit }) => {
  const fileRef = useRef(null);
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!fileRef.current.files.length) {
      setError('No file selected');
    } else {
      setError('');
      const file = fileRef.current.files[0];
      parseCSVFile(file);
    }
  };

  const parseCSVFile = (file) => {
    const onComplete = (results) => {
      // console.log(results);
      let data = [];
      results.data.forEach((row, idx) => {
        const date = new Date(row[results.meta.fields[0]]);
        data = [
          {
            'datetime': date,
            'date': date.toDateString(),
            'time': date.toLocaleTimeString(),
            'string': moment(date).format('D/MM/YY, HH:mm'),
            'temp': +row[results.meta.fields[1]].split(',')[0],
            'id': results.data.length - idx
          },
          ...data
        ];
      });
      results.data = data;
      results.meta.name = results.meta.fields[1];
      results.meta.timezone = results.meta.fields[0].replace('Date (', '').replace(')', '');
      results.meta.fields = ['Date', 'Time', 'Temperature'];
      onSubmit(new Data(results));
    };

    const onError = (error) => {
      console.log('Error:', error);
    };
    
    const cfg = {
      complete: onComplete,
      error: onError,
      header: true,
      dynamicTyping: true,
      worker: true,
      delimiter: ';',
      skipEmptyLines: 'greedy'
    };

    Papa.parse(file, cfg);
  };

  return (
    <FormControl className={styles.verticalcontainer}>
      {/* <InputLabel htmlFor='csv-file-input'>Select CSV File</InputLabel> */}
      <Input id='csv-file-input' type='file' inputRef={fileRef}></Input>
      { error && <Alert severity='error'>{error}</Alert> }
      <Button variant='secondary' type='button' onClick={handleSubmit}>Submit</Button>
    </FormControl>
  );
};
export default FileForm;
