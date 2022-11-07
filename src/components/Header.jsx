import SettingsIcon from '@mui/icons-material/Settings';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

import SettingsModal from './SettingsModal';

// import { styled } from '@mui/material/styles';


const Header = ({ display, setDisplay, data, newFile }) => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky" color="primary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src="https://www.purplehouse.org.au/wp-content/uploads/2018/05/cropped-Screen-Shot-2018-05-09-at-8.21.39-am-192x192.png" width={30} height={30}/>
          <Typography
            variant="h6"
            component="div"
            sx={{ ml: 1, display: { xs: 'none', md: 'flex' }}}
          >
            PURPLE HOUSE DATA
          </Typography>
          <Box sx={{ flexGrow: 1, ml: 2 }}>
            { !data.empty &&
              <>
                <Button 
                  variant="text"
                  color="inherit"
                  onClick={() => setDisplay('dashboard')}
                  disabled={display === 'dashboard'}
                >
                  Dashboard
                </Button>
                <Button 
                  variant="text"
                  color="inherit"
                  onClick={() => setDisplay('datesearch')}
                  disabled={display === 'datesearch'}
                >
                  View by Date
                </Button>
              </>
            }
          </Box>

          <Box sx={{ display: { xs: 'none', sm: 'block' }}}>
            { display !== '' &&
                <Button 
                  variant="text"
                  color="inherit"
                  onClick={() => newFile()}
                  disabled={display === ''}
                >
                  New File
                </Button>
            }
            <IconButton onClick={() => setOpen(true)}>
              <SettingsIcon/>
            </IconButton>
            <SettingsModal open={open} setOpen={setOpen}/>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;