import React, { useState, useContext } from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

//Contexto
import { SettingsContext } from "@/context/SettingsContext";

//Styled-components
import { TitleSection, ContainerTitleSection, TitleH3, BodyText } from "@/styles/ui";

//Ícones
import { Robot } from "@styled-icons/fa-solid/Robot";
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
import { Filter } from "@styled-icons/fa-solid/Filter";
import { Svelte } from "@styled-icons/simple-icons/Svelte";
import { GithubOutline } from "@styled-icons/evaicons-outline/GithubOutline";
import { Live } from "@styled-icons/fluentui-system-filled/Live";

//Custom components
import Tooltip from "@/components/Tooltip";

const ContainerGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	width: 60%;
	gap: 20px;
	transition: all 0.3s ease;
	grid-auto-rows: 1fr; /* Todas as linhas terão a mesma altura */
	align-items: stretch;

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
	min-height: 270px;
	background-color: ${(props) => props.theme.colors.backgroundSecondary};
	border-radius: 4px;
	padding: 20px;
	transition: all 0.3s ease;
	border: 1px solid ${(props) => props.theme.colors.backgroundPage};

	.created_at {
		color: ${(props) => props.theme.colors.inactiveTitle};
		font-size: 12px;
		position: absolute;
		bottom: 10px;
	}

	:hover {
		border: 1px solid ${(props) => props.theme.colors.branding};
		transform: scale(1.01);
		box-shadow: 0px 0px 40px 0px ${(props) => props.theme.colors.branding}5E;
		-webkit-box-shadow: 0px 0px 40px 0px ${(props) => props.theme.colors.branding}5E;
		-moz-box-shadow: 0px 0px 40px 0px ${(props) => props.theme.colors.branding}5E;
	}

	.title-body {
		margin-top: 50px;

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
			//border: 1px solid ${(props) => props.theme.colors.branding};
			color: ${(props) => props.theme.colors.inactiveTitle};
			font-size: 12px;
			font-weight: 800;
			padding: 2px 8px 2px 8px;
			border-radius: 4px;
			margin-right: 3px;
			margin-left: 3px;
		}

		@media (max-width: 601px) {
			margin-bottom: 10px;
			font-size: 10px;
		}
	}

	@media (max-width: 601px) {
		display: none;
	}
`;

const ChipTechOptions = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	margin-top: 20px;
	margin-bottom: 20px;
	//background-color: #ccc;
	width: 60%;

	svg {
		min-width: 28px;
		min-height: 28px;
		width: 28px;
		height: 28px;
		color: ${(props) => props.theme.colors.branding};
		margin-right: 10px;

		@media (max-width: 601px) {
			min-width: 18px;
			min-height: 18px;
			width: 18px;
			height: 18px;
		}
	}

	@media (max-width: 1600px) {
		width: 85%;
	}

	@media (max-width: 601px) {
		display: none;
	}
`;

const WrapperButtons = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	/* position: absolute;
	right: 10px;
	bottom: 10px; */
	transition: all 0.3s ease;

	a {
		//background-color: ${(props) => props.theme.colors.branding};
		display: flex;
		align-items: center;
		justify-content: center;
		text-decoration: none;
		padding: 5px;
		color: ${(props) => props.theme.colors.branding};
		//border: solid 1px ${(props) => props.theme.colors.branding};
		border-radius: 4px;
		//margin-left: 3px;
	}
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
	}

	@media (max-width: 601px) {
		font-weight: 700;
		font-size: 10px;
	}
`;

export const TitleSpan = styled.h3`
	z-index: 2;
	position: absolute;
	top: 0;
	left: 0;
	padding: 5px 15px 5px 10px;
	color: ${(props) => props.theme.colors.backgroundPage};
	background-color: ${(props) => props.theme.colors.branding};
	font-size: ${(props) => props.theme.fontSizes.md};
	border-radius: 2px 0 18px 0;

	@media (max-width: 900px) {
		font-size: ${(props) => props.theme.fontSizes.sm};
	}

	@media (max-width: 600px) {
		font-size: ${(props) => props.theme.fontSizes.xs};
	}
