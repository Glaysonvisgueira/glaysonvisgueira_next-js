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

const SectionHomePage = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 80%;
	min-height: 100vh;
	position: relative;
`;

export default function HomePage() {
	const theme = useTheme();
	const { language } = useContext(SettingsContext);

	return (
		<SectionHomePage id="section-home">
			<FloatNavigationBar />
			<ProgressBar color={theme.colors.branding} height={5} />
			<Head
				title="Portfólio de projetos de programação"
				metaDescription="Web portifólio de projetos de programação do Dev Glayson Visgueira."
				keywords="Glayson Visgueira, Glayson, Visgueira, Programação, Portifólio, Dev, Programador, Developer, Desenvolvedor"
			/>
			<LandingPageContainer>
				<TitleLandingContainer>
					<SubTitleLanding>{language.landingPage.apresentationText}</SubTitleLanding>
					<Typed strings={[language.landingPage.firstTypeText, language.landingPage.secondTypeText]} typeSpeed={30} className="type-string " />
					<SubTitleLanding>{language.landingPage.resumeText}</SubTitleLanding>
					<Link href="#section-sobre-mim" passHref>
						<ButtonSaibaMais>{language.landingPage.buttonText}</ButtonSaibaMais>
					</Link>
				</TitleLandingContainer>
				<ContainerAnimation>
					<LandingAnimation />
				</ContainerAnimation>
			</LandingPageContainer>
			<ScrollDownAnimation />
		</SectionHomePage>
	);
}
