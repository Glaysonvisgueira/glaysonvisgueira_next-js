import React, { useContext } from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

//Styled icons
import { Robot } from "@styled-icons/fa-solid/Robot";
import { DesignServices } from "@styled-icons/material-rounded/DesignServices";
import { DesignIdeas } from "@styled-icons/fluentui-system-filled/DesignIdeas";
import { CodeBlock } from "@styled-icons/boxicons-regular/CodeBlock";

//Contexto
import { SettingsContext } from "@/context/SettingsContext";

const ContactMeContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	width: 100%;
	height: 400px;
	padding: 20px;
	background-color: ${(props) => props.theme.colors.branding};
`;

const WrapperInput = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	flex-direction: column;
	margin-top: 5px;
	margin-bottom: 5px;

	label {
		color: ${(props) => props.theme.colors.background};
		font-size: 1rem;
		margin-bottom: 5px;
	}

	input {
		border: none;
		width: 300px;
		height: 34px;
		border-radius: 4px;
		padding: 0 10px;
	}

	input:focus {
		border: 2px solid ${(props) => props.theme.colors.background};
	}
`;

export default function ContactMeEmail() {
	const { language } = useContext(SettingsContext);

	return (
		<ContactMeContainer>
			<WrapperInput>
				<label>Nome</label>
				<input />
			</WrapperInput>
			<WrapperInput>
				<label>Nome</label>
				<input />
			</WrapperInput>
			<WrapperInput>
				<label>Nome</label>
				<input />
			</WrapperInput>
		</ContactMeContainer>
	);
}
