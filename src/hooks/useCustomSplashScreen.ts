import * as Font from 'expo-font';
import { SplashScreen } from 'expo-router';
import { useCallback, useEffect, useState } from 'react';

SplashScreen.preventAutoHideAsync();

const CUSTOM_FONTS = {
  'Inter-Black': require('@/assets/fonts/Inter-Black.otf'),
  'Inter-Bold': require('@/assets/fonts/Inter-Bold.otf'),
  'Inter-ExtraBold': require('@/assets/fonts/Inter-ExtraBold.otf'),
  'Inter-ExtraLight': require('@/assets/fonts/Inter-ExtraLight.otf'),
  'Inter-Light': require('@/assets/fonts/Inter-Light.otf'),
  'Inter-Medium': require('@/assets/fonts/Inter-Medium.otf'),
  'Inter-Regular': require('@/assets/fonts/Inter-Regular.otf'),
  'Inter-SemiBold': require('@/assets/fonts/Inter-SemiBold.otf'),
  'Inter-Thin': require('@/assets/fonts/Inter-Thin.otf'),
};

export const useCustomSplashScreen = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  const onLayoutView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  async function prepare() {
    try {
      await Font.loadAsync(CUSTOM_FONTS);
    } catch (e) {
      console.warn(e);
    } finally {
      setAppIsReady(true);
    }
  }

  useEffect(() => {
    prepare();
  }, []);

  return {
    appIsReady,
    onLayoutView,
  };
};
