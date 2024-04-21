import { Slot } from 'expo-router';

import { RootProvider } from '@/providers';

export default function RootLayout() {
  return (
    <RootProvider>
      <Slot />
    </RootProvider>
  );
}
