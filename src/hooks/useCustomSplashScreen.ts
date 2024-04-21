import { SplashScreen } from 'expo-router';
import { useCallback, useEffect, useState } from 'react';

SplashScreen.preventAutoHideAsync();

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
      // Use here to load any data or perform any tasks before the app is ready
      await new Promise(resolve => setTimeout(resolve, 3000));
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
