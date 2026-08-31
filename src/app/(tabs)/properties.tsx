import { useState } from 'react';
import { FlatList, StyleSheet, TextInput } from 'react-native';

import { PropertyCard } from '@/components/PropertyCard';
import { properties } from '@/constants/properties';

export default function PropertiesScreen() {
  const [city, setCity] = useState('');
  const filteredProperties = properties.filter((property) =>
    property.address.city.toLowerCase().includes(city.toLowerCase()),
  );

  return (
    <FlatList
      data={filteredProperties}
      keyExtractor={(property) => property.id}
      contentContainerStyle={styles.list}
      ListHeaderComponent={
        <TextInput
          placeholder="Filtrar por cidade"
          value={city}
          onChangeText={setCity}
          style={styles.input}
        />
      }
      renderItem={({ item }) => <PropertyCard property={item} />}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 16,
    gap: 16,
  },
  input: {
    maxWidth: 700,
    width: '100%',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 8,
    padding: 12,
  },
});
