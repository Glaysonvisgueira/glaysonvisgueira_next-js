import React, { useState, useContext } from "react";
import styled from "styled-components";
import { SettingsContext } from "@/context/SettingsContext";

const ThemeButtonsContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

const ButtonTheme = styled.div`
	margin: 5px;
	width: 28px;
	height: 28px;
	border: 1px solid #fff;
	//background-color: #fff;
	border-radius: 50%;
	transition: all 0.3s ease;

	&:hover {
		cursor: pointer;
		//opacity: 0.8;
		//width: 34px;
		margin-left: 20px;
		//height: 34px;
	}

	@media (max-width: 1200px) {
		width: 18px;
		height: 18px;
	}

	@media (max-width: 900px) {
		width: 16px;
		height: 16px;
	}
`;

export default function ThemeButtons() {
	const { changeTheme } = useContext(SettingsContext);

	function selectTheme(e) {
		changeTheme(e.target.id);
	}

	return (
		<ThemeButtonsContainer>
			<ButtonTheme id="blue" style={{ background: "#171E26" }} onClick={selectTheme} />
			<ButtonTheme id="white" style={{ background: "#fff" }} onClick={selectTheme} />
			<ButtonTheme id="yellow" style={{ background: "#FCD434" }} onClick={selectTheme} />
			<ButtonTheme id="purple" style={{ background: "#72195A" }} onClick={selectTheme} />
			<ButtonTheme id="green" style={{ background: "#45b69c" }} onClick={selectTheme} />
		</ThemeButtonsContainer>
	);
}
