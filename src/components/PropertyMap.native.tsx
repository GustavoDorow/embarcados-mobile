import { router } from 'expo-router';
import MapView, { Marker } from 'react-native-maps';

import { properties } from '@/constants/properties';

export default function PropertyMap() {
  return (
    <MapView
      style={{ width: '100%', height: 260 }}
      initialRegion={{
        latitude: -27.2,
        longitude: -50.2,
        latitudeDelta: 5,
        longitudeDelta: 5,
      }}
    >
      {properties.map((property) => (
        <Marker
          key={property.id}
          coordinate={property.coordinates}
          title={property.name}
          description={property.address.city}
          onPress={() =>
            router.push({
              pathname: '/property/[id]',
              params: { id: property.id },
            })
          }
        />
      ))}
    </MapView>
  );
}
