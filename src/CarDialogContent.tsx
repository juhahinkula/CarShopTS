import TextField from '@mui/material/TextField';
import DialogContent from '@mui/material/DialogContent';
import { CarDialogProps } from './types';

export default function CarDialogContent(props: CarDialogProps) {
  return (
    <DialogContent>
      <TextField
        margin="dense"
        label="Brand"
        name="brand"
        value={props.car.brand}
        onChange={props.handleChange}
        fullWidth
        variant="standard"
      />
      <TextField
        margin="dense"
        label="Model"
        name="model"
        value={props.car.model}
        onChange={props.handleChange}
        fullWidth
        variant="standard"
      />
      <TextField
        margin="dense"
        label="Color"
        name="color"
        value={props.car.color}
        onChange={props.handleChange}
        fullWidth
        variant="standard"
      />
      <TextField
        margin="dense"
        label="Fuel"
        name="fuel"
        value={props.car.fuel}
        onChange={props.handleChange}
        fullWidth
        variant="standard"
      />
      <TextField
        margin="dense"
        label="Year"
        name="modelYear"
        value={props.car.modelYear}
        onChange={props.handleChange}
        fullWidth
        variant="standard"
      />
      <TextField
        margin="dense"
        label="Price"
        name="price"
        value={props.car.price}
        onChange={props.handleChange}
        fullWidth
        variant="standard"
      />
    </DialogContent>
  );
}