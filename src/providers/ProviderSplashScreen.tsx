import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useCustomSplashScreen } from '@/hooks';

interface IProviderSplashScreenProps {
  children: React.ReactNode;
}

export const ProviderSplashScreen = ({ children }: IProviderSplashScreenProps) => {
  const insets = useSafeAreaInsets();
  const { appIsReady, onLayoutView } = useCustomSplashScreen();

  if (!appIsReady) return null;

  return (
    <View onLayout={onLayoutView} style={{ flex: 1, paddingTop: insets.top }}>
      {children}
    </View>
  );
};
