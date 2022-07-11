import React from "react";
import styled from "styled-components";

//Styled-components
import { TitleSection, ContainerTitleSection, TitleH3, BodyText } from "@/styles/ui";

//Custom components
import DivGradient from "@/components/DivGradient";
import StackTechs from "@/components/StackTechs";

//Ícones
import { FolderBriefcase } from "@styled-icons/fluentui-system-filled/FolderBriefcase";
import { Java } from "@styled-icons/fa-brands/Java";
import { Robot } from "@styled-icons/fa-solid/Robot";
import { GithubOutline } from "@styled-icons/evaicons-outline/GithubOutline";

const TitlePage = styled.h1`
	color: ${(props) => props.theme.colors.branding};
	font-size: 50px;
	font-weight: 700;
`;

const ContainerGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	width: 60%;
	gap: 20px;
	transition: all 0.3s ease;

	@media (max-width: 1600px) {
		width: 85%;
	}

	@media (max-width: 900px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

const WrapperProjectCard = styled.div`
	position: relative;
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	flex-direction: column;
	width: 100%;
	min-height: 240px;
	background-color: ${(props) => props.theme.colors.backgroundSecondary};
	//border-radius: 8px;
	//border-left: 4px solid ${(props) => props.theme.colors.branding};
	//border-bottom: 4px solid ${(props) => props.theme.colors.branding};
	padding: 20px;
	//transition: all 0.3s ease;

	.title-body {
		margin-top: 20px;

		.divider {
			margin-bottom: 20px;
		}
	}
`;

const WrapperTechStack = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: row;
	height: 34px;
	width: 100%;

	svg {
		width: 22px;
		height: 22px;
		margin-right: 3px;
		color: #727272;
	}
`;

const WrapperTextChip = styled.span`
	position: absolute;
	top: 10px;
	right: 10px;

	span {
		background-color: ${(props) => props.theme.colors.branding};
		color: ${(props) => props.theme.colors.background};
		font-size: 12px;
		font-weight: 800;
		padding: 0 4px 0 4px;
		border-radius: 8px;
		margin-right: 3px;
		margin-left: 3px;
	}
`;

const projects = [
	{
		title: "",
		description: "",
		techs: [],
		sourceCodeLink: "",
		typeProject: [],
	},
];

export default function Portifolio() {
	return (
		<>
			<ContainerTitleSection>
				<FolderBriefcase />
				<TitleSection>Portifólio</TitleSection>
			</ContainerTitleSection>

			<ContainerGrid>
				<WrapperProjectCard>
					<WrapperTextChip>
						<span>BACKEND</span>
						<span>WEB</span>
						<span>MOBILE</span>
					</WrapperTextChip>
					<div className="title-body">
						<TitleH3>SISTEMA DE IRRIGAÇÃO AUTOMÁTICO</TitleH3>
						<div className="divider" />
						<BodyText>
							Implementação de um algoritmo de inteligência artificial, conhecido como algoritmo nebuloso (ou lógica difusa) que utiliza a biblioteca jFuzzyLogic. Nessa implementação, há uso da inteligência artificial para que
							dependendo da situação atual de três aspectos, que são: temperatura, luminosidade e umidade, haja ativação automática de um sistema de irrigação de culturas agrícolas.
						</BodyText>
					</div>
					<WrapperTechStack>
						<div>
							<Java />
							<Robot />
						</div>
						<GithubOutline />
					</WrapperTechStack>
				</WrapperProjectCard>
				<WrapperProjectCard />
				<WrapperProjectCard />
				<WrapperProjectCard />
				<WrapperProjectCard />
				<WrapperProjectCard />
				<WrapperProjectCard />
				<WrapperProjectCard />
			</ContainerGrid>
			{/*<StackTechs />*/}
		</>
	);
}

/*
<ContainerVideoBackground>
				<video autoPlay loop muted>
					<source src="videos/circuit.mp4" type="video/mp4" />
				</video>
			</ContainerVideoBackground>
*/
