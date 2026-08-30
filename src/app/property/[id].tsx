import { Stack, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Button, Image, Linking, ScrollView, StyleSheet, Text, View } from 'react-native';

import { getInterestIds, toggleInterest } from '@/constants/interests';
import { properties, propertyImages } from '@/constants/properties';

export default function PropertyDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const property = properties.find((item) => item.id === id);
  const [interested, setInterested] = useState(false);

  useEffect(() => {
    getInterestIds().then((ids) => setInterested(ids.includes(id)));
  }, [id]);

  if (!property) return <Text>Hospedagem não encontrada.</Text>;

  const address = `${property.address.street}, ${property.address.number} - ${property.address.neighborhood}, ${property.address.city} - ${property.address.state}`;

  return (
    <>
      <Stack.Screen options={{ title: property.name }} />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>{property.name}</Text>

        {propertyImages[property.id].map((image, index) => (
          <Image key={index} source={image} style={styles.image} />
        ))}

        <Text>{property.description}</Text>

        <Text style={styles.heading}>Endereço</Text>
        <Text>{address}</Text>

        <Text style={styles.heading}>Preços</Text>
        {property.prices.length ? property.prices.map((price) => (
          <View key={price.description} style={styles.row}>
            <Text>{price.description}</Text>
            <Text>R$ {price.amount.toFixed(2).replace('.', ',')}</Text>
          </View>
        )) : <Text>Preço não informado.</Text>}

        <Text style={styles.heading}>Contato</Text>
        <Text style={styles.link} onPress={() => Linking.openURL(`mailto:${property.contact.email}`)}>
          {property.contact.email}
        </Text>
        <Text style={styles.link} onPress={() => Linking.openURL(`tel:${property.contact.phone}`)}>
          {property.contact.phone}
        </Text>
        <Text
          style={styles.link}
          onPress={() => Linking.openURL(`https://wa.me/${property.contact.whatsapp.replace(/\D/g, '')}`)}
        >
          WhatsApp
        </Text>

        {property.videos.map((video, index) => (
          <Button key={video} title={`Ver vídeo ${index + 1}`} onPress={() => Linking.openURL(video)} />
        ))}

        <Button
          title={interested ? 'Remover dos interesses' : 'Adicionar aos interesses'}
          onPress={async () => setInterested(await toggleInterest(property.id))}
        />
        <Button title="Abrir no mapa" onPress={() => Linking.openURL(property.mapsUrl)} />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: 700,
    alignSelf: 'center',
    padding: 16,
    gap: 12,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 240,
    borderRadius: 8,
  },
  heading: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  link: {
    color: '#087acc',
    textDecorationLine: 'underline',
  },
});
