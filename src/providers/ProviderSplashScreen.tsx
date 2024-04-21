import { View } from '@gluestack-ui/themed';

import { useCustomSplashScreen } from '@/hooks';

interface IProviderSplashScreenProps {
  children: React.ReactNode;
}

export const ProviderSplashScreen = ({ children }: IProviderSplashScreenProps) => {
  const { appIsReady, onLayoutView } = useCustomSplashScreen();

  if (!appIsReady) return null;

  return <View onLayout={onLayoutView}>{children}</View>;
};
