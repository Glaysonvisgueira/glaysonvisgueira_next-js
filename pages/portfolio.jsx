import React, { useState } from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

//Styled-components
import { TitleSection, ContainerTitleSection, TitleH3, BodyText } from "@/styles/ui";

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
import { Flutter } from "@styled-icons/boxicons-logos/Flutter";

//Custom components
import Tooltip from "@/components/Tooltip";

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
	min-height: 270px;
	background-color: ${(props) => props.theme.colors.backgroundSecondary};
	border: 1px solid ${(props) => props.theme.colors.backgroundSecondary};
	border-radius: 4px;
	padding: 20px;
	transition: all 0.3s ease;

	.created_at {
		color: ${(props) => props.theme.colors.inactiveTitle};
		font-size: 12px;
		position: absolute;
		bottom: 10px;
	}

	:hover {
		/* 		
		//transform: translateY(-5px);
		//box-shadow: 0px 0px 20px 0px ${(props) => props.theme.colors.branding}5E;
		 */
		border-radius: 0px;
		border: 1px solid ${(props) => props.theme.colors.branding};
		box-shadow: 1px 1px ${(props) => props.theme.colors.branding}, 2px 2px ${(props) => props.theme.colors.branding}, 3px 3px ${(props) => props.theme.colors.branding}, 4px 4px ${(props) => props.theme.colors.branding},
			5px 5px ${(props) => props.theme.colors.branding};
		-webkit-transform: translateX(-5px);
		transform: translateX(-5px);
	}

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
	margin-bottom: 10px;

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
		color: ${(props) => props.theme.colors.inactiveTitle};
		transition: all 0.3s ease;
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
			border: 1px solid ${(props) => props.theme.colors.branding};
			color: ${(props) => props.theme.colors.branding};
			font-size: 12px;
			font-weight: 800;
			padding: 2px 8px 2px 8px;
			border-radius: 4px;
			margin-right: 3px;
			margin-left: 3px;
		}
	}
