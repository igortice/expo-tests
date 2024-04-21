import { GluestackUIProvider } from '@gluestack-ui/themed';

import { themeConfig } from '@/configs';
import { ProviderSplashScreen } from '@/providers/ProviderSplashScreen';

interface IRootProviderProps {
  children: React.ReactNode;
}

export const RootProvider = ({ children }: IRootProviderProps) => {
  return (
    <GluestackUIProvider config={themeConfig}>
      <ProviderSplashScreen>{children}</ProviderSplashScreen>
    </GluestackUIProvider>
  );
};
