import React, { useContext } from "react";
import Link from "next/link";

//Third's librarys
import styled from "styled-components";
import Typed from "react-typed";
import { useTheme } from "styled-components";
import ProgressBar from "react-progressbar-on-scroll";

//Custom components
import Head from "@/components/Head";
import LandingAnimation from "@/components/LandingPageAnimation";
import FloatNavigationBar from "@/components/FloatNavigationBar";
import ScrollDownAnimation from "@/components/ScrollDownAnimation";
//import SocialNetworkRowStack from "@/components/SocialNetworkRowStack";

//UI Components
import { FluidContainer } from "@/styles/ui";

//Contexto
import { SettingsContext } from "@/context/SettingsContext";

//Arquivo curriculo
import curriculo from "../public/pdf/curriculo.pdf";

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

const ButtonSaibaMais = styled.button`
	z-index: 1;
	position: relative;
	width: 200px;
	height: 44px;

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

const ButtonDownloadCV = styled.button`
	z-index: 1;
	position: relative;
	width: 200px;
	height: 44px;
	transition: all 0.3s ease;
	font-size: ${(props) => props.theme.fontSizes.lg};
	/* border: 2px solid ${(props) => props.theme.colors.branding}; */
	border: none;
	color: ${(props) => props.theme.colors.branding};
	border-radius: 4px;
	background-color: ${(props) => props.theme.colors.backgroundSecondary};
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

const SectionHomePage = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 80%;
	min-height: 100vh;
	position: relative;
`;

const TextBrandingDev = styled.span`
	font-weight: 700;
	color: ${(props) => props.theme.colors.branding};
	font-size: 16px;
	margin-bottom: 12px;

	@media (max-width: 601px) {
		text-align: center;
		width: 100%;
	}
`;

const ChipTechWrapper = styled.span`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 10px;
	margin-top: 10px;
	flex-wrap: wrap;

	@media (max-width: 601px) {
		justify-content: center;
	}

	.chip-tech {
		font-size: 14px;
		padding: 2px 8px;
		border-radius: 4px;
		color: ${(props) => props.theme.colors.branding};
		background-color: ${(props) => props.theme.colors.backgroundSecondary};
	}
`;

const WrapperButtons = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: row;
	gap: 10px;
	width: 100%;
	margin-top: 20px;

	@media (max-width: 601px) {
		flex-direction: column;
	}
`;

export default function HomePage() {
	const theme = useTheme();
	const { language } = useContext(SettingsContext);

	const handleDownload = () => {
		const link = document.createElement("a");
		link.href = curriculo;
		link.download = "curriculo_glayson_visgueira.pdf"; // Nome do arquivo baixado
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return (
		<FluidContainer id="section-home" hasMinHeight>
			<SectionHomePage>
				<FloatNavigationBar />
				<ProgressBar color={theme.colors.branding} height={5} />
				<Head
					title="Portfólio de projetos de programação"
					metaDescription="Web portifólio de projetos de programação do Dev Glayson Visgueira."
					keywords="Glayson Visgueira, Glayson, Visgueira, Programação, Portifólio, Dev, Programador, Developer, Desenvolvedor de software, analista de sistemas, programador fullstack, desenvolvedor frontend"
				/>
				<LandingPageContainer>
					<TitleLandingContainer>
						<TextBrandingDev>Desenvolvedor Front-end | Fullstack</TextBrandingDev>
						{/* <SubTitleLanding>{language.landingPage.apresentationText}</SubTitleLanding> */}
						<Typed strings={[language.landingPage.firstTypeText]} typeSpeed={30} className="type-string " />
						<SubTitleLanding>{language.landingPage.resumeText}</SubTitleLanding>
						<ChipTechWrapper>
							<span className="chip-tech">React</span>
							<span className="chip-tech">Python</span>
							<span className="chip-tech">Javascript</span>
							<span className="chip-tech">Next.js</span>
							<span className="chip-tech">Django</span>
							<span className="chip-tech">Typescript</span>
							<span className="chip-tech">Node.js</span>
						</ChipTechWrapper>

						<WrapperButtons>
							<Link href="#section-sobre-mim" passHref>
								<ButtonSaibaMais>{language.landingPage.buttonText}</ButtonSaibaMais>
							</Link>
							<ButtonDownloadCV onClick={handleDownload} target="_blank" data-splitbee-event="Download CV">
								Download CV
							</ButtonDownloadCV>
						</WrapperButtons>
					</TitleLandingContainer>
					<ContainerAnimation>
						<LandingAnimation />
					</ContainerAnimation>
				</LandingPageContainer>
				<ScrollDownAnimation />
			</SectionHomePage>
		</FluidContainer>
	);
}
