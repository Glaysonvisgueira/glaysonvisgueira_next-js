/* eslint-disable react/jsx-key */
import React, { useState, useContext, useMemo, useEffect } from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

//Contexto
import { SettingsContext } from "@/context/SettingsContext";

//Ícones
import { Robot } from "@styled-icons/fa-solid/Robot";
import { Java } from "@styled-icons/fa-brands/Java";
// import { Amazonaws } from "@styled-icons/simple-icons/Amazonaws";
import { GoogleCloud } from "@styled-icons/boxicons-logos/GoogleCloud";
import { Firebase } from "@styled-icons/boxicons-logos/Firebase";
import { Mongodb } from "@styled-icons/simple-icons/Mongodb";
import { Sqlite } from "@styled-icons/simple-icons/Sqlite";
import { Javascript } from "@styled-icons/boxicons-logos/Javascript";
import { ReactLogo } from "@styled-icons/boxicons-logos/ReactLogo";
import { Nextdotjs } from "@styled-icons/simple-icons/Nextdotjs";
// import { Python } from "@styled-icons/boxicons-logos/Python";
import { Nodejs } from "@styled-icons/boxicons-logos/Nodejs";
import { LogoVercel } from "@styled-icons/ionicons-solid/LogoVercel";
import { Styledcomponents } from "@styled-icons/simple-icons/Styledcomponents";
import { Css3 } from "@styled-icons/boxicons-logos/Css3";
import { Html5 } from "@styled-icons/boxicons-logos/Html5";
import { Typescript } from "@styled-icons/simple-icons/Typescript";
import { Sass } from "@styled-icons/fa-brands/Sass";
import { Expo } from "@styled-icons/simple-icons/Expo";
import { Jest } from "@styled-icons/simple-icons/Jest";
// import { Leaflet } from "@styled-icons/simple-icons/Leaflet";
// import { Express } from "@styled-icons/simple-icons/Express";
// import { Flutter } from "@styled-icons/boxicons-logos/Flutter";
import { Filter } from "@styled-icons/fa-solid/Filter";
import { Svelte } from "@styled-icons/simple-icons/Svelte";

//Custom components
import Tooltip from "@/components/Tooltip";
import TitleSection from "@/components/TitleSection";
import CardProject from "@/components/CardProject";

const ContainerGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	width: 60%;
	gap: 20px;
	transition: all 0.3s ease;
	grid-auto-rows: 1fr; /* Todas as linhas terão a mesma altura */
	align-items: stretch;

	@media (max-width: 1600px) {
		width: 85%;
	}

	@media (max-width: 1400px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 900px) {
		grid-template-columns: repeat(1, 1fr);
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

	/* @media (max-width: 601px) {
		display: none;
	} */
`;

const Chip = styled.span`
	color: ${(props) => (props.active == true ? props.theme.colors.backgroundSecondary : props.theme.colors.inactiveTitle)};
	background-color: ${(props) => (props.active == true ? props.theme.colors.branding : props.theme.colors.backgroundSecondary)};
	border: 1px solid ${(props) => (props.active == true ? props.theme.colors.branding : props.theme.colors.inactiveTitle)};
	padding: 2px 7px 3px 7px;
	margin: 3px;
	border-radius: 224px;
	font-weight: 700;
	//transition: all 0.3s ease;

	&:hover {
		cursor: pointer;
		color: ${(props) => props.active == false && props.theme.colors.branding};
		border: 1px solid ${(props) => props.theme.colors.branding};
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

const Modal = styled.div`
	display: ${(props) => (props.show ? "flex" : "none")};
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	justify-content: center;
	align-items: center;
	z-index: 1000;
`;

const ModalContent = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	flex-direction: column;
	background: ${(props) => props.theme.colors.backgroundSecondary};
	padding: 30px;
	border-radius: 8px;
	width: 100%;
	max-height: 90%;
	overflow-y: auto;
	max-width: 900px;

	h2 {
		color: ${(props) => props.theme.colors.title};
	}

	p {
		margin: 20px 0;
		text-align: left;
		color: ${(props) => props.theme.colors.body};
	}

	@media (max-width: 600px) {
		width: 90%;
	}
`;

const CloseButton = styled.button`
	background: ${(props) => props.theme.colors.branding};
	color: ${(props) => props.theme.colors.backgroundPage};
	border: none;
	padding: 10px 15px;
	border-radius: 4px;
	cursor: pointer;
	font-size: ${(props) => props.theme.fontSizes.md};
	margin-top: 30px;

	&:hover {
		background: ${(props) => props.theme.colors.brandingHover};
	}
`;

export default function Portifolio() {
	const { language } = useContext(SettingsContext);
	const [stack, setStack] = useState("TODOS");
	const [view, setView] = useState("grid");
	const [showModal, setShowModal] = useState(false);
	const [selectedProject, setSelectedProject] = useState(null);

	useEffect(() => {
		const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

		if (showModal) {
			document.body.style.overflow = "hidden";
			document.documentElement.style.overflow = "hidden";
			document.body.style.paddingRight = `${scrollbarWidth}px`;
		} else {
			document.body.style.overflow = "auto";
			document.documentElement.style.overflow = "auto";
			document.body.style.paddingRight = "0px";
		}

		return () => {
			document.body.style.overflow = "auto";
			document.documentElement.style.overflow = "auto";
			document.body.style.paddingRight = "0px";
		};
	}, [showModal]);

	const handleCardClick = (project) => {
		setSelectedProject(project);
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
		setSelectedProject(null);
	};

	const projects = useMemo(
		() => [
			{
				id: 24,
				title: language.portifolioPage.projects.id_24.title,
				description: language.portifolioPage.projects.id_24.description,
				liveDemoUrl: null,
				imageSourcePath: null,
				techs: [
					<Tooltip toolTipText="React.JS">
						<ReactLogo />
					</Tooltip>,
					<Tooltip toolTipText="Javascript">
						<Javascript />
					</Tooltip>,
				],
				sourceCodeLink: null,
				typeProject: ["MOBILE"],
				created_at: "29/08/2024",
			},
			{
				id: 23,
				title: language.portifolioPage.projects.id_23.title,
				description: language.portifolioPage.projects.id_23.description,
				liveDemoUrl: "https://www.prodosdigital.com.br/",
				imageSourcePath: "/img/portfolio-projects/prodos-digital.png",
				techs: [
					<Tooltip toolTipText="React.JS">
						<ReactLogo />
					</Tooltip>,
					<Tooltip toolTipText="Next.JS">
						<Nextdotjs />
					</Tooltip>,
					<Tooltip toolTipText="Sass">
						<Sass />
					</Tooltip>,
					<Tooltip toolTipText="Javascript">
						<Javascript />
					</Tooltip>,
				],
				sourceCodeLink: null,
				typeProject: ["WEB"],
				created_at: "12/12/2024",
			},
			{
				id: 1,
				title: language.portifolioPage.projects.id_1.title,
				description: language.portifolioPage.projects.id_1.description,
				liveDemoUrl: null,
				imageSourcePath: null,
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
				imageSourcePath: "/img/portfolio-projects/devradar.png",
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
				imageSourcePath: "/img/portfolio-projects/be-the-hero.png",
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
			// {
			// 	id: 4,
			// 	title: language.portifolioPage.projects.id_4.title,
			// 	description: language.portifolioPage.projects.id_4.description,
			// 	liveDemoUrl: null,
			// 	imageSourcePath: null,
			// 	techs: [
			// 		<Tooltip toolTipText="NodeJS">
			// 			<Nodejs />
			// 		</Tooltip>,
			// 		<Tooltip toolTipText="Javascript">
			// 			<Javascript />
			// 		</Tooltip>,
			// 	],
			// 	sourceCodeLink: "https://github.com/Glaysonvisgueira/inthegra-nodejs",
			// 	typeProject: ["BACKEND"],
			// 	created_at: "04/04/2020",
			// },
			{
				id: 5,
				title: language.portifolioPage.projects.id_5.title,
				description: language.portifolioPage.projects.id_5.description,
				liveDemoUrl: null,
				imageSourcePath: "/img/portfolio-projects/letmeask.png",
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
				imageSourcePath: "/img/portfolio-projects/plantmanager.png",
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
			// {
			// 	id: 7,
			// 	title: language.portifolioPage.projects.id_7.title,
			// 	description: language.portifolioPage.projects.id_7.description,
			// 	liveDemoUrl: null,
			// 	imageSourcePath: null,
			// 	techs: [
			// 		<Tooltip toolTipText="NodeJS">
			// 			<Nodejs />
			// 		</Tooltip>,
			// 		<Tooltip toolTipText="Typescript">
			// 			<Typescript />
			// 		</Tooltip>,
			// 		<Tooltip toolTipText="SqLite">
			// 			<Sqlite />
			// 		</Tooltip>,
			// 		<Tooltip toolTipText="Jest">
			// 			<Jest />
			// 		</Tooltip>,
			// 	],
			// 	sourceCodeLink: "https://github.com/Glaysonvisgueira/next-level-week-04-nodejs",
			// 	typeProject: ["BACKEND"],
			// 	created_at: "23/02/2021",
			// },
			// {
			// 	id: 8,
			// 	title: language.portifolioPage.projects.id_8.title,
			// 	description: language.portifolioPage.projects.id_8.description,
			// 	liveDemoUrl: null,
			// 	imageSourcePath: null,
			// 	techs: [
			// 		<Tooltip toolTipText="NodeJS">
			// 			<Nodejs />
			// 		</Tooltip>,
			// 		<Tooltip toolTipText="Javascript">
			// 			<Javascript />
			// 		</Tooltip>,
			// 		<Tooltip toolTipText="MongoDB">
			// 			<Mongodb />
			// 		</Tooltip>,
			// 		<Tooltip toolTipText="AWS">
			// 			<Amazonaws />
			// 		</Tooltip>,
			// 	],
			// 	sourceCodeLink: "https://github.com/Glaysonvisgueira/api-fasttrack",
			// 	typeProject: ["BACKEND"],
			// 	created_at: "27/11/2020",
			// },
			{
				id: 9,
				title: language.portifolioPage.projects.id_9.title,
				description: language.portifolioPage.projects.id_9.description,
				liveDemoUrl: null,
				imageSourcePath: null,
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
			// {
			// 	id: 10,
			// 	title: language.portifolioPage.projects.id_10.title,
			// 	description: language.portifolioPage.projects.id_10.description,
			// 	liveDemoUrl: null,
			// 	imageSourcePath: null,
			// 	techs: [
			// 		<Tooltip toolTipText="Python">
			// 			<Python />
			// 		</Tooltip>,
			// 	],
			// 	sourceCodeLink: "https://github.com/Glaysonvisgueira/crawlerRadaresVelocidade",
			// 	typeProject: ["BACKEND"],
			// 	created_at: "16/06/2019",
			// },
			{
				id: 11,
				title: language.portifolioPage.projects.id_11.title,
				description: language.portifolioPage.projects.id_11.description,
				liveDemoUrl: "https://glaysonvisgueira.vercel.app/",
				imageSourcePath: "/img/portfolio-projects/portfolio-page.png",
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
			// {
			// 	id: 12,
			// 	title: language.portifolioPage.projects.id_12.title,
			// 	description: language.portifolioPage.projects.id_12.description,
			// 	liveDemoUrl: null,
			// 	imageSourcePath: null,
			// 	techs: [
			// 		<Tooltip toolTipText="ReactJS">
			// 			<ReactLogo />
			// 		</Tooltip>,
			// 		<Tooltip toolTipText="Leaflet">
			// 			<Leaflet />
			// 		</Tooltip>,
			// 	],
			// 	sourceCodeLink: "https://github.com/Glaysonvisgueira/dashboard-control-mobile-implantacao",
			// 	typeProject: ["WEB", "BACKEND"],
			// 	created_at: "29/06/2021",
			// },
			// {
			// 	id: 13,
			// 	title: language.portifolioPage.projects.id_13.title,
			// 	description: language.portifolioPage.projects.id_13.description,
			// 	liveDemoUrl: null,
			// 	imageSourcePath: null,
			// 	techs: [
			// 		<Tooltip toolTipText="NodeJS">
			// 			<Nodejs />
			// 		</Tooltip>,
			// 		<Tooltip toolTipText="AWS">
			// 			<Amazonaws />
			// 		</Tooltip>,
			// 		<Tooltip toolTipText="Express">
			// 			<Express />
			// 		</Tooltip>,
			// 		<Tooltip toolTipText="MongoDB">
			// 			<Mongodb />
			// 		</Tooltip>,
			// 	],
			// 	sourceCodeLink: "https://github.com/Glaysonvisgueira/controlmobile-dashboard-api",
			// 	typeProject: ["BACKEND"],
			// 	created_at: "02/07/2021",
			// },
			// {
			// 	id: 14,
			// 	title: language.portifolioPage.projects.id_14.title,
			// 	description: language.portifolioPage.projects.id_14.description,
			// 	liveDemoUrl: null,
			// 	imageSourcePath: null,
			// 	techs: [
			// 		<Tooltip toolTipText="Flutter">
			// 			<Flutter />
			// 		</Tooltip>,
			// 	],
			// 	sourceCodeLink: "https://github.com/Glaysonvisgueira/controlmobile-dashboard-api",
			// 	typeProject: ["MOBILE"],
			// 	created_at: "13/08/2022",
			// },
			{
				id: 15,
				title: language.portifolioPage.projects.id_15.title,
				description: language.portifolioPage.projects.id_15.description,
				liveDemoUrl: "https://calculadora-svelte-liart.vercel.app/",
				imageSourcePath: "/img/portfolio-projects/svelt-calculadora.png",
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
				imageSourcePath: "/img/portfolio-projects/mui-v5-layout-dashboard.png",
				techs: [
					<Tooltip toolTipText="React.JS">
						<ReactLogo />
					</Tooltip>,
					<Tooltip toolTipText="Next.JS">
						<Nextdotjs />
					</Tooltip>,
				],
				sourceCodeLink: "https://github.com/Glaysonvisgueira/layout-mui-boilerplate",
				typeProject: ["WEB"],
				created_at: "28/01/2023",
			},
			{
				id: 17,
				title: language.portifolioPage.projects.id_17.title,
				description: language.portifolioPage.projects.id_17.description,
				liveDemoUrl: null,
				imageSourcePath: null,
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
				imageSourcePath: null,
				techs: [
					<Tooltip toolTipText="React Native">
						<ReactLogo />
					</Tooltip>,
				],
				sourceCodeLink: "https://github.com/Glaysonvisgueira/rn-ecommerce-ui",
				typeProject: ["MOBILE"],
				created_at: "10/04/2023",
			},
			// {
			// 	id: 19,
			// 	title: language.portifolioPage.projects.id_19.title,
			// 	description: language.portifolioPage.projects.id_19.description,
			// 	liveDemoUrl: null,
			// 	imageSourcePath: null,
			// 	techs: [
			// 		<Tooltip toolTipText="Firebase">
			// 			<Firebase />
			// 		</Tooltip>,
			// 		<Tooltip toolTipText="Javascript">
			// 			<Javascript />
			// 		</Tooltip>,
			// 		<Tooltip toolTipText="NodeJS">
			// 			<Nodejs />
			// 		</Tooltip>,
			// 	],
			// 	sourceCodeLink: "https://github.com/Glaysonvisgueira/firebase-nodejs-api",
			// 	typeProject: ["BACKEND"],
			// 	created_at: "27/03/2023",
			// },
			{
				id: 20,
				title: language.portifolioPage.projects.id_20.title,
				description: language.portifolioPage.projects.id_20.description,
				liveDemoUrl: "https://material-ui-v6-dashboards-test.vercel.app/",
				imageSourcePath: "/img/portfolio-projects/mui-v6-layout-dashboard.png",
				techs: [
					<Tooltip toolTipText="React">
						<ReactLogo />
					</Tooltip>,
					<Tooltip toolTipText="Javascript">
						<Javascript />
					</Tooltip>,
				],
				sourceCodeLink: "https://github.com/Glaysonvisgueira/material-ui-v6-dashboards-test",
				typeProject: ["FRONTEND"],
				created_at: "03/10/2024",
			},
			{
				id: 21,
				title: language.portifolioPage.projects.id_21.title,
				description: language.portifolioPage.projects.id_21.description,
				liveDemoUrl: "https://state-management-jotai-vs-zustand.vercel.app",
				imageSourcePath: "/img/portfolio-projects/state-management.png",
				techs: [
					<Tooltip toolTipText="React">
						<ReactLogo />
					</Tooltip>,
					<Tooltip toolTipText="Javascript">
						<Javascript />
					</Tooltip>,
				],
				sourceCodeLink: "https://github.com/Glaysonvisgueira/state-management-jotai-vs-zustand",
				typeProject: ["FRONTEND"],
				created_at: "25/07/2023",
			},

			{
				id: 22,
				title: language.portifolioPage.projects.id_22.title,
				description: language.portifolioPage.projects.id_22.description,
				liveDemoUrl: "https://www.cedulapromotora.com.br",
				imageSourcePath: "/img/portfolio-projects/landing-cedula-promotora.png",
				techs: [
					<Tooltip toolTipText="React">
						<ReactLogo />
					</Tooltip>,
					<Tooltip toolTipText="Javascript">
						<Javascript />
					</Tooltip>,
				],
				sourceCodeLink: null,
				typeProject: ["FRONTEND"],
				created_at: "01/09/2024",
			},
		],
		[]
	);

	function handleFilter(id) {
		setStack(id);
	}

	const array_projects = useMemo(() => {
		if (stack === "TODOS") {
			return projects;
		} else {
			return projects.filter((item) => item.typeProject.includes(stack));
		}
	}, [stack, projects]);

	return (
		<SectionPortifolio id="section-portifolio">
			<TitleSection title={language.portifolioPage.title} subtitle={language.portifolioPage.subtitle} hasMarginBottom />

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
				{array_projects?.map((project, index) => (
					<ScrollAnimation animateIn="fadeIn" animateOnce key={index}>
						<CardProject
							title={project.title}
							description={project.description}
							typeProject={project.typeProject}
							techs={project.techs}
							createdAt={project.created_at}
							liveDemoUrl={project.liveDemoUrl}
							imageSourcePath={project.imageSourcePath}
							sourceCodeLink={project.sourceCodeLink}
							handleModal={() => handleCardClick(project)}
						/>
					</ScrollAnimation>
				))}
			</ContainerGrid>

			<Modal show={showModal}>
				<ModalContent>
					<h2>{selectedProject?.title}</h2>
					<p>{selectedProject?.description}</p>
					<CloseButton onClick={handleCloseModal}>Fechar</CloseButton>
				</ModalContent>
			</Modal>
		</SectionPortifolio>
	);
}
