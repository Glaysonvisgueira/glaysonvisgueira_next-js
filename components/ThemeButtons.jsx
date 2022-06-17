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

const ButtonBlue = styled(ButtonTheme)`
	border: 3px solid ${(props) => (props.selected ? "#fff" : "transparent")};
`;

const ButtonYellow = styled(ButtonTheme)`
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

const ButtonDark = styled(ButtonTheme)`
	border: 3px solid ${(props) => (props.selected ? "#fff" : "transparent")};
`;

const ButtonLightBlue = styled(ButtonTheme)`
	border: 3px solid ${(props) => (props.selected ? "#fff" : "transparent")};
`;

const ButtonDarkYellow = styled(ButtonTheme)`
	border: 3px solid ${(props) => (props.selected ? "#fff" : "transparent")};
`;

export default function ThemeButtons() {
	const { changeTheme } = useContext(SettingsContext);
	const [selectedBlue, setSelectedBlue] = useState(false);
	const [selectedYellow, setSelectedYellow] = useState(false);
	const [selectedRed, setSelectedRed] = useState(false);
	const [selectedPurple, setSelectedPurple] = useState(false);
	const [selectedGreen, setSelectedGreen] = useState(false);
	const [selectedDark, setSelectedDark] = useState(false);
	const [selectedLightBlue, setSelectedLightBlue] = useState(false);
	const [selectedDarkYellow, setSelectedDarkYellow] = useState(false);

	function handleSelectTheme(option) {
		if (option == "blue") {
			setSelectedBlue(true);
			setSelectedYellow(false);
			setSelectedRed(false);
			setSelectedPurple(false);
			setSelectedGreen(false);
			setSelectedDark(false);
			setSelectedLightBlue(false);
			setSelectedDarkYellow(false);
		} else if (option == "red") {
			setSelectedBlue(false);
			setSelectedYellow(false);
			setSelectedRed(true);
			setSelectedPurple(false);
			setSelectedGreen(false);
			setSelectedDark(false);
			setSelectedLightBlue(false);
			setSelectedDarkYellow(false);
		} else if (option == "yellow") {
			setSelectedBlue(false);
			setSelectedYellow(true);
			setSelectedRed(false);
			setSelectedPurple(false);
			setSelectedGreen(false);
			setSelectedDark(false);
			setSelectedLightBlue(false);
			setSelectedDarkYellow(false);
		} else if (option == "purple") {
			setSelectedBlue(false);
			setSelectedYellow(false);
			setSelectedRed(false);
			setSelectedPurple(true);
			setSelectedGreen(false);
			setSelectedDark(false);
			setSelectedLightBlue(false);
			setSelectedDarkYellow(false);
		} else if (option == "green") {
			setSelectedBlue(false);
			setSelectedYellow(false);
			setSelectedRed(false);
			setSelectedPurple(false);
			setSelectedGreen(true);
			setSelectedDark(false);
			setSelectedLightBlue(false);
			setSelectedDarkYellow(false);
		} else if (option == "dark") {
			setSelectedBlue(false);
			setSelectedYellow(false);
			setSelectedRed(false);
			setSelectedPurple(false);
			setSelectedGreen(false);
			setSelectedDark(true);
			setSelectedLightBlue(false);
			setSelectedDarkYellow(false);
		} else if (option == "lightBlue") {
			setSelectedBlue(false);
			setSelectedYellow(false);
			setSelectedRed(false);
			setSelectedPurple(false);
			setSelectedGreen(false);
			setSelectedDark(false);
			setSelectedLightBlue(true);
			setSelectedDarkYellow(false);
		} else if (option == "darkYellow") {
			setSelectedBlue(false);
			setSelectedYellow(false);
			setSelectedRed(false);
			setSelectedPurple(false);
			setSelectedGreen(false);
			setSelectedDark(false);
			setSelectedLightBlue(false);
			setSelectedDarkYellow(true);
		}

		changeTheme(option);
	}

	return (
		<ThemeButtonsContainer>
			<ButtonBlue
				id="blue"
				selected={selectedBlue}
				style={{ background: "#29313c" }}
				onClick={(e) => {
					handleSelectTheme(e.target.id);
				}}
			/>
			<ButtonYellow id="yellow" selected={selectedYellow} style={{ background: "#FCD434" }} onClick={(e) => handleSelectTheme(e.target.id)} />
			<ButtonRed id="red" selected={selectedRed} style={{ background: "#B33636" }} onClick={(e) => handleSelectTheme(e.target.id)} />
			<ButtonPurple id="purple" selected={selectedPurple} style={{ background: "#72195A" }} onClick={(e) => handleSelectTheme(e.target.id)} />
			<ButtonGreen id="green" selected={selectedGreen} style={{ background: "#45b69c" }} onClick={(e) => handleSelectTheme(e.target.id)} />
			<ButtonDark id="dark" selected={selectedDark} style={{ background: "#272727" }} onClick={(e) => handleSelectTheme(e.target.id)} />
			<ButtonLightBlue id="lightBlue" selected={selectedLightBlue} style={{ background: "#0D5C82" }} onClick={(e) => handleSelectTheme(e.target.id)} />
			<ButtonLightBlue id="darkYellow" selected={selectedDarkYellow} style={{ background: "#000" }} onClick={(e) => handleSelectTheme(e.target.id)} />
		</ThemeButtonsContainer>
	);
}
