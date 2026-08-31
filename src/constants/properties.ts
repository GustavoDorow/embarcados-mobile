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

const propertyImageContext = require.context(
  '../../assets/images/properties',
  true,
  /\.(png|jpe?g)$/,
);

export function getPropertyImages(id: string): ImageSourcePropType[] {
  return propertyImageContext
    .keys()
    .filter((path) => path.startsWith(`./${id}/`))
    .sort()
    .map((path) => propertyImageContext(path));
}

export function lowestPrice(property: Property) {
  if (!property.prices.length) return 'Preço não informado';

  const price = Math.min(...property.prices.map((item) => item.amount));
  return `A partir de R$ ${price.toFixed(2).replace('.', ',')}`;
}
