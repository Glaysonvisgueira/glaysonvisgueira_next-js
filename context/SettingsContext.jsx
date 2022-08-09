import React, { useState, useEffect, createContext } from "react";
import { ThemeProvider } from "styled-components";
import { orangeTheme, redTheme, purpleTheme, greenTheme, lightBlueTheme, darkYellowTheme, lightTheme } from "@/styles/Theme";

export const SettingsContext = createContext({});

const listaTemas = {
	orange: orangeTheme,
	red: redTheme,
	purple: purpleTheme,
	lightBlue: lightBlueTheme,
	green: greenTheme,
	darkYellow: darkYellowTheme,
	light: lightTheme,
};

export default function SettingsProvider({ children }) {
	const [theme, setTheme] = useState(darkYellowTheme);

	async function changeTheme(newTheme) {
		setTheme(listaTemas[newTheme]);
	}

	return (
		<SettingsContext.Provider value={{ changeTheme }}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</SettingsContext.Provider>
	);
}
