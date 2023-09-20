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
	transition: all 0.3s ease;

	@media (max-width: 1400px) {
		width: 50%;
	}

	@media (max-width: 1200px) {
		width: 70%;
	}

	@media (max-width: 1000px) {
		width: 80%;
	}

	@media (max-width: 601px) {
		width: 100%;
	}
`;

const WrapperInput = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	flex-direction: column;
	margin-top: 5px;
	margin-bottom: 5px;

	label {
		color: ${(props) => props.theme.colors.subtitle};
		font-size: 0.8rem;
		margin-bottom: 10px;
		margin-top: 10px;
		font-weight: bold;
	}

	input {
		border: none;
		width: 100%;
		height: 38px;
		border-radius: 2px;
		padding: 0 10px;
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
	}
`;

const Button = styled.button`
	position: relative;
	width: 200px;
	height: 44px;
	margin-top: 15px;
	margin-bottom: 15px;
	transition: all 0.3s ease;
	font-size: ${(props) => props.theme.fontSizes.lg};
	border: none;
	color: ${(props) => props.theme.colors.background};
	border-radius: 4px;
	background-color: ${(props) => props.theme.colors.branding};
	font-weight: 700;

	&:hover {
		cursor: pointer;
		opacity: 0.8;
	}

	@media (max-width: 601px) {
		width: 100%;
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

				<Button>Enviar</Button>
			</ContainerForm>
		</ContactMeContainer>
	);
}
