import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

// import Paper from '@mui/material/Paper';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
const DataTable = ({ data }) => {
  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 90
    },
    {
      field: 'Date',
      headerName: 'Date',
      width: 150,
      editable: false,
    },
    {
      field: 'Temperature',
      headerName: 'Temperature',
      width: 150,
      editable: false,
    }
  ];

  return (
    <>
      {/* <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align='center'>Date</TableCell>
              <TableCell align='center'>Temperature</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { data.data.map((row, idx) => (
              <TableRow key={idx}>
                <TableCell align='center'>{row.Date}</TableCell>
                <TableCell align='center'>{row.Temperature} &#176;C</TableCell>
              </TableRow>
            ))
            }
          </TableBody>
        </Table>
      </TableContainer> */}
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={data.data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </>
  );
};
export default DataTable;