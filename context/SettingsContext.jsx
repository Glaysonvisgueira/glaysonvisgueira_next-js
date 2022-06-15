import React, { useState, createContext } from "react";
import { ThemeProvider } from "styled-components";
import { blueTheme, whiteTheme, yellowTheme, greenTheme, purpleTheme } from "@/styles/Theme";

export const SettingsContext = createContext({});

const listaTemas = {
	blue: blueTheme,
	yellow: yellowTheme,
	white: whiteTheme,
	green: greenTheme,
	purple: purpleTheme,
};

export default function SettingsProvider({ children }) {
	const [theme, setTheme] = useState(blueTheme);

	function changeTheme(newTheme) {
		setTheme(listaTemas[newTheme]);
	}

	function storageThemeInLocalStorage() {
		//Criar lógica para salvar o tema no local storage para pré carregar no início de cada carregamento do app.
	}

	return (
		<SettingsContext.Provider value={{ changeTheme }}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</SettingsContext.Provider>
	);
}
