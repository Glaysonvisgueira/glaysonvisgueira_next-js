import React from "react";
import styled from "styled-components";

//Styled-components
import { TitleSection, ContainerTitleSection, TitleH3, BodyText } from "@/styles/ui";

//Custom components
import DivGradient from "@/components/DivGradient";
import StackTechs from "@/components/StackTechs";

//Ícones
import { FolderBriefcase } from "@styled-icons/fluentui-system-filled/FolderBriefcase";
import { Robot } from "@styled-icons/fa-solid/Robot";
import { GithubOutline } from "@styled-icons/evaicons-outline/GithubOutline";
import { Java } from "@styled-icons/fa-brands/Java";
import { Amazonaws } from "@styled-icons/simple-icons/Amazonaws";
import { GoogleCloud } from "@styled-icons/boxicons-logos/GoogleCloud";
import { Firebase } from "@styled-icons/boxicons-logos/Firebase";
import { Mongodb } from "@styled-icons/simple-icons/Mongodb";
import { Sqlite } from "@styled-icons/simple-icons/Sqlite";
import { Javascript } from "@styled-icons/boxicons-logos/Javascript";
import { ReactLogo } from "@styled-icons/boxicons-logos/ReactLogo";
import { Nextdotjs } from "@styled-icons/simple-icons/Nextdotjs";
import { Python } from "@styled-icons/boxicons-logos/Python";
import { Nodejs } from "@styled-icons/boxicons-logos/Nodejs";
import { LogoVercel } from "@styled-icons/ionicons-solid/LogoVercel";
import { Styledcomponents } from "@styled-icons/simple-icons/Styledcomponents";
import { Css3 } from "@styled-icons/boxicons-logos/Css3";
import { Html5 } from "@styled-icons/boxicons-logos/Html5";
import { Amazons3 } from "@styled-icons/simple-icons/Amazons3";
import { Typescript } from "@styled-icons/simple-icons/Typescript";
import { Sass } from "@styled-icons/fa-brands/Sass";
import { Expo } from "@styled-icons/simple-icons/Expo";
import { Jest } from "@styled-icons/simple-icons/Jest";
import { Leaflet } from "@styled-icons/simple-icons/Leaflet";
import { Express } from "@styled-icons/simple-icons/Express";

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
	border-bottom: 2px solid ${(props) => props.theme.colors.branding};
	//border-radius: 8px;
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

	> div {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: row;
	}

	svg {
		width: 22px;
		height: 22px;
		margin-right: 3px;
		color: #727272;
	}

	a {
		svg {
			&:hover {
				cursor: pointer;
				color: ${(props) => props.theme.colors.branding};
			}
		}
	}
`;

const WrapperTextChip = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	position: absolute;
	top: 10px;
	right: 10px;

	div {
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
	}
`;

