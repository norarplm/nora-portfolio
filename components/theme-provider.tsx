"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"       // This tells next-themes to add a 'class' to the <html> element
      defaultTheme="system"   // You can change this to 'light' or 'dark' if you prefer
      enableSystem            // Enables system preference detection
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
