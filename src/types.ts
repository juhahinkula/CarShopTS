export interface Car {
  brand: string;
  model: string;
  color: string;
  fuel: string;
  modelYear: number;
  price: number;
}

export interface CarDialogProps {
  car: Car;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
