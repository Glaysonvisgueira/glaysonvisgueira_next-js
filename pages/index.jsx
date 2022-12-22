import React, { useContext } from "react";

//Third's librarys
import Link from "next/link";
import styled from "styled-components";
import Typed from "react-typed";
import { useTheme } from "styled-components";
import ProgressBar from "react-progressbar-on-scroll";

//Custom components
import Head from "@/components/Head";
import SocialNetworkRowStack from "@/components/SocialNetworkRowStack";
import LandingAnimation from "@/components/LandingPageAnimation";
import FooterPage from "@/components/FooterPage";
import ServicesOffer from "@/components/ServicesOffer";
import FloatNavigationBar from "@/components/FloatNavigationBar";
import ScrollDownAnimation from "@/components/ScrollDownAnimation";
// import ParallaxTransitionDiv from "@/components/ParallaxTransitionDiv";
//import CounterDescription from "@/components/CounterDescription";

//Pages
import SobreMimPage from "../pages/sobre-mim";
import PortfolioPage from "../pages/portfolio";
import ExperienciaPage from "../pages/experiencia";

//Contexto
import { SettingsContext } from "@/context/SettingsContext";

const LandingPageContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;

	@media (max-width: 930px) {
		flex-direction: column;
	}

	@media (max-width: 850px) {
		margin-bottom: 60px;
	}
`;

const TitleLandingContainer = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	flex-direction: column;
	padding: 10px;

	.grid-exp {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		transition: all 0.3s ease;
		gap: 20px;
		justify-items: center;
		//background-color: #ccc;
		width: 100%;
	}

	.type-string {
		font-size: 60px;
		font-weight: 800;
		color: ${(props) => props.theme.colors.branding};

		@media (max-width: 1400px) {
			font-size: 40px;
		}

		@media (max-width: 1200px) {
			font-size: 36px;
		}

		@media (max-width: 601px) {
			font-size: 26px;
			text-align: center;
			width: 100%;
		}
	}

	@media (max-width: 601px) {
		align-items: center;
	}
`;

const SubTitleLanding = styled.div`
	font-weight: 400;
	color: ${(props) => props.theme.colors.body};
	text-align: left;
	margin-top: 10px;
	margin-bottom: 10px;
	width: 100%;

	span {
		font-weight: 800;
		color: ${(props) => props.theme.colors.branding};
	}

	@media (max-width: 1980px) {
		font-size: ${(props) => props.theme.fontSizes.lg};
	}

	@media (max-width: 1200px) {
		font-size: ${(props) => props.theme.fontSizes.md};
	}

	@media (max-width: 900px) {
		font-size: ${(props) => props.theme.fontSizes.md};
	}

	@media (max-width: 600px) {
		text-align: center;
	}
`;

const ContainerAnimation = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;

	@media (max-width: 930px) {
		order: -1;
	}
`;

const SectionOne = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 80%;
	min-height: 100vh;
`;

const SectionServices = styled.section`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	width: 100%;
	padding-top: 60px;
`;

const SectionSobreMim = styled.section`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	padding-top: 60px;
	width: 100%;
`;

const SectionPortifolio = styled.section`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	padding-top: 60px;
	width: 100%;
	min-height: 100vh;
`;

const SectionExperiencia = styled.section`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	padding-top: 60px;
	width: 100%;
	min-height: 100vh;
`;

const ButtonSaibaMais = styled.button`
	z-index: 1;
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
		width: 70%;
	}

	@media (max-width: 425px) {
		width: 100%;
	}
`;

export default function HomePage(props) {
	const theme = useTheme();
	const { language } = useContext(SettingsContext);

	return (
		<>
			<FloatNavigationBar />
			<ProgressBar color={theme.colors.branding} height={5} />
			<Head
				title="Portfólio de projetos de programação"
				metaDescription="Web portifólio de projetos de programação do Dev Glayson Visgueira."
				keywords="Glayson Visgueira, Glayson, Visgueira, Programação, Portifólio, Dev, Programador, Developer, Desenvolvedor"
			/>

			<SectionOne id="section-home">
				<LandingPageContainer>
					<TitleLandingContainer>
						<SubTitleLanding>{language.landingPage.apresentationText}</SubTitleLanding>
						<Typed strings={["Glayson Visgueira"]} typeSpeed={80} className="type-string " />
						<SubTitleLanding>
							{language.landingPage.resumeText}
							{/*Desenvolvedor <span>Front-End</span> e desenvolvo interfaces modernas e de alta qualidade, com foco em <span>performance</span>, <span>animações</span>, <span>responsividade</span> e construídas com otimização em{" "}
							<span>SEO</span>.*/}
						</SubTitleLanding>
						<Link href="#section-sobre-mim" passHref>
							<ButtonSaibaMais>{language.landingPage.buttonText}</ButtonSaibaMais>
						</Link>
						<SocialNetworkRowStack />
					</TitleLandingContainer>
					<ContainerAnimation>
						<LandingAnimation />
					</ContainerAnimation>
				</LandingPageContainer>
				<ScrollDownAnimation />
			</SectionOne>

			<SectionServices id="section-services">
				<ServicesOffer />
			</SectionServices>

			<SectionSobreMim id="section-sobre-mim">
				<SobreMimPage />
			</SectionSobreMim>

			<SectionPortifolio id="section-portifolio">
				<PortfolioPage />
			</SectionPortifolio>

			<SectionExperiencia id="section-experiencia">
				<ExperienciaPage />
			</SectionExperiencia>

			<FooterPage />
		</>
	);
}
