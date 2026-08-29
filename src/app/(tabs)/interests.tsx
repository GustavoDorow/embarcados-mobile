import { StyleSheet, Text, View } from 'react-native';

export default function InterestsScreen() {
  return (
    <View style={styles.container}>
      <Text>Propriedades de interesse</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
