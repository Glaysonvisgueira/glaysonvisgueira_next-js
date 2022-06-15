import React, { useState, createContext } from "react";
import { ThemeProvider } from "styled-components";
import { blueTheme, whiteTheme, yellowTheme } from "@/styles/Theme";

export const SettingsContext = createContext({});

const listaTemas = {
	blue: blueTheme,
	yellow: yellowTheme,
	white: whiteTheme,
};

export default function SettingsProvider({ children }) {
	const [theme, setTheme] = useState(blueTheme);

	function changeTheme(newTheme) {
		setTheme(listaTemas[newTheme]);
	}

	return (
		<SettingsContext.Provider value={{ changeTheme }}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</SettingsContext.Provider>
	);
}
