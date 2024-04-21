import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';

import { ProviderSplashScreen } from './ProviderSplashScreen';

interface IRootProviderProps {
  children: React.ReactNode;
}

export const RootProvider = ({ children }: IRootProviderProps) => {
  return (
    <GluestackUIProvider config={config}>
      <ProviderSplashScreen>{children}</ProviderSplashScreen>
    </GluestackUIProvider>
  );
};
