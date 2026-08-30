import AsyncStorage from '@react-native-async-storage/async-storage';

const key = 'interested-properties';

export async function getInterestIds(): Promise<string[]> {
  const value = await AsyncStorage.getItem(key);
  return value ? JSON.parse(value) : [];
}

export async function toggleInterest(id: string) {
  const ids = await getInterestIds();
  const interested = ids.includes(id);
  const next = interested ? ids.filter((item) => item !== id) : [...ids, id];

  await AsyncStorage.setItem(key, JSON.stringify(next));
  return !interested;
}
