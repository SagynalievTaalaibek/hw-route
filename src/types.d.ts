export interface TourInterface {
  id: number;
  name: string;
  price: number;
  description: string;
  img: string;
}

export interface TourFormInterface {
  name: string;
  price: string;
  description: string;
  img: string;
}

export interface Movie {
  id: number;
  movieName: string;
}

export interface ApiListCountry {
  name: string;
  alpha3Code: string;
}

export interface ApiCountry {
  name: string;
  capital: string;
  population: number;
  flag: string;
  languages: [{ name: string }];
  region: string;
  borders: string[];
}

export interface CountryListInterface {
  id: number;
  nameCountry: string;
  alpha3Code: string;
}

export interface borderCountry {
  id: number;
  name: string;
}