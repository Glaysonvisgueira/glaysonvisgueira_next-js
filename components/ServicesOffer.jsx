import React from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

//Styled icons
import { Robot } from "@styled-icons/fa-solid/Robot";
import { DesignServices } from "@styled-icons/material-rounded/DesignServices";
import { DesignIdeas } from "@styled-icons/fluentui-system-filled/DesignIdeas";
import { CodeBlock } from "@styled-icons/boxicons-regular/CodeBlock";
import { WindowDevTools } from "@styled-icons/fluentui-system-regular/WindowDevTools";

//Styled-components
import { TitleH3, TitleSection, ContainerTitleSection } from "@/styles/ui";

const CardService = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	flex-direction: column;
	padding: 20px;
	border-radius: 4px;
	width: 275px;
	height: 340px;
	background-color: ${(props) => props.theme.colors.backgroundSecondary};
	transition: all 0.3s ease;
	border: 3px solid transparent;
	z-index: 1;

	:hover {
		transform: translateY(-12px);
		border: 3px solid ${(props) => props.theme.colors.branding};
		box-shadow: 0px 0px 40px 0px ${(props) => props.theme.colors.branding}5E;
	}

	svg {
		color: ${(props) => props.theme.colors.branding};
		width: 70px;
		height: 70px;
		margin-bottom: 10px;
	}

	@media (max-width: 600px) {
		width: 90%;
	}
`;

const CardText = styled.p`
	color: ${(props) => props.theme.colors.subtitle};
	font-size: 16px;
	//font-weight: 900;
	text-align: left;
	margin-top: 30px;

	@media (max-width: 1400px) {
		font-size: ${(props) => props.theme.fontSizes.lg};
	}
`;

const ContainerGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	transition: all 0.3s ease;
	gap: 20px;
	justify-items: center;

	@media (max-width: 1200px) {
		grid-template-columns: repeat(2, 1fr);
		width: 85%;
	}

	@media (max-width: 600px) {
		grid-template-columns: repeat(1, 1fr);
		//margin-top: 60px;
		width: 100%;
	}
`;

export default function ServicesOffer() {
	return (
		<>
			<ContainerTitleSection>
				<WindowDevTools />
				<TitleSection>Serviços oferecidos</TitleSection>
			</ContainerTitleSection>

			<ScrollAnimation animateIn="fadeIn" animateOnce>
				<ContainerGrid>
					<CardService>
						<div>
							<Robot />
							<TitleH3>SEO</TitleH3>
						</div>
						<CardText>Através de técnicas de SEO, irei elevar a taxa de conversão do seu produto e aumentar sua visibilidade online de forma orgânica, ou seja, sem depender de anúncios para serem bem sucedidas.</CardText>
					</CardService>

					<CardService>
						<div>
							<DesignIdeas />
							<TitleH3>UX/UI</TitleH3>
						</div>
						<CardText>Criação de design web responsivo, focado em usabilidade para prover a melhor experiência de usuário para gerar leads para seu produto.</CardText>
					</CardService>

					<CardService>
						<div>
							<DesignServices />
							<TitleH3>BRANDING</TitleH3>
						</div>
						<CardText>Ajudo você a posicionar sua marca da forma correta, potencializando resultados positivos através das boas práticas do marketing digital.</CardText>
					</CardService>

					<CardService>
						<div>
							<CodeBlock />
							<TitleH3>DESENVOLVIMENTO</TitleH3>
						</div>
						<CardText>Desenvolvimento de sistemas 100% personalizados que vão automatizar a administração do seu negócio.</CardText>
					</CardService>
				</ContainerGrid>
			</ScrollAnimation>
		</>
	);
}
