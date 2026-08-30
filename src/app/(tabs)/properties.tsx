import { router } from 'expo-router';
import { useState } from 'react';
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import {
  lowestPrice,
  properties,
  propertyImages,
} from '@/constants/properties';

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
      renderItem={({ item }) => (
        <Pressable
          style={styles.card}
          onPress={() =>
            router.push({ pathname: '/property/[id]', params: { id: item.id } })
          }
        >
          <Image source={propertyImages[item.id][0]} style={styles.image} />
          <View style={styles.info}>
            <Text style={styles.name}>{item.name}</Text>
            <Text>{item.address.neighborhood}, {item.address.city}</Text>
            <Text>{lowestPrice(item)}</Text>
          </View>
        </Pressable>
      )}
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
  card: {
    maxWidth: 700,
    width: '100%',
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 180,
  },
  info: {
    padding: 12,
    gap: 4,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
