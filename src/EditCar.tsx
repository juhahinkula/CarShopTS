import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { updateCar } from './carapi';
import CarDialogContent from './CarDialogContent';
import { Car, CarEditProps } from './types';

export default function EditCar(props: CarEditProps) {
  const [car, setCar] = useState<Car>({
    brand: '',
    model: '',
    color: '',
    fuel: '',
    modelYear: 2025,
    price: 0
  });
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setCar({
      brand: props.car.brand,
      model: props.car.model,
      color: props.car.color,
      fuel: props.car.fuel,
      modelYear: props.car.modelYear,
      price: props.car.price
    })
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    updateCar(car, props.car._links.car.href)
    .then(() => props.fetchCars())
    
    handleClose();
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCar({...car, [event.target.name]: event.target.value });
  }

  return (
    <>
      <Button size="small" onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update Car</DialogTitle>
        <CarDialogContent car={car} handleChange={handleChange} />
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}