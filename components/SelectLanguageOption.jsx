import React from "react";
import styled from "styled-components";

const SelectField = styled.select`
	width: 140px;
	height: 34px;
	background-color: ${(props) => props.theme.colors.backgroundSecondary};
	border-radius: 4px;
	border: none;
	//margin: 10px;
	padding: 5px;
	font-weight: 900;
	color: ${(props) => props.theme.colors.title};

	option {
		font-weight: 900;
	}

	@media (max-width: 1400px) {
		font-size: ${(props) => props.theme.fontSizes.md};
	}

	@media (max-width: 1200px) {
		font-size: ${(props) => props.theme.fontSizes.sm};
	}

	@media (max-width: 900px) {
		font-size: ${(props) => props.theme.fontSizes.xs};
	}

	@media (max-width: 601px) {
		width: 95%;
	}
`;

export default function SelectLanguageOption(props) {
	return (
		<SelectField>
			<option value="ptbr">PORTUGUÊS</option>
			<option value="enus">INGLÊS</option>
		</SelectField>
	);
}
