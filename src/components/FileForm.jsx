import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
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
      let data = [];
      try {
        results.data.forEach((row, idx) => {
          const date = new Date(row[results.meta.fields[0]]);
          data = [
            {
              'datetime': date,
              'date': date.toDateString(),
              'time': moment(date).format('h:mm A'),
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
      } catch (e) {
        setError(`Unable to read file.${'\n'} Make sure it is an AskSensors CSV file`);
      }
      
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
    <FormControl sx={{ width: '100%' }} className={styles.verticalcontainer}>
      <Box className={styles.splitbox}>
        <Input id='csv-file-input' type='file' inputRef={fileRef} required={true} sx={{ width: '100%' }}/>
        <Button variant='outlined' color='inherit' type='button' onClick={handleSubmit} sx={{ ml: 2 }}>Submit</Button>
      </Box>
      { error && <Alert severity='error'>{error}</Alert> }
    </FormControl>
  );
};

export default FileForm;
