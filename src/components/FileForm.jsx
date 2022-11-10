import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import Papa from 'papaparse';
import { useRef, useState } from 'react';

import CSVParser from '../CSVParser';
import Data from '../Data';
import styles from '../styles/styles.module.css';

const FileForm = ({ onSubmit }) => {
  const fileRef = useRef(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

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
      try {
        const newResults = CSVParser.parseAskSensors(results);
        setLoading(false);
        onSubmit(new Data(newResults));
      } catch (e) {
        console.error(e);
        setLoading(false);
        setError('Unable to read file. Make sure it is an AskSensors CSV file');
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

    setLoading(true);
    Papa.parse(file, cfg);
  };

  if (loading) return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <CircularProgress color="secondary"/>
    </Box>
  );

  return (
    <FormControl sx={{ width: '100%' }} className={styles.verticalcontainer}>
      <Box className={styles.splitbox}>
        <Input id='csv-file-input' type='file' inputRef={fileRef} required={true} sx={{ width: '100%' }} color='secondary'/>
        <Button variant='outlined' color='secondary' type='button' onClick={handleSubmit} sx={{ ml: 2 }}>Submit</Button>
      </Box>
      { error && <Alert severity='error'>{error}</Alert> }
    </FormControl>
  );
};

export default FileForm;
