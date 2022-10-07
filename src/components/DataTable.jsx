import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const DataTable = ({ data }) => {
  return (
    <>
      { data && 
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                { data.meta.fields.map((field, idx) => (
                  <TableCell key={idx} align='center'>{field}</TableCell>
                ))
                }
              </TableRow>
            </TableHead>
            <TableBody>
              { data.data.map((row, idx) => (
                <TableRow key={idx}>
                  <TableCell align='center'>{row.Date}</TableCell>
                  <TableCell align='center'>{row.Time}</TableCell>
                  <TableCell align='center'>{row.Temperature} &#176;C</TableCell>
                </TableRow>
              ))
              }
            </TableBody>
          </Table>
        </TableContainer>
      }
    </>
  );
};
export default DataTable;