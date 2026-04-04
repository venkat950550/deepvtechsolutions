import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'deepvtech-theme';

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

  const storedTheme = window.localStorage.getItem(STORAGE_KEY);

  if (themeOptions.some((option) => option.id === storedTheme)) {
    return storedTheme;
  }

  return themeOptions[0].id;
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);
  const currentTheme = themeOptions.find((option) => option.id === theme) ?? themeOptions[0];

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = currentTheme.colorScheme;
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [currentTheme.colorScheme, theme]);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      themeOptions,
    }),
    [theme]
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
