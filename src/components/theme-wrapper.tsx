"use client";

import { useTheme } from "next-themes";
import React from "react";

export function ThemeWrapper({ children }: { children: React.ReactNode }) {
    const { theme } = useTheme(); // Get the current theme

    // Determine the class based on the theme
    const themeClass = theme === "dark" ? "dark-theme" : "light-theme";

    return (
        <div className={themeClass}>
            {children}
        </div>
    );
}
