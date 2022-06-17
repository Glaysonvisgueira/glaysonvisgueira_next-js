import React, { useState, useEffect, createContext } from "react";
import { ThemeProvider } from "styled-components";
import { blueTheme, redTheme, yellowTheme, greenTheme, purpleTheme, darkTheme, lightBlueTheme } from "@/styles/Theme";

export const SettingsContext = createContext({});

const listaTemas = {
	blue: blueTheme,
	yellow: yellowTheme,
	red: redTheme,
	green: greenTheme,
	purple: purpleTheme,
	lightBlue: lightBlueTheme,
	dark: darkTheme,
};

export default function SettingsProvider({ children }) {
	const [theme, setTheme] = useState(darkTheme);

	//Carregar o tema no inicio da aplicação
	useEffect(() => {
		getThemeLocalStorage();
	}, []);

	//Função para coletar o tema no localStorage do navegador
	const getThemeLocalStorage = async () => {
		const theme = localStorage.getItem("@glaysonvisgueira:theme");
		if (theme) {
			setTheme(JSON.parse(theme));
		} else {
			console.log("Sem tema predefinido!");
		}
	};

	async function changeTheme(newTheme) {
		setTheme(listaTemas[newTheme]);
		await localStorage.setItem("@glaysonvisgueira:theme", JSON.stringify(listaTemas[`${newTheme}`]));
	}

	return (
		<SettingsContext.Provider value={{ changeTheme }}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</SettingsContext.Provider>
	);
}
