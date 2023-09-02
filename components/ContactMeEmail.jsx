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
`;

const ContainerForm = styled.form`
	width: 40%;
`;

const WrapperInput = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	flex-direction: column;
	margin-top: 5px;
	margin-bottom: 5px;

	label {
		color: ${(props) => props.theme.colors.branding};
		font-size: 0.8rem;
		margin-bottom: 10px;
		margin-top: 10px;
		font-weight: bold;
	}

	input {
		border: none;
		width: 100%;
		height: 44px;
		border-radius: 2px;
		padding: 0 10px;
		border-bottom: 3px solid ${(props) => props.theme.colors.branding};
		background-color: ${(props) => props.theme.colors.body};
		//caret-color: ${(props) => props.theme.colors.branding};
	}

	textarea:focus,
	input:focus {
		outline: none;
	}

	textarea {
		border: 2px solid transparent;
		width: 100%;
		max-width: 100%;
		min-height: 80px;
		border-radius: 4px;
		max-height: 120px;
		padding: 10px;
		background-color: ${(props) => props.theme.colors.body};
		border-bottom: 3px solid ${(props) => props.theme.colors.branding};
		/* resize: vertical; */
	}
`;

export default function ContactMeEmail() {
	const { language } = useContext(SettingsContext);

	return (
		<ContactMeContainer>
			<ContainerForm>
				<WrapperInput>
					<label for="nome" htmlFor="name">
						NOME
					</label>
					<input type="text" placeholder="Seu nome" id="name" />
				</WrapperInput>

				<WrapperInput>
					<label htmlFor="email">E-MAIL</label>
					<input type="text" placeholder="seuemail@email.com" id="email" />
				</WrapperInput>

				<WrapperInput>
					<label htmlFor="message">MENSAGEM</label>
					<textarea placeholder="Sua mensagem..." id="message" />
				</WrapperInput>
			</ContainerForm>
		</ContactMeContainer>
	);
}
