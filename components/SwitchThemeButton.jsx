import React, { useEffect, useState, useContext } from "react";
import Image from "next/image";
import styled from "styled-components";

//Contexto
import { SettingsContext } from "@/context/SettingsContext";

//ícones
import { DarkMode } from "@styled-icons/material-rounded/DarkMode";
import { LightDown } from "@styled-icons/entypo/LightDown";

const SwitchButton = styled.div`
	margin-left: 8px;
	margin-right: 8px;

	.switch {
		position: relative;
		display: inline-block;
		width: 60px;
		height: 30px;
	}

	/* Hide default HTML checkbox */
	.switch input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	/* The slider */
	.slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: ${(props) => props.theme.colors.backgroundSecondary};
		-webkit-transition: 0.4s;
		transition: 0.4s;
		//border: 2px solid ${(props) => props.theme.colors.branding};
	}

	.slider:before {
		position: absolute;
		content: "";
		height: 22px;
		width: 22px;
		left: 4px;
		bottom: 4px;
		background-color: ${(props) => props.theme.colors.branding};
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}

	input:checked + .slider:before {
		-webkit-transform: translateX(26px);
		-ms-transform: translateX(26px);
		transform: translateX(26px);
	}

	/* Rounded sliders */
	.slider.round {
		border-radius: 34px;
	}

	.slider.round:before {
		border-radius: 50%;
	}
`;

const LanguageWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	margin-left: 15px;

	svg {
		width: 28px;
		height: 28px;
		color: ${(props) => props.theme.colors.branding};
	}
`;

export default function SwitchThemeButton() {
	const { changeLanguageLocalization, changeTheme } = useContext(SettingsContext);
	const [checked, setChecked] = useState(false);

	function handleCheckSwitch() {
		setChecked(!checked);
		//changeLanguageLocalization();
		changeTheme(checked ? "dark" : "light");
	}

	return (
		<LanguageWrapper>
			<DarkMode />
			<SwitchButton>
				<label className="switch">
					<input type="checkbox" checked={checked} onClick={handleCheckSwitch} readOnly />
					<span className="slider round"></span>
				</label>
			</SwitchButton>
			<LightDown />
		</LanguageWrapper>
	);
}
