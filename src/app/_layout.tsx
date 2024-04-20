import { Slot } from 'expo-router';

import { ProviderSplashScreen } from '@/providers';

export default function RootLayout() {
  return (
    <ProviderSplashScreen>
      <Slot />
    </ProviderSplashScreen>
  );
}
