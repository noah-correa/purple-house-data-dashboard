import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

// import { styled } from '@mui/material/styles';


const Header = ({ display, setDisplay, data }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="sticky" color="primary">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Purple House Data
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' }}}>
            <Button 
              variant="text"
              color="inherit"
              onClick={() => setDisplay('')}
              disabled={display === ''}
            >
              New File
            </Button>
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
                  Date Search
                </Button>
              </>
            }
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Header;