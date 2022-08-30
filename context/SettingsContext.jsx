import React, { useState, createContext } from "react";
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
	const [language, setLanguage] = useState("ptbr");

	function changeTheme(newTheme) {
		setTheme(listaTemas[newTheme]);
	}

	function changeLanguage() {
		console.log("Alterado idioma da página.");
	}

	return (
		<SettingsContext.Provider value={{ changeTheme }}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</SettingsContext.Provider>
	);
}
