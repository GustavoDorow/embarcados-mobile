import { StyleSheet, Text, View } from 'react-native';

export default function PropertyMap() {
  return (
    <View style={styles.map}>
      <Text>O mapa está disponível no Expo Go.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    height: 260,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ddd',
  },
});