`;

const projects = [
	{
		id: 1,
		title: "SISTEMA DE IRRIGAÇÃO AUTOMÁTICO",
		description:
			"Implementação de um algoritmo de inteligência artificial, conhecido como algoritmo nebuloso (ou lógica difusa) que utiliza a biblioteca jFuzzyLogic. Nessa implementação, há uso da inteligência artificial para que dependendo da situação atual de três aspectos, que são: temperatura, luminosidade e umidade, haja ativação automática de um sistema de irrigação de culturas agrícolas.",
		techs: [
			<Tooltip toolTipText="Java">
				<Java />
			</Tooltip>,
			<Tooltip toolTipText="SEO">
				<Robot />
			</Tooltip>,
		],
		sourceCodeLink: "https://github.com/Glaysonvisgueira/jfuzzylogic_irrigador",
		typeProject: ["BACKEND"],
		created_at: "09/06/2019",
	},
	{
		id: 2,
		title: "DEVRADAR",
		description: "Aplicativo resultante da semana Omnistack #10 da Rocketseat. A aplicação visa conectar desenvolvedores próximos de sua localização atual e que trabalham com as mesmas tecnologias.",
		techs: [
			<Tooltip toolTipText="ReactJS">
				<ReactLogo />
			</Tooltip>,
			<Tooltip toolTipText="Expo">
				<Expo />
			</Tooltip>,
			<Tooltip toolTipText="Javascript">
				<Javascript />
			</Tooltip>,
			<Tooltip toolTipText="NodeJS">
				<Nodejs />
			</Tooltip>,
			<Tooltip toolTipText="CSS">
				<Css3 />
			</Tooltip>,
			<Tooltip toolTipText="MongoDB">
				<Mongodb />
			</Tooltip>,
		],
		sourceCodeLink: "https://github.com/Glaysonvisgueira/DevRadar",
		typeProject: ["BACKEND", "WEB", "MOBILE"],
		created_at: "02/02/2020",
	},
	{
		id: 3,
		title: "BE THE HERO",
		description: "Aplicativo resultante da semana Omnistack #11 da Rocketseat. A aplicação é um meio de conectar pessoas à ONGS que necessitam de algum tipo de ajuda.",
		techs: [
			<Tooltip toolTipText="ReactJS">
				<ReactLogo />
			</Tooltip>,
			<Tooltip toolTipText="Expo">
				<Expo />
			</Tooltip>,
			<Tooltip toolTipText="Javascript">
				<Javascript />
			</Tooltip>,
			<Tooltip toolTipText="NodeJS">
				<Nodejs />
			</Tooltip>,
			<Tooltip toolTipText="CSS">
				<Css3 />
			</Tooltip>,
			<Tooltip toolTipText="MongoDB">
				<Mongodb />
			</Tooltip>,
			<Tooltip toolTipText="Jest">
				<Jest />
			</Tooltip>,
			<Tooltip toolTipText="SqLite">
				<Sqlite />
			</Tooltip>,
		],
		sourceCodeLink: "https://github.com/Glaysonvisgueira/be-the-hero",
		typeProject: ["BACKEND", "WEB", "MOBILE"],
		created_at: "26/04/2020",
	},
	{
		id: 4,
		title: "INTEGRA API WRAPPER",
		description: "Servidor Node.js para utilização da API Inthegra fornecida pela STRANS de Teresina - PI.",
		techs: [
			<Tooltip toolTipText="NodeJS">
				<Nodejs />
			</Tooltip>,
			<Tooltip toolTipText="Javascript">
				<Javascript />
			</Tooltip>,
		],
		sourceCodeLink: "https://github.com/Glaysonvisgueira/inthegra-nodejs",
		typeProject: ["BACKEND"],
		created_at: "04/04/2020",
	},
	{
		id: 5,
		title: "LETMEASK",
		description:
			"Aplicativo resultante da Next Level Week #06 da Rocketseat. A aplicação fornece um ambiente onde o usuário pode logar utilizando sua conta Google e criar salas sobre assuntos de seu interesse para que outros usuários criem perguntas.",
		techs: [
			<Tooltip toolTipText="ReactJs">
				<ReactLogo />
			</Tooltip>,
			<Tooltip toolTipText="Javascript">
				<Javascript />
			</Tooltip>,
			<Tooltip toolTipText="Google Cloud">
				<GoogleCloud />
			</Tooltip>,
			<Tooltip toolTipText="Sass">
				<Sass />
			</Tooltip>,
			<Tooltip toolTipText="Firebase">
				<Firebase />
			</Tooltip>,
		],
		sourceCodeLink: "https://github.com/Glaysonvisgueira/letmeask-NLW06",
		typeProject: ["WEB", "MOBILE"],
		created_at: "24/06/2021",
	},
	{
		id: 6,
		title: "PLANTMANAGER",
		description:
			"Aplicativo resultante da Next Level Week #05 da Rocketseat. A aplicação fornece um agendador de irrigação para suas plantas, dando dicas sobre  cada espécie, assim como os melhores horários de irrigação. O aplicativo exibe uma notificação em push sempre que estiver no horário de irrigar sua planta.",
		techs: [
			<Tooltip toolTipText="ReactJS">
				<ReactLogo />
			</Tooltip>,
			<Tooltip toolTipText="Typescript">
				<Typescript />
			</Tooltip>,
			<Tooltip toolTipText="SqLite">
				<Sqlite />
			</Tooltip>,
		],
		sourceCodeLink: "https://github.com/Glaysonvisgueira/plantmanager",
		typeProject: ["MOBILE"],
		created_at: "19/04/2021",
	},
	{
		id: 7,
		title: "SISTEMA DE PESQUISAS NPS",
		description: "Aplicativo resultante da Next Level Week #04 da Rocketseat. A aplicação permite calcular o NPS (Net Promoter Score) da empresa, através de pesquisas de satisfação enviadas a usuários por e-mail.",
		techs: [
			<Tooltip toolTipText="NodeJS">
				<Nodejs />
			</Tooltip>,
			<Tooltip toolTipText="Typescript">
				<Typescript />
			</Tooltip>,
			<Tooltip toolTipText="SqLite">
				<Sqlite />
			</Tooltip>,
			<Tooltip toolTipText="Jest">
				<Jest />
			</Tooltip>,
		],
		sourceCodeLink: "https://github.com/Glaysonvisgueira/next-level-week-04-nodejs",
		typeProject: ["BACKEND"],
		created_at: "23/02/2021",
	},
	{
		id: 8,
		title: "FASTTRACK API",
		description: "Backend de um servidor em Node.js que fornece uma API REST que permite o compartilhamento de geolocalização do smartphone para um banco de dados em nuvem mantido pelo MongoDB.",
		techs: [
			<Tooltip toolTipText="NodeJS">
				<Nodejs />
			</Tooltip>,
			<Tooltip toolTipText="Javascript">
				<Javascript />
			</Tooltip>,
			<Tooltip toolTipText="MongoDB">
				<Mongodb />
			</Tooltip>,
			<Tooltip toolTipText="AWS">
				<Amazonaws />
			</Tooltip>,
		],
		sourceCodeLink: "https://github.com/Glaysonvisgueira/api-fasttrack",
		typeProject: ["BACKEND"],
		created_at: "27/11/2020",
	},
	{
		id: 9,
		title: "INTHEGRE-SE APP",
		description:
			"Aplicativo que monitora a frota de ônibus público da cidade de Teresina - PI, e exibe em um mapa a localização atual de cada ônibus em atividade no momento, com intervalos de 30 segundos entre cada atualização de posição.",
		techs: [
			<Tooltip toolTipText="ReactJS">
				<ReactLogo />
			</Tooltip>,
			<Tooltip toolTipText="Expo">
				<Expo />
			</Tooltip>,
			<Tooltip toolTipText="Javascript">
				<Javascript />
			</Tooltip>,
		],
		sourceCodeLink: "https://github.com/Glaysonvisgueira/inthegre-se",
		typeProject: ["MOBILE", "BACKEND"],
		created_at: "05/05/2020",
	},
	{
		id: 10,
		title: "CRAWLER DAS POSIÇÃO DE RADARES",
		description:
			"Estudo da biblioteca BeautifulSoup que utilizada com a linguagem de programação Python, possibilita coletar dados de websites. Este algoritmo busca no site da prefeitura da cidade de Teresina - PI e fornece o link de download da posição atual dos radares de velocidade na cidade.",
		techs: [
			<Tooltip toolTipText="Python">
				<Python />
			</Tooltip>,
		],
		sourceCodeLink: "https://github.com/Glaysonvisgueira/crawlerRadaresVelocidade",
		typeProject: ["BACKEND"],
		created_at: "16/06/2019",
	},
	{
		id: 11,
		title: "PÁGINA PORTIFÓLIO",
		description: "Página portifólio pessoal, contruída utilizando React.js, Next.js, Styled Components e hospedado na plataforma da Vercel.",
		techs: [
			<Tooltip toolTipText="ReactJS">
				<ReactLogo />
			</Tooltip>,
			<Tooltip toolTipText="NextJS">
				<Nextdotjs />
			</Tooltip>,
			<Tooltip toolTipText="Styled Components">
				<Styledcomponents />
			</Tooltip>,
			<Tooltip toolTipText="Vercel">
				<LogoVercel />
			</Tooltip>,
		],
		sourceCodeLink: "https://github.com/Glaysonvisgueira/glaysonvisgueira_next-js",
		typeProject: ["WEB"],
		created_at: "10/06/2022",
	},
	{
		id: 12,
		title: "AGREGADOR DE INFORMAÇÕES LOGÍSTICAS",
		description: "Sistema para agregar as informações lógisticas internas da empresa.",
		techs: [
			<Tooltip toolTipText="ReactJS">
				<ReactLogo />
			</Tooltip>,
			<Tooltip toolTipText="Leaflet">
				<Leaflet />
			</Tooltip>,
		],
		sourceCodeLink: "https://github.com/Glaysonvisgueira/dashboard-control-mobile-implantacao",
		typeProject: ["WEB", "BACKEND"],
		created_at: "29/06/2021",
	},
	{
		id: 13,
		title: "API AGREGADOR DE INFORMAÇÕES LOGÍSTICAS",
		description: "API escrita em Javascript/Node.js e hospedada em um servidor EC2 na AWS para prover as informações logísticas internas da empresa.",
		techs: [
			<Tooltip toolTipText="NodeJS">
				<Nodejs />
			</Tooltip>,
			<Tooltip toolTipText="AWS">
				<Amazonaws />
			</Tooltip>,
			<Tooltip toolTipText="Express">
				<Express />
			</Tooltip>,
			<Tooltip toolTipText="MongoDB">
				<Mongodb />
			</Tooltip>,
		],
		sourceCodeLink: "https://github.com/Glaysonvisgueira/controlmobile-dashboard-api",
		typeProject: ["BACKEND"],
		created_at: "02/07/2021",
	},
	{
		id: 14,
		title: "BYTEBANK",
		description:
			"Aplicativo resultante da trilha Flutter da Alura. Utilizando o Flutter para gerar o aplicativo multiplataforma, esta aplicação serve para cadastrar números de conta e seus respectivos valores para serem gravados em estados dinâmicos para exibição no app. ",
		techs: [
			<Tooltip toolTipText="Flutter">
				<Flutter />
			</Tooltip>,
		],
		sourceCodeLink: "https://github.com/Glaysonvisgueira/controlmobile-dashboard-api",
		typeProject: ["MOBILE"],
		created_at: "13/08/2022",
	},
];

// Get all repos from user via API
//https://api.github.com/users/glaysonvisgueira/repos

const ChipTechOptions = styled.div`
	margin-top: 20px;
	margin-bottom: 20px;
