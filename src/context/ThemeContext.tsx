import React, { createContext, useContext } from 'react';

export type ScrollTheme = 'light' | 'emerald' | 'obsidian';

export interface ThemeContextValue {
  theme: ScrollTheme;
  progress: number;
}

export const ThemeContext = createContext<ThemeContextValue>({
  theme: 'light',
  progress: 0,
});

export const useScrollTheme = () => useContext(ThemeContext);