const projects = [
	{
		title: "SISTEMA DE IRRIGAÇÃO AUTOMÁTICO",
		description:
			"Implementação de um algoritmo de inteligência artificial, conhecido como algoritmo nebuloso (ou lógica difusa) que utiliza a biblioteca jFuzzyLogic. Nessa implementação, há uso da inteligência artificial para que dependendo da situação atual de três aspectos, que são: temperatura, luminosidade e umidade, haja ativação automática de um sistema de irrigação de culturas agrícolas.",
		techs: [<Java />, <Robot />],
		sourceCodeLink: "https://github.com/Glaysonvisgueira/jfuzzylogic_irrigador",
		typeProject: ["BACKEND"],
	},
	{
		title: "DEVRADAR",
		description: "Aplicativo resultante da semana Omnistack #10 da Rocketseat. A aplicação visa conectar desenvolvedores próximos de sua localização atual e que trabalham com as mesmas tecnologias.",
		techs: [<ReactLogo />, <Expo />, <Javascript />, <Nodejs />, <Css3 />, <Mongodb />],
		sourceCodeLink: "https://github.com/Glaysonvisgueira/DevRadar",
		typeProject: ["BACKEND", "WEB", "MOBILE"],
	},
	{
		title: "BE THE HERO",
		description: "Aplicativo resultante da semana Omnistack #11 da Rocketseat. A aplicação é um meio de conectar pessoas à ONGS que necessitam de algum tipo de ajuda.",
		techs: [<ReactLogo />, <Expo />, <Javascript />, <Nodejs />, <ss3 />, <Mongodb />, <Jest />, <Sqlite />],
		sourceCodeLink: "https://github.com/Glaysonvisgueira/be-the-hero",
		typeProject: ["BACKEND", "WEB", "MOBILE"],
	},
	{
		title: "INTEGRA API WRAPPER",
		description: "Servidor Node.js para utilização da API Inthegra fornecida pela STRANS de Teresina - PI.",
		techs: [<Nodejs />, <Javascript />],
		sourceCodeLink: "https://github.com/Glaysonvisgueira/inthegra-nodejs",
		typeProject: ["BACKEND"],
	},
	{
		title: "LETMEASK",
		description:
			"Aplicativo resultante da Next Level Week #06 da Rocketseat. A aplicação fornece um ambiente onde o usuário pode logar utilizando sua conta Google, e criar salas sobre assuntos de seu interesse para que outros usuários criem perguntas.",
		techs: [<ReactLogo />, <Javascript />, <GoogleCloud />, <Sass />, <Firebase />],
		sourceCodeLink: "https://github.com/Glaysonvisgueira/letmeask-NLW06",
		typeProject: ["WEB", "MOBILE"],
	},
	{
		title: "PLANTMANAGER",
		description:
			"Aplicativo resultante da Next Level Week #05 da Rocketseat. A aplicação fornece um agendador de irrigação para suas plantas, dando dicas sobre  cada espécie, assim como os melhores horários de irrigação. O aplicativo exibe uma notificação em push sempre que estiver no horário de irrigar sua planta.",
		techs: [<ReactLogo />, <Typescript />, <Sqlite />],
		sourceCodeLink: "https://github.com/Glaysonvisgueira/plantmanager",
		typeProject: ["MOBILE"],
	},
	{
		title: "SISTEMA DE PESQUISAS NPS",
		description: "Aplicativo resultante da Next Level Week #04 da Rocketseat. A aplicação permite calcular o NPS (Net Promoter Score) da empresa, através de pesquisas de satisfação enviadas a usuários por e-mail.",
		techs: [<Nodejs />, <Typescript />, <Sqlite />, <Jest />],
		sourceCodeLink: "https://github.com/Glaysonvisgueira/next-level-week-04-nodejs",
		typeProject: ["BACKEND"],
	},
	{
		title: "FASTTRACK API",
		description: "Backend de um servidor em Node.js que fornece uma API REST que permite o compartilhamento de geolocalização do smartphone para um banco de dados em nuvem mantido pelo MongoDB.",
		techs: [<Nodejs />, <Javascript />, <Mongodb />, <Amazonaws />],
		sourceCodeLink: "https://github.com/Glaysonvisgueira/api-fasttrack",
		typeProject: ["BACKEND"],
	},
	{
		title: "INTHEGRE-SE APP",
		description:
			"Aplicativo que monitora a frota de ônibus público da cidade de Teresina - PI, e exibe em um mapa a localização atual de cada ônibus em atividade no momento, com intervalos de 30 segundos entre cada atualização de posição.",
		techs: [<ReactLogo />, <Expo />, <Javascript />],
		sourceCodeLink: "https://github.com/Glaysonvisgueira/inthegre-se",
		typeProject: ["MOBILE"],
	},
	{
		title: "CRAWLER DAS POSIÇÃO DE RADARES",
		description:
			"Estudo da biblioteca BeautifulSoup que utilizada com a linguagem de programação Python, possibilita coletar dados de websites. Este algoritmo busca no site da prefeitura da cidade de Teresina - PI e fornece o link de download da posição atual dos radares de velocidade na cidade.",
		techs: [<Python />],
		sourceCodeLink: "https://github.com/Glaysonvisgueira/crawlerRadaresVelocidade",
		typeProject: ["BACKEND"],
	},
	{
		title: "PÁGINA PORTIFÓLIO",
		description: "Página portifólio.",
		techs: [<ReactLogo />, <Nextdotjs />, <Styledcomponents />, <LogoVercel />],
		sourceCodeLink: "https://github.com/Glaysonvisgueira/glaysonvisgueira_next-js",
		typeProject: ["WEB"],
	},
	{
		title: "AGREGADOR DE INFORMAÇÕES LOGÍSTICAS",
		description: "Sistema para agregar as informações lógisticas internas da empresa.",
		techs: [<ReactLogo />, <Leaflet />],
		sourceCodeLink: "https://github.com/Glaysonvisgueira/dashboard-control-mobile-implantacao",
		typeProject: ["WEB"],
	},
	{
		title: "API AGREGADOR DE INFORMAÇÕES LOGÍSTICAS",
		description: "API escrita em Node.js e hospedada em um servidor EC2 na AWS para prover as informações logísticas internas",
		techs: [<Nodejs />, <Amazonaws />, <Express />, <Mongodb />],
		sourceCodeLink: "https://github.com/Glaysonvisgueira/controlmobile-dashboard-api",
		typeProject: ["BACKEND"],
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
				{projects.map((project, index) => (
					<WrapperProjectCard key={index}>
						<WrapperTextChip>
							{project.typeProject.map((chip, idx) => (
								<div key={idx}>
									<span>{chip}</span>
								</div>
							))}
						</WrapperTextChip>

						<div className="title-body">
							<TitleH3>{project.title}</TitleH3>
							<div className="divider" />
							<BodyText>{project.description}</BodyText>
						</div>
						<WrapperTechStack>
							<div>
								{project.techs.map((icone, i) => (
									<div key={i}>{icone}</div>
								))}
							</div>
							<a href={project.sourceCodeLink} target="_blank" rel="noreferrer">
								<GithubOutline />
							</a>
						</WrapperTechStack>
					</WrapperProjectCard>
				))}
			</ContainerGrid>
			{/*<StackTechs />*/}
		</>
	);
}

/*
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
*/
