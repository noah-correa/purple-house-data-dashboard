import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const DataTable = ({ data }) => {
  const columns = [
    // {
    //   field: 'id',
    //   headerName: 'ID',
    //   width: 90,
    //   editable: false,
    //   type: 'number'
    // },
    {
      field: 'date',
      headerName: 'Date',
      flex: 1,
      editable: false,
      type: 'date',
      // valueGetter: ({ value }) => value && new Date(value)
      // calu
    },
    {
      field: 'time',
      headerName: 'Time',
      flex: 1,
      editable: false,
      type: 'number',
      // valueGetter: ({ value }) => value && new Date(value),
      // valueFormatter: ({ value }) => value && value.toLocaleTimeString()
    },
    {
      field: 'temp',
      headerName: 'Temperature (°C)',
      flex: 2,
      editable: false,
      type: 'number',
      valueFormatter: ({ value }) => value ? `${value} °C` : ''
    }
  ];

  return (
    // <Container maxWidth="md">
    <Box sx={{ width: '100%' }}>
      <DataGrid
        rows={data.data}
        columns={columns}
        pageSize={10}
        autoHeight
        rowsPerPageOptions={[5, 10, 25, 50]}
        initialState={{
          sorting: {
            sortModel: [{field: 'id', sort: 'asc'}]   // No multiple field sorting with free (community) version
          }
        }}
      />
    </Box>
    // </Container>
  );
};
export default DataTable;
