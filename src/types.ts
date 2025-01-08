export type ResponseData = {
  _embedded: {
    cars: Car[];
  }
  _links: {
    self: {
      href: string;
    };
    profile: {
      href: string;
    };
    search: {
      href: string;
    };
  }
}

export type Car = {
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

export type CarDialogProps = {
  car: Car;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export type CarEditProps = {
  car: Car;
  fetchCars: () => void;
}