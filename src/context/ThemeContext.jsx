import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const COLOR_MODE_KEY = 'deepvtech-color-mode';
const DEFAULT_THEME = 'prism';

export const themeOptions = [];

const ThemeContext = createContext(null);

function getInitialTheme() {
  return DEFAULT_THEME;
}


function getInitialColorMode() {
  if (typeof window === 'undefined') {
    return 'light';
  }

  const searchParams = new URLSearchParams(window.location.search);
  const queryMode = searchParams.get('mode');

  if (queryMode === 'light' || queryMode === 'dark') {
    return queryMode;
  }

  const storedMode = window.localStorage.getItem(COLOR_MODE_KEY);

  if (storedMode === 'light' || storedMode === 'dark') {
    return storedMode;
  }

  if (window.matchMedia?.('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }

  return 'light';
}

export function ThemeProvider({ children }) {
  const [theme] = useState(getInitialTheme);
  const [colorMode, setColorMode] = useState(getInitialColorMode);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.dataset.colorMode = colorMode;
    document.documentElement.style.colorScheme = colorMode;
    window.localStorage.setItem(COLOR_MODE_KEY, colorMode);
  }, [colorMode, theme]);

  const value = useMemo(
    () => ({
      theme,
      setTheme: () => {},
      colorMode,
      setColorMode,
      toggleColorMode: () => setColorMode((value) => (value === 'light' ? 'dark' : 'light')),
      themeOptions,
    }),
    [colorMode, theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const value = useContext(ThemeContext);

  if (!value) {
    throw new Error('useTheme must be used within ThemeProvider');
  }

  return value;
}
