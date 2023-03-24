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
	/* background-color: ${(props) => props.theme.colors.backgroundSecondary}; */
`;

const ContainerForm = styled.form`
	width: 40%;
	padding: 20px;
	border-radius: 8px;
	border: 1px solid ${(props) => props.theme.colors.background};
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
		margin-top: 10px;
		font-weight: bold;
	}

	input {
		border: none;
		width: 100%;
		height: 34px;
		border-radius: 4px;
		padding: 0 10px;
		border: 2px solid transparent;
		caret-color: ${(props) => props.theme.colors.branding};
	}

	input:focus {
		border: 2px solid ${(props) => props.theme.colors.background};
	}

	textarea {
		border: 2px solid transparent;
		width: 100%;
		max-width: 100%;
		min-height: 80px;
		border-radius: 4px;
		max-height: 120px;
		padding: 10px;
		/* resize: vertical; */
	}

	textarea:focus {
		border: 2px solid ${(props) => props.theme.colors.background};
	}
`;

export default function ContactMeEmail() {
	const { language } = useContext(SettingsContext);

	return (
		<ContactMeContainer>
			<ContainerForm>
				<WrapperInput>
					<label for="nome">Nome</label>
					<input type="text" placeholder="Seu nome" id="nome" name="nome" />
				</WrapperInput>

				<WrapperInput>
					<label>E-mail</label>
					<input type="text" placeholder="seuemail@email.com" />
				</WrapperInput>

				<WrapperInput>
					<label>Mensagem</label>
					<textarea placeholder="Sua mensagem..." />
				</WrapperInput>
			</ContainerForm>
		</ContactMeContainer>
	);
}
