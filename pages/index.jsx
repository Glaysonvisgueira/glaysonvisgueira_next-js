import React from "react";
import styled from "styled-components";

//Custom components
import Head from "@/components/Head";
import SocialNetworkRowStack from "@/components/SocialNetworkRowStack";
import LandingAnimation from "@/components/LandingPageAnimation";
import Slide from "react-reveal/Slide";
import ProgressBar from "react-progressbar-on-scroll";
import { useTheme } from "styled-components";
import FooterPage from "@/components/FooterPage";

//Pages
import SobreMimPage from "../pages/sobre-mim";
import PortifolioPage from "../pages/portifolio";
import ExperienciaPage from "../pages/experiencia";
import ContatosPage from "../pages/contatos";
import ServicesOffer from "@/components/ServicesOffer";
import DivGradient from "@/components/DivGradient";
import ParallaxTransitionDiv from "@/components/ParallaxTransitionDiv";

const LandingPageContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	-webkit-animation-name: fadeIn;
	animation-name: fadeIn;
	-webkit-animation-duration: 1s;
	animation-duration: 1s;
	-webkit-animation-fill-mode: both;
	animation-fill-mode: both;

	@-webkit-keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	@media (max-width: 800px) {
		flex-direction: column;
	}
`;

const TitleLandingContainer = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	flex-direction: column;
	padding: 10px;
`;

const TitleLanding = styled.div`
	font-size: 60px;
	font-weight: 800;
	color: ${(props) => props.theme.colors.branding};
	//-webkit-text-stroke-width: 2px; /* largura da borda */
	//-webkit-text-stroke-color: ${(props) => props.theme.colors.branding}; /* cor da borda */
	//-webkit-text-fill-color: transparent;

	@media (max-width: 1400px) {
		font-size: 40px;
	}

	@media (max-width: 1200px) {
		font-size: 36px;
	}

	@media (max-width: 600px) {
		font-size: 26px;
		text-align: center;
		width: 100%;
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

	@media (max-width: 801px) {
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
	//min-height: 100vh;
`;

const SectionSobreMim = styled.section`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	padding-top: 60px;
	width: 100%;
	//min-height: 100vh;
`;

const SectionPortifolio = styled.section`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	padding-top: 60px;
	width: 100%;
	min-height: 100vh;
	//background: linear-gradient(to bottom, rgba(255, 0, 0, 0) 0%, ${(props) => props.theme.colors.branding} 100%);
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

const SectionContatos = styled.section`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	padding-top: 60px;
	width: 100%;
	min-height: 100vh;
`;

const ButtonSlideSaibaMais = styled.button`
	z-index: 1;
	position: relative;
	width: 200px;
	height: 34px;
	margin-top: 15px;
	margin-bottom: 15px;
	transition: all 0.3s ease;
	font-size: ${(props) => props.theme.fontSizes.lg};
	border: 2px solid ${(props) => props.theme.colors.branding};
	color: ${(props) => props.theme.colors.title};
	background-color: ${(props) => props.theme.colors.backgroundSecondary};

	&::before {
		content: "";
		z-index: -1;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: ${(props) => props.theme.colors.branding};
		transform-origin: center right;
		transform: scaleX(0);
		transition: transform 0.25s ease-in-out;
	}

	&:hover {
		cursor: pointer;
		color: ${(props) => props.theme.colors.background};
	}

	&:hover::before {
		transform-origin: center left;
		transform: scaleX(1);
	}

	@media (max-width: 601px) {
		width: 100%;
	}
`;

export default function HomePage(props) {
	const theme = useTheme();

	return (
		<>
			<ProgressBar color={theme.colors.branding} height={5} />
			<Head
				title="Port??lio online"
				metaDescription="Web portif??lio de projetos de programa????o do Dev Glayson Visgueira."
				keywords="Glayson Visgueira, Glayson, Visgueira, Programa????o, Portif??lio, Dev, Programador, Developer, Desenvolvedor"
			/>

			<SectionOne id="section-home">
				<LandingPageContainer>
					<TitleLandingContainer>
						<SubTitleLanding>Ol??, eu sou</SubTitleLanding>
						<TitleLanding>Glayson Visgueira</TitleLanding>
						<SubTitleLanding>
							Desenvolvedor <span>Front-End</span> e desenvolvo interfaces modernas e de alta qualidade, com foco em <span>performance</span>, <span>anima????es</span>, <span>responsividade</span> e constru??das com otimiza????o em{" "}
							<span>SEO</span>.
						</SubTitleLanding>
						<ButtonSlideSaibaMais>Saiba mais</ButtonSlideSaibaMais>
						<SocialNetworkRowStack />
					</TitleLandingContainer>
					<ContainerAnimation>
						<LandingAnimation />
					</ContainerAnimation>
				</LandingPageContainer>
			</SectionOne>

			<SectionServices id="section-services">
				<ServicesOffer />
			</SectionServices>

			<SectionSobreMim id="section-sobre-mim">
				<SobreMimPage />
			</SectionSobreMim>

			<SectionPortifolio id="section-portifolio">
				<PortifolioPage />
			</SectionPortifolio>

			<SectionExperiencia id="section-experiencia">
				<ExperienciaPage />
			</SectionExperiencia>

			<SectionContatos id="section-contatos">
				<ContatosPage />
			</SectionContatos>

			<FooterPage />
		</>
	);
}

/*
<TitleLanding>&lt;Glayson Visgueira /&gt;</TitleLanding>
*/
