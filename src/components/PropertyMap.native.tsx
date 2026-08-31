import MapView, { Marker } from 'react-native-maps';
import { Linking, Platform } from 'react-native';

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
          onPress={() => {
            const { latitude, longitude } = property.coordinates;
            const destination = `${latitude},${longitude}`;
            const url =
              Platform.OS === 'ios'
                ? `https://maps.apple.com/?daddr=${destination}`
                : `https://www.google.com/maps/dir/?api=1&destination=${destination}`;

            Linking.openURL(url);
          }}
        />
      ))}
    </MapView>
  );
}
