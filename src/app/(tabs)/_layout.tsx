import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{ title: 'Início', headerShown: false }}
      />
      <Tabs.Screen name="properties" options={{ title: 'Hospedagens' }} />
      <Tabs.Screen name="interests" options={{ title: 'Interesses' }} />
    </Tabs>
  );
}
