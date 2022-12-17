import React, { useState, createContext } from "react";
import { ThemeProvider } from "styled-components";
//Lista de temas
import { orangeTheme, redTheme, purpleTheme, greenTheme, lightBlueTheme, darkYellowTheme, lightTheme } from "@/styles/Theme";
//Pacotes com textos de linguagens
import ptbrJson from "@/config/localization/ptbr.json";
import enusJson from "@/config/localization/enus.json";

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
	const [changeLanguage, setLanguage] = useState(false);

	function changeTheme(newTheme) {
		setTheme(listaTemas[newTheme]);
	}

	function changeLanguageLocalization() {
		setLanguage(!changeLanguage);
	}

	var language = changeLanguage == true ? enusJson : ptbrJson;

	return (
		<SettingsContext.Provider value={{ changeTheme, changeLanguageLocalization, language }}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</SettingsContext.Provider>
	);
}
