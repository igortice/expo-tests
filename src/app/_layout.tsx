import { Slot } from 'expo-router';
import { useState } from 'react';
import { View } from 'react-native';

export function RootLayout() {
  const [first, setFirst] = useState(false);

  return <Slot />;
}
