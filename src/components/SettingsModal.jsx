import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { useState } from 'react';



const SettingsModal = ({ open, setOpen, maxTemp, setMaxTemp }) => { 
  const [modalTemp, setModalTemp] = useState(maxTemp);
  
  const handleSave = () => {
    setMaxTemp(Number.parseFloat(modalTemp));
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>
        Settings
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Update the maximum temperature settings. Default 32°C
        </DialogContentText>
        <TextField 
          type="number"
          InputProps={{
            inputProps: { 
              max: 100, min: 0, step: 0.01
            }
          }}
          label='Max Temp'
          value={modalTemp}
          onChange={(e) => setModalTemp(Number.parseFloat(e.target.value))}
        />
      </DialogContent>
      <DialogActions>
        <Button color="inherit" onClick={handleSave}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default SettingsModal;