import { useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';

import { PropertyCard } from '@/components/PropertyCard';
import { getInterestIds } from '@/constants/interests';
import { properties, Property } from '@/constants/properties';

export default function InterestsScreen() {
  const [items, setItems] = useState<Property[]>([]);

  useFocusEffect(
    useCallback(() => {
      getInterestIds().then((ids) =>
        setItems(properties.filter((property) => ids.includes(property.id))),
      );
    }, []),
  );

  return (
    <FlatList
      data={items}
      keyExtractor={(property) => property.id}
      contentContainerStyle={styles.list}
      ListEmptyComponent={<Text>Nenhuma hospedagem marcada.</Text>}
      renderItem={({ item }) => <PropertyCard property={item} />}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 16,
    gap: 16,
  },
});
