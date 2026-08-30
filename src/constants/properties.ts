import { ImageSourcePropType } from 'react-native';

import data from '../../assets/data/properties.json';

export type Property = {
  id: string;
  name: string;
  description: string;
  address: {
    street: string;
    number: string;
    neighborhood: string;
    city: string;
    state: string;
    postalCode: string;
  };
  coordinates: { latitude: number; longitude: number };
  videos: string[];
  prices: { description: string; amount: number; currency: string }[];
  contact: { email: string; phone: string; whatsapp: string };
  website: string;
  bookingUrl: string;
  mapsUrl: string;
};

export const properties = (data.properties as Property[]).sort((a, b) =>
  a.name.localeCompare(b.name),
);

export const propertyImages: Record<string, ImageSourcePropType[]> = {
  'palm-beach-apart-hotel': [
    require('../../assets/images/properties/palm-beach-apart-hotel/palm-beach-apart-hotel.jpg'),
    require('../../assets/images/properties/palm-beach-apart-hotel/palm-beach-apart-hotel-2.jpg'),
  ],
  'pousada-mare-de-lua': [
    require('../../assets/images/properties/pousada-mare-de-lua/pousada-mare-de-lua.png'),
    require('../../assets/images/properties/pousada-mare-de-lua/pousada-mare-de-lua-2.png'),
  ],
};

export function lowestPrice(property: Property) {
  if (!property.prices.length) return 'Preço não informado';

  const price = Math.min(...property.prices.map((item) => item.amount));
  return `A partir de R$ ${price.toFixed(2).replace('.', ',')}`;
}
