import { useState, useEffect } from 'react';
import { AgGridReact } from "ag-grid-react";
import { ColDef , ICellRendererParams } from "ag-grid-community"
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community'; 
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import AddCar from './AddCar';
import EditCar from './EditCar';
import { fetchCars, deleteCar } from './carapi';
import { Car } from './types';

function Carlist() {
  ModuleRegistry.registerModules([AllCommunityModule]);

  const [cars, setCars] = useState<Car[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getCars();
  }, []);

  const getCars = () => {
    fetchCars()
    .then(data => setCars(data._embedded.cars));
  }

  const handleDelete = (url: string) => {
    if (window.confirm("Are your sure?")) {
      deleteCar(url)
      .then(() => {
        setOpen(true); 
        getCars();
      })
    }
  }

  const [columnDefs] = useState<ColDef<Car>[]>([
    { field: 'brand', sortable: true, filter: true, width: 180 },
    { field: 'model', sortable: true, filter: true, width: 180 },
    { field: 'color', sortable: true, filter: true, width: 150 },
    { field: 'fuel', sortable: true, filter: true, width: 100 },
    { field: 'modelYear', sortable: true, filter: true, width: 100 },
    { field: 'price', sortable: true, filter: true, width: 120 },
    {
      cellRenderer: (params: ICellRendererParams) => <EditCar car={params.data} fetchCars={getCars} />,
      width: 120
    },
    {
      cellRenderer: (params: ICellRendererParams)  => 
        <Button color="error" size="small" onClick={() => handleDelete(params.data._links.car.href)}>
          Delete
        </Button>,
      width: 120
    },
  ]);
 
  return(
    <>
      <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
        <AddCar fetchCars={getCars} />
      </Stack>
      <div style={{ width: '90%', height: 600 }}>
        <AgGridReact 
          rowData={cars}
          columnDefs={columnDefs}
          pagination={true}
          paginationAutoPageSize={true}
          suppressCellFocus={true}
        />
      </div>
      <Snackbar 
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        message="Car deleted succesfully"
      />
    </>
  );
}

export default Carlist;