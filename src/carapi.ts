import { Car, CarResponse, ResponseData } from "./types";

export const fetchCars = (): Promise<ResponseData> => {
  return fetch(import.meta.env.VITE_API_URL + '/cars')
  .then(response => {
    if (!response.ok)
      throw new Error(`Failed to fetch cars: ${response.statusText}`);
  
    return response.json();  
  })
  .catch(error => console.error(error))
}

export const saveCar = (car: Car): Promise<CarResponse> => {
  return fetch(import.meta.env.VITE_API_URL + '/cars', {
    method: 'POST',
    headers: { 'Content-type':'application/json' },
    body: JSON.stringify(car)
  })
  .then(response => {
    if (!response.ok)
      throw new Error("Failed to add car: " + response.statusText);

    return response.json();
  })
  .catch(error => console.error(error))
}

export const updateCar = (car: Car, url: string): Promise<CarResponse> => {
  return fetch(url, {
    method: 'PUT',
    headers: { 'Content-type':'application/json' },
    body: JSON.stringify(car)
  })
  .then(response => {
    if (!response.ok)
      throw new Error("Failed to edit car: " + response.statusText);

    return response.json();
  })
  .catch(error => console.error(error))
}

export const deleteCar = (url: string): Promise<CarResponse> => {
  return fetch(url, {
    method: 'DELETE'
  })
  .then(response => {
    if (!response.ok)
      throw new Error("Failed to delete car: " + response.statusText);
  
    return response.json();
  })
  .catch(error => console.error(error))
}