import React, { useState, useContext } from "react";
import styled from "styled-components";

//Contexto
import { SettingsContext } from "@/context/SettingsContext";

const ThemeButtonsContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	z-index: 2;

	@media (max-width: 601px) {
		flex-direction: row;
	}
`;

const ButtonTheme = styled.div`
	margin: 5px;
	width: 22px;
	height: 22px;
	border-radius: 50%;
	transition: all 0.3s ease;

	&:hover {
		transform: scale(1.3);
		cursor: pointer;
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

const ButtonOrange = styled(ButtonTheme)`
	border: 3px solid ${(props) => (props.selected ? "#fff" : "transparent")};
`;

const ButtonRed = styled(ButtonTheme)`
	border: 3px solid ${(props) => (props.selected ? "#fff" : "transparent")};
`;

const ButtonPurple = styled(ButtonTheme)`
	border: 3px solid ${(props) => (props.selected ? "#fff" : "transparent")};
`;

const ButtonGreen = styled(ButtonTheme)`
	border: 3px solid ${(props) => (props.selected ? "#fff" : "transparent")};
`;

const ButtonLightBlue = styled(ButtonTheme)`
	border: 3px solid ${(props) => (props.selected ? "#fff" : "transparent")};
`;

const ButtonDarkYellow = styled(ButtonTheme)`
	border: 3px solid ${(props) => (props.selected ? "#fff" : "transparent")};
`;

const ButtonLight = styled(ButtonTheme)`
	border: 3px solid ${(props) => (props.selected ? "#fff" : "transparent")};
`;

export default function ThemeButtons() {
	const { changeTheme } = useContext(SettingsContext);
	const [selectedOrange, setSelectedOrange] = useState(false);
	const [selectedRed, setSelectedRed] = useState(false);
	const [selectedPurple, setSelectedPurple] = useState(false);
	const [selectedGreen, setSelectedGreen] = useState(false);
	const [selectedLightBlue, setSelectedLightBlue] = useState(false);
	const [selectedDarkYellow, setSelectedDarkYellow] = useState(true);
	const [selectedLight, setSelectedLight] = useState(true);

	function handleSelectTheme(option) {
		if (option == "orange") {
			setSelectedOrange(true);
			setSelectedRed(false);
			setSelectedPurple(false);
			setSelectedGreen(false);
			setSelectedLightBlue(false);
			setSelectedDarkYellow(false);
			setSelectedLight(false);
		} else if (option == "red") {
			setSelectedRed(true);
			setSelectedOrange(false);
			setSelectedPurple(false);
			setSelectedGreen(false);
			setSelectedLightBlue(false);
			setSelectedDarkYellow(false);
			setSelectedLight(false);
		} else if (option == "purple") {
			setSelectedPurple(true);
			setSelectedOrange(false);
			setSelectedRed(false);
			setSelectedGreen(false);
			setSelectedLightBlue(false);
			setSelectedDarkYellow(false);
			setSelectedLight(false);
		} else if (option == "green") {
			setSelectedGreen(true);
			setSelectedOrange(false);
			setSelectedRed(false);
			setSelectedPurple(false);
			setSelectedLightBlue(false);
			setSelectedDarkYellow(false);
			setSelectedLight(false);
		} else if (option == "lightBlue") {
			setSelectedLightBlue(true);
			setSelectedOrange(false);
			setSelectedRed(false);
			setSelectedPurple(false);
			setSelectedGreen(false);
			setSelectedDarkYellow(false);
			setSelectedLight(false);
		} else if (option == "darkYellow") {
			setSelectedDarkYellow(true);
			setSelectedOrange(false);
			setSelectedRed(false);
			setSelectedPurple(false);
			setSelectedGreen(false);
			setSelectedLightBlue(false);
			setSelectedLight(false);
		} else if (option == "light") {
			setSelectedLight(true);
			setSelectedOrange(false);
			setSelectedRed(false);
			setSelectedPurple(false);
			setSelectedGreen(false);
			setSelectedLightBlue(false);
			setSelectedDarkYellow(false);
		}

		changeTheme(option);
	}

	return (
		<ThemeButtonsContainer>
			<ButtonOrange
				id="orange"
				selected={selectedOrange}
				style={{ background: "#fa8c05" }}
				onClick={(e) => {
					handleSelectTheme(e.target.id);
				}}
			/>
			<ButtonRed id="red" selected={selectedRed} style={{ background: "#B33636" }} onClick={(e) => handleSelectTheme(e.target.id)} />
			<ButtonPurple id="purple" selected={selectedPurple} style={{ background: "#72195A" }} onClick={(e) => handleSelectTheme(e.target.id)} />
			<ButtonGreen id="green" selected={selectedGreen} style={{ background: "#00ff84" }} onClick={(e) => handleSelectTheme(e.target.id)} />
			<ButtonLightBlue id="lightBlue" selected={selectedLightBlue} style={{ background: "#14e0d3" }} onClick={(e) => handleSelectTheme(e.target.id)} />
			<ButtonDarkYellow id="darkYellow" selected={selectedDarkYellow} style={{ background: "#FCD434" }} onClick={(e) => handleSelectTheme(e.target.id)} />
		</ThemeButtonsContainer>
	);
}
