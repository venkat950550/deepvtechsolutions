import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'deepvtech-theme';
const COLOR_MODE_KEY = 'deepvtech-color-mode';

export const themeOptions = [
  { id: 'aurora', label: 'Aurora', swatch: 'aurora', colorScheme: 'light' },
  { id: 'prism', label: 'Prism', swatch: 'prism', colorScheme: 'light' },
  { id: 'vertex', label: 'Vertex', swatch: 'vertex', colorScheme: 'light' },
  { id: 'neon', label: 'Neon', swatch: 'neon', colorScheme: 'dark' },
  { id: 'reactor', label: 'Reactor', swatch: 'reactor', colorScheme: 'dark' },
  { id: 'links', label: 'Links', swatch: 'links', colorScheme: 'light' },
  { id: 'ember', label: 'Ember', swatch: 'ember', colorScheme: 'light' },
  { id: 'midnight', label: 'Midnight', swatch: 'midnight', colorScheme: 'dark' },
];

const ThemeContext = createContext(null);

function getInitialTheme() {
  if (typeof window === 'undefined') {
    return themeOptions[0].id;
  }

  const searchParams = new URLSearchParams(window.location.search);
  const queryTheme = searchParams.get('theme');

  if (themeOptions.some((option) => option.id === queryTheme)) {
    return queryTheme;
  }

  const storedTheme = window.localStorage.getItem(STORAGE_KEY);

  if (themeOptions.some((option) => option.id === storedTheme)) {
    return storedTheme;
  }

  return themeOptions[0].id;
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
  const [theme, setTheme] = useState(getInitialTheme);
  const [colorMode, setColorMode] = useState(getInitialColorMode);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.dataset.colorMode = colorMode;
    document.documentElement.style.colorScheme = colorMode;
    window.localStorage.setItem(STORAGE_KEY, theme);
    window.localStorage.setItem(COLOR_MODE_KEY, colorMode);
  }, [colorMode, theme]);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
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
