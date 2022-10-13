import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const DataTable = ({ data }) => {
  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 90,
      editable: false
    },
    {
      field: 'date',
      headerName: 'Date',
      width: 180,
      editable: false,
    },
    {
      field: 'time',
      headerName: 'Time',
      width: 180,
      editable: false,
    },
    {
      field: 'temp',
      headerName: 'Temperature (°C)',
      width: 180,
      editable: false,
    }
  ];

  return (
    <Box sx={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={data.data}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5, 10, 25, 50]}
        checkboxSelection
        disableSelectionOnClick
        // experimentalFeatures={{ newEditingApi: true }}
        initialState={{
          sorting: {
            sortModel: [{field: 'id', sort: 'asc'}]   // No multiple field sorting with free (community) version
          }
        }}
      />
    </Box>
  );
};
export default DataTable;
