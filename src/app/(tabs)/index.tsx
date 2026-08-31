import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import PropertyMap from '@/components/PropertyMap';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../../../assets/images/santa-catarina-logo.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>Hospeda SC</Text>
      <Text style={styles.description}>
        Explore hospedagens em várias cidades de Santa Catarina, veja onde elas
        estão no mapa e salve suas favoritas para consultar depois.
      </Text>

      <View style={styles.section}>
        <PropertyMap />
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.gallery}
        style={styles.section}
      >
        <Image
          source={require('../../../assets/images/ponte-hercilio-luz.png')}
          style={styles.photo}
        />
        <Image
          source={require('../../../assets/images/serra-rio-do-rastro.png')}
          style={styles.photo}
        />
        <Image
          source={require('../../../assets/images/lagoinha-do-leste.png')}
          style={styles.photo}
        />
        <Image
          source={require('../../../assets/images/vila-germanica.png')}
          style={styles.photo}
        />
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 16,
    alignItems: 'center',
  },
  logo: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  section: {
    width: '100%',
    maxWidth: 700,
  },
  gallery: {
    gap: 12,
  },
  photo: {
    width: 300,
    height: 220,
    borderRadius: 8,
  },
  description: {
    textAlign: 'center',
    width: '100%',
    maxWidth: 700,
  },
});
