export interface Car {
  brand: string;
  model: string;
  color: string;
  fuel: string;
  modelYear: number;
  price: number;
  _links?: {
    self: {
      href: string;
    };
    car: {
      href: string;
    };
  };
}

export interface CarDialogProps {
  car: Car;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface CarEditProps {
  car: Car;
  fetchCars: () => void;
}