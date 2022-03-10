import { createTheme } from '@nextui-org/react';

type ThemeType = { type: 'dark' | 'light' };

const type: ThemeType = { type: 'dark' };

export const darkTheme = createTheme({
  ...type,
  theme: {
    colors: {}, // override dark theme colors
  },
});
