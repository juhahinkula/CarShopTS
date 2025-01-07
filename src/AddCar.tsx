import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { saveCar } from './carapi';
import CarDialogContent from './CarDialogContent';

interface AddCarProps {
  fetchCars: () => void;
}

export default function AddCar({ fetchCars }: AddCarProps) {
  const [car, setCar] = useState({
    brand: '',
    model: '',
    color: '',
    fuel: '',
    modelYear: 2025,
    price: 0,
  });
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    saveCar(car)
    .then(() => fetchCars())
    .catch((err: Error) => console.error(err))

    handleClose();
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCar({...car, [event.target.name]: event.target.value });
  }

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Car
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Car</DialogTitle>
        <CarDialogContent car={car} handleChange={handleChange} />
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}