import { router, useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text } from 'react-native';

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
      renderItem={({ item }) => (
        <Pressable
          style={styles.item}
          onPress={() =>
            router.push({ pathname: '/property/[id]', params: { id: item.id } })
          }
        >
          <Text style={styles.name}>{item.name}</Text>
          <Text>{item.address.neighborhood}, {item.address.city}</Text>
        </Pressable>
      )}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 16,
    gap: 12,
  },
  item: {
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