`;

const SectionPortifolio = styled.section`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	width: 100%;
	min-height: 100vh;
	padding-top: 60px;
`;

export default function Portifolio() {
	const { language } = useContext(SettingsContext);
	const [stack, setStack] = useState("TODOS");
	const [view, setView] = useState("grid");

	const projects = [
		{
			id: 1,
			title: language.portifolioPage.projects.id_1.title,
			description: language.portifolioPage.projects.id_1.description,
			liveDemoUrl: null,
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
			title: language.portifolioPage.projects.id_2.title,
			description: language.portifolioPage.projects.id_2.description,
			liveDemoUrl: null,
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
			title: language.portifolioPage.projects.id_3.title,
			description: language.portifolioPage.projects.id_3.description,
			liveDemoUrl: null,
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
			title: language.portifolioPage.projects.id_4.title,
			description: language.portifolioPage.projects.id_4.description,
			liveDemoUrl: null,
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
			title: language.portifolioPage.projects.id_5.title,
			description: language.portifolioPage.projects.id_5.description,
			liveDemoUrl: null,
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
			title: language.portifolioPage.projects.id_6.title,
			description: language.portifolioPage.projects.id_6.description,
			liveDemoUrl: null,
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
			title: language.portifolioPage.projects.id_7.title,
			description: language.portifolioPage.projects.id_7.description,
			liveDemoUrl: null,
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
			title: language.portifolioPage.projects.id_8.title,
			description: language.portifolioPage.projects.id_8.description,
			liveDemoUrl: null,
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
			title: language.portifolioPage.projects.id_9.title,
			description: language.portifolioPage.projects.id_9.description,
			liveDemoUrl: null,
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
			title: language.portifolioPage.projects.id_10.title,
			description: language.portifolioPage.projects.id_10.description,
			liveDemoUrl: null,
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
			title: language.portifolioPage.projects.id_11.title,
			description: language.portifolioPage.projects.id_11.description,
			liveDemoUrl: "https://glaysonvisgueira.vercel.app/",
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
			title: language.portifolioPage.projects.id_12.title,
			description: language.portifolioPage.projects.id_12.description,
			liveDemoUrl: null,
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
			title: language.portifolioPage.projects.id_13.title,
			description: language.portifolioPage.projects.id_13.description,
			liveDemoUrl: null,
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
			title: language.portifolioPage.projects.id_14.title,
			description: language.portifolioPage.projects.id_14.description,
			liveDemoUrl: null,
			techs: [
				<Tooltip toolTipText="Flutter">
					<Flutter />
				</Tooltip>,
			],
			sourceCodeLink: "https://github.com/Glaysonvisgueira/controlmobile-dashboard-api",
			typeProject: ["MOBILE"],
			created_at: "13/08/2022",
		},
		{
			id: 15,
			title: language.portifolioPage.projects.id_15.title,
			description: language.portifolioPage.projects.id_15.description,
			liveDemoUrl: null,
			techs: [
				<Tooltip toolTipText="Svelte">
					<Svelte />
				</Tooltip>,
				<Tooltip toolTipText="Typescript">
					<Typescript />
				</Tooltip>,
				<Tooltip toolTipText="Html">
					<Html5 />
				</Tooltip>,
			],
			sourceCodeLink: "https://github.com/Glaysonvisgueira/svelte-calculadora",
			typeProject: ["WEB"],
			created_at: "28/01/2023",
		},
		{
			id: 16,
			title: language.portifolioPage.projects.id_16.title,
			description: language.portifolioPage.projects.id_16.description,
			liveDemoUrl: "https://layout-mui-boilerplate.vercel.app/dashboards",
			techs: [
				<Tooltip toolTipText="React.JS">
					<ReactLogo />
				</Tooltip>,
				<Tooltip toolTipText="Next.JS">
					<Nextdotjs />
				</Tooltip>,
			],
			sourceCodeLink: "https://github.com/Glaysonvisgueira/svelte-calculadora",
			typeProject: ["WEB"],
			created_at: "28/01/2023",
		},
		{
			id: 17,
			title: language.portifolioPage.projects.id_17.title,
			description: language.portifolioPage.projects.id_17.description,
			liveDemoUrl: null,
			techs: [
				<Tooltip toolTipText="React Native">
					<ReactLogo />
				</Tooltip>,
			],
			sourceCodeLink: "https://github.com/Glaysonvisgueira/rnmaps",
			typeProject: ["MOBILE"],
			created_at: "27/03/2023",
		},
		{
			id: 18,
			title: language.portifolioPage.projects.id_18.title,
			description: language.portifolioPage.projects.id_18.description,
			liveDemoUrl: null,
			techs: [
				<Tooltip toolTipText="React Native">
					<ReactLogo />
				</Tooltip>,
			],
			sourceCodeLink: "https://github.com/Glaysonvisgueira/rn-ecommerce-ui",
			typeProject: ["MOBILE"],
			created_at: "10/04/2023",
		},
		{
			id: 19,
			title: language.portifolioPage.projects.id_19.title,
			description: language.portifolioPage.projects.id_19.description,
			liveDemoUrl: null,
			techs: [
				<Tooltip toolTipText="Firebase">
					<Firebase />
				</Tooltip>,
				<Tooltip toolTipText="Javascript">
					<Javascript />
				</Tooltip>,
				<Tooltip toolTipText="NodeJS">
					<Nodejs />
				</Tooltip>,
			],
			sourceCodeLink: "https://github.com/Glaysonvisgueira/firebase-nodejs-api",
			typeProject: ["BACKEND"],
			created_at: "27/03/2023",
		},
	];

	function handleFilter(id) {
		setStack(id);
	}

	const array_projects = stack == "TODOS" ? projects : projects.filter((item) => item.typeProject.includes(stack));

	return (
		<SectionPortifolio id="section-portifolio">
			<ContainerTitleSection>
				<TitleSection>{language.portifolioPage.title}</TitleSection>
			</ContainerTitleSection>

			<ChipTechOptions>
				<Filter className="svg" />
				<Chip
					id="TODOS"
					onClick={(event) => {
						handleFilter(event.target.id);
					}}
					active={stack.includes("TODOS") ? true : false}>
					{language.portifolioPage.labelFilter}
				</Chip>

				<Chip
					id="BACKEND"
					onClick={(event) => {
						handleFilter(event.target.id);
					}}
					active={stack.includes("BACKEND") ? true : false}>
					BACKEND
				</Chip>
				<Chip
					id="WEB"
					onClick={(event) => {
						handleFilter(event.target.id);
					}}
					active={stack.includes("WEB") ? true : false}>
					WEB
				</Chip>
				<Chip
					id="MOBILE"
					onClick={(event) => {
						handleFilter(event.target.id);
					}}
					active={stack.includes("MOBILE") ? true : false}>
					MOBILE
				</Chip>
			</ChipTechOptions>

			<ContainerGrid view={view}>
				{array_projects.map((project, index) => (
					<ScrollAnimation animateIn="fadeIn" animateOnce key={index}>
						<WrapperProjectCard>
							<WrapperTextChip>
								{project.typeProject.map((chip, idx) => (
									<div key={idx}>
										<span>{chip}</span>
									</div>
								))}
							</WrapperTextChip>

							<TitleSpan>{project.title}</TitleSpan>

							<div className="title-body">
								<BodyText>{project.description}</BodyText>
							</div>
							<WrapperTechStack>
								<div>
									{project.techs.map((icone, i) => (
										<div key={i}>{icone}</div>
									))}
								</div>

								<WrapperButtons>
									{project.liveDemoUrl != null && (
										<a href={project.liveDemoUrl} target="_blank" rel="noreferrer">
											<Live />
										</a>
									)}

									<a href={project.sourceCodeLink} target="_blank" rel="noreferrer">
										<GithubOutline />
									</a>
								</WrapperButtons>
							</WrapperTechStack>

							<span className="created_at">
								{language.portifolioPage.createdLabel}: {project.created_at}
							</span>
						</WrapperProjectCard>
					</ScrollAnimation>
				))}
			</ContainerGrid>
		</SectionPortifolio>
	);
}
