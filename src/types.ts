export type ResponseData = {
  _embedded: {
    cars: CarResponse[];
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

export type CarResponse = {
  brand: string;
  model: string;
  color: string;
  fuel: string;
  modelYear: number;
  price: number;
  _links: {
    self: {
      href: string;
    };
    car: {
      href: string;
    };
  };
}

// Type for forms where _links is not required
export type Car = Omit<CarResponse, "_links">;

export type CarDialogProps = {
  car: Car;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export type CarEditProps = {
  car: CarResponse;
  fetchCars: () => void;
}