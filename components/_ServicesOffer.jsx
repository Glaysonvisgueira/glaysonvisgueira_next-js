import React from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

//Styled icons
import { Robot } from "@styled-icons/fa-solid/Robot";
import { DesignServices } from "@styled-icons/material-rounded/DesignServices";
import { DesignIdeas } from "@styled-icons/fluentui-system-filled/DesignIdeas";
import { CodeBlock } from "@styled-icons/boxicons-regular/CodeBlock";

const CardService = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	width: 275px;
	//padding: 20px;
	//border-radius: 4px;
	//height: 340px;
	//background-color: ${(props) => props.theme.colors.backgroundSecondary};
	transition: all 0.3s ease;
	border: 3px solid transparent;
	//z-index: 1;

	svg {
		color: ${(props) => props.theme.colors.branding};
		width: 70px;
		height: 70px;
		margin-bottom: 10px;
	}

	h3 {
		color: ${(props) => props.theme.colors.branding};
		font-size: 20px;
		font-weight: 900;
		margin-top: 5px;
		margin-bottom: 20px;

		@media (max-width: 900px) {
			font-size: 18px;
		}
	}

	p {
		color: ${(props) => props.theme.colors.subtitle};
		font-size: 16px;
		font-weight: 400;
		text-align: center;

		@media (max-width: 900px) {
			font-size: 14px;
		}
	}

	@media (max-width: 425px) {
		width: 90%;
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

export default function _ServicesOffer() {
	return (
		<ScrollAnimation animateIn="fadeIn" animateOnce>
			<ContainerGrid>
				<CardService>
					<Robot />
					<h3>SEO</h3>
					<p>Através de técnicas de SEO, irei elevar a taxa de conversão do seu produto e aumentar sua visibilidade online de forma orgânica, ou seja, sem depender de anúncios para serem bem sucedidas.</p>
				</CardService>

				<CardService>
					<DesignIdeas />
					<h3>UX/UI</h3>
					<p>Criação de design web responsivo, focado em usabilidade para prover a melhor experiência de usuário para gerar leads para seu produto.</p>
				</CardService>

				<CardService>
					<DesignServices />
					<h3>BRANDING</h3>
					<p>Ajudo você a posicionar sua marca da forma correta, potencializando resultados positivos através das boas práticas do marketing digital.</p>
				</CardService>

				<CardService>
					<CodeBlock />
					<h3>DESENVOLVIMENTO</h3>
					<p>Desenvolvimento de sistemas 100% personalizados que vão automatizar a administração do seu negócio.</p>
				</CardService>
			</ContainerGrid>
		</ScrollAnimation>
	);
}
