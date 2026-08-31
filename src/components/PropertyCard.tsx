import { router } from 'expo-router';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import {
  getPropertyImages,
  lowestPrice,
  Property,
} from '@/constants/properties';

type PropertyCardProps = {
  property: Property;
};

export function PropertyCard({ property }: PropertyCardProps) {
  const images = getPropertyImages(property.id);

  return (
    <Pressable
      style={styles.card}
      onPress={() =>
        router.push({ pathname: '/property/[id]', params: { id: property.id } })
      }
    >
      {images.length ? (
        <Image source={images[0]} style={styles.image} />
      ) : (
        <View style={[styles.image, styles.imagePlaceholder]}>
          <Text>Imagem não disponível</Text>
        </View>
      )}
      <View style={styles.info}>
        <Text style={styles.name}>{property.name}</Text>
        <Text>
          {property.address.neighborhood}, {property.address.city}
        </Text>
        <Text>{lowestPrice(property)}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
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
  imagePlaceholder: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ddd',
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
