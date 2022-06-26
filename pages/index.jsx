import React from "react";
import styled from "styled-components";
//Custom components
import Head from "@/components/Head";
import SocialNetworkRowStack from "@/components/SocialNetworkRowStack";
import LandingAnimation from "@/components/LandingPageAnimation";
import Slide from "react-reveal/Slide";
import ProgressBar from "react-progressbar-on-scroll";
import { useTheme } from "styled-components";

//Pages
import SobreMimPage from "../pages/sobre-mim";
import PortifolioPage from "../pages/portifolio";
import ExperienciaPage from "../pages/experiencia";
import ContatosPage from "../pages/contatos";

const LandingPageContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;

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
	//background: #ccc;

	@media (max-width: 600px) {
		flex: 0.5;
	}
`;

const TitleLanding = styled.div`
	font-size: 50px;
	font-weight: 800;
	color: ${(props) => props.theme.colors.branding};

	@media (max-width: 1400px) {
		font-size: 40px;
	}

	@media (max-width: 1200px) {
		font-size: 36px;
	}

	@media (max-width: 600px) {
		font-size: 26px;
	}
`;

const SubTitleLanding = styled.div`
	font-weight: 400;
	color: ${(props) => props.theme.colors.body};
	text-align: left;
	margin-top: 20px;
	margin-bottom: 20px;

	@media (max-width: 1980px) {
		font-size: ${(props) => props.theme.fontSizes.lg};
	}

	@media (max-width: 1200px) {
		font-size: ${(props) => props.theme.fontSizes.md};
	}

	@media (max-width: 900px) {
		font-size: ${(props) => props.theme.fontSizes.md};
	}
`;

const HrBorder = styled.div`
	width: 100%;
	border-top: 2px solid ${(props) => props.theme.colors.subtitle};
	margin-top: 15px;
	margin-bottom: 15px;
`;

const SectionOne = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	min-height: 100vh;
`;

const SectionSobreMim = styled.section`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	padding-top: 120px;
	width: 100%;
	//min-height: 100vh;
`;

const SectionPortifolio = styled.section`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	padding-top: 120px;
	width: 100%;
	min-height: 100vh;
	//background: linear-gradient(to bottom, rgba(255, 0, 0, 0) 0%, rgba(255, 0, 0, 0.65) 100%);
`;

const ImageOverlay = styled.div`
	background-image: url("img/bg.jpg");
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	filter: blur(2px) opacity(0.4);
	-webkit-filter: blur(3px) opacity(0.2);
	width: 100%;
	min-height: 100vh;
`;

const SectionExperiencia = styled.section`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	padding-top: 120px;
	width: 100%;
	min-height: 100vh;
	//padding: 100px;
	//background-color: #ccc;
`;

const SectionContatos = styled.section`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	padding-top: 120px;
	width: 100%;
	min-height: 100vh;
`;

const ButtonSaibaMais = styled.button`
	width: 200px;
	height: 34px;
	background-color: ${(props) => props.theme.colors.branding};
	color: ${(props) => props.theme.colors.backgroundSecondary};
	border-radius: 4px;
	margin-top: 15px;
	margin-bottom: 15px;
	border: none;
	font-size: ${(props) => props.theme.fontSizes.lg};

	&:hover {
		cursor: pointer;
		opacity: 0.8;
	}

	&:active {
		opacity: 0.5;
	}
`;

const ButtonSaibaMaisSlide = styled.button`
	width: 200px;
	border-radius: 4px;
	margin-top: 15px;
	margin-bottom: 15px;

	width: 200px;
	height: 34px;
	background-color: ${(props) => props.theme.colors.branding};
	color: ${(props) => props.theme.colors.backgroundSecondary};
	border-radius: 4px;
	margin-top: 15px;
	margin-bottom: 15px;
	border: none;
	font-size: ${(props) => props.theme.fontSizes.lg};

	z-index: 1;
	position: relative;
	//font-size: inherit;
	//font-family: inherit;
	//color: white;
	padding: 0.5em 1em;
	outline: none;
	border: none;
	//background-color: hsl(236, 32%, 26%);

	&:hover {
		cursor: pointer;
	}

	&::before {
		content: "";
		z-index: -1;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		border: 4px solid hsl(236, 32%, 26%);
		transform-origin: center;
		transform: scale(1);
	}

	&:hover::before {
		transition: all 0.75s ease-in-out;
		transform-origin: center;
		transform: scale(1.75);
		opacity: 0;
	}
`;

export default function HomePage(props) {
	const theme = useTheme();

	return (
		<>
			<ProgressBar color={theme.colors.branding} height={5} />
			<SectionOne id="section-home">
				<Slide bottom cascade>
					<LandingPageContainer>
						<Head title="Homepage" metaDescription="" keywords="" />

						<TitleLandingContainer>
							<TitleLanding>Glayson Visgueira</TitleLanding>
							<SubTitleLanding> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</SubTitleLanding>

							<ButtonSaibaMais>Saiba mais</ButtonSaibaMais>
							<SocialNetworkRowStack />
						</TitleLandingContainer>
					</LandingPageContainer>
				</Slide>
			</SectionOne>

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
		</>
	);
}

/*
<TitleLanding>&lt;Glayson Visgueira /&gt;</TitleLanding>
*/
