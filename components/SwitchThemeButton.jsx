import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";

//Contexto
import { SettingsContext } from "@/context/SettingsContext";

//ícones
import { DarkMode } from "@styled-icons/material-rounded/DarkMode";
import { LightDown } from "@styled-icons/entypo/LightDown";

const LanguageWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	margin-left: 15px;
	cursor: pointer;

	svg {
		width: 28px;
		height: 28px;
		color: ${(props) => props.theme.colors.branding};
		transition: all 0.3s ease;
	}

	svg:hover {
		transform: scale(1.2);
	}
`;

export default function SwitchThemeButton() {
	const { changeTheme } = useContext(SettingsContext);
	const [checked, setChecked] = useState(false);

	function handleCheckSwitch() {
		setChecked((checked) => !checked);
		changeTheme(checked ? "dark" : "light");
	}

	return <LanguageWrapper>{checked ? <DarkMode onClick={handleCheckSwitch} /> : <LightDown onClick={handleCheckSwitch} />}</LanguageWrapper>;
}
