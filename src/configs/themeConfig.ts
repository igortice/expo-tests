import { createConfig } from '@gluestack-style/react';
import { config } from '@gluestack-ui/config';

export const themeConfig = createConfig({
  ...config,
  tokens: {
    ...config.tokens,
    fonts: {
      heading: 'Inter-Medium',
      body: 'Inter-Medium',
      mono: 'Inter-Medium',
    },
  },
});