`;

const Chip = styled.span`
	color: ${(props) => (props.active == true ? props.theme.colors.backgroundSecondary : props.theme.colors.inactiveTitle)};
	background-color: ${(props) => (props.active == true ? props.theme.colors.branding : props.theme.colors.backgroundSecondary)};
	border: 1px solid ${(props) => (props.active == true ? props.theme.colors.branding : props.theme.colors.inactiveTitle)};
	padding: 2px 7px 3px 7px;
	margin: 3px;
	border-radius: 4px;
	font-weight: 700;
	transition: all 0.3s ease;

	&:hover {
		cursor: pointer;
		border: 1px solid ${(props) => props.active == true && props.theme.colors.branding};
		color: ${(props) => (props.active == true ? props.theme.colors.branding : props.theme.colors.backgroundSecondary)};
		background-color: ${(props) => (props.active == true ? props.theme.colors.backgroundSecondary : props.theme.colors.branding)};
	}
`;

export default function Portifolio() {
	const [stack, setStack] = useState([]);

	function handleFilter(id) {
		if (stack.includes(id)) {
			stack.splice(stack.indexOf(id), 1);
			console.log(stack);
		} else {
			setStack((prev) => [...prev, id]);
		}
		console.log(stack);
	}
	console.log(stack);
	return (
		<>
			<ContainerTitleSection>
				<FolderBriefcase />
				<TitleSection>Portfólio</TitleSection>
			</ContainerTitleSection>
			{/*
			<ChipTechOptions>

			<Chip
					id="todos"
					onClick={(event) => {
						handleFilter(event.target.id);
					}}
					active={stack.includes("todos") ? true : false}>
					TODOS
				</Chip>

				<Chip
					id="backend"
					onClick={(event) => {
						handleFilter(event.target.id);
					}}
					active={stack.includes("backend") ? true : false}>
					BACKEND
				</Chip>
				<Chip
					id="web"
					onClick={(event) => {
						handleFilter(event.target.id);
					}}
					active={stack.includes("web") ? true : false}>
					WEB
				</Chip>
				<Chip
					id="mobile"
					onClick={(event) => {
						handleFilter(event.target.id);
					}}
					active={stack.includes("mobile") ? true : false}>
					MOBILE
				</Chip>
			</ChipTechOptions> */}

			<ContainerGrid>
				{projects.map((project, index) => (
					<ScrollAnimation animateIn="fadeIn" animateOnce key={index}>
						<WrapperProjectCard>
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

							<span className="created_at">Criado em: {project.created_at}</span>
						</WrapperProjectCard>
					</ScrollAnimation>
				))}
			</ContainerGrid>
		</>
	);
}
