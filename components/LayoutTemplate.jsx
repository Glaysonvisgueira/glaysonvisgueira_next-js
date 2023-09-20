import React, { useContext, useState } from "react";

//Third part librarys
import Link from "next/link";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

//Custom components
import SwitchThemeButton from "@/components/SwitchThemeButton";
import LanguageSwitchButton from "@/components/LanguageSwitchButton";

//Contexto
import { SettingsContext } from "@/context/SettingsContext";

const Main = styled.main`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 100%;
	background-color: ${(props) => props.theme.colors.backgroundPage};
`;

const ContainerPage = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 100%;
`;

const HeaderContainer = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 100%;
	height: 64px;
	position: fixed;
	top: 0;
	z-index: 3;

	//Deixar header com efeito de Glassmorphin
	//background-color: rgba(0, 0, 0, 0.1) !important;
	backdrop-filter: saturate(180%) blur(30px);
	-webkit-backdrop-filter: saturate(180%) blur(30px);

	@media (max-width: 600px) {
		justify-content: space-between;
	}
`;

const LogoContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	&:hover {
		cursor: pointer;
		opacity: 0.8;
	}

	@media (max-width: 600px) {
		margin-left: 30px;
	}
`;

const LogoText = styled.h3`
	color: ${(props) => props.theme.colors.title};
	font-weight: 700;
	font-size: 30px;

	@media (max-width: 900px) {
		font-size: ${(props) => props.theme.fontSizes.xl};
	}
`;

const CaracteresLogo = styled.span`
	color: ${(props) => props.theme.colors.branding};
	font-weight: 700;
`;

const NavbarOptionContainer = styled.nav`
	display: flex;
	align-items: center;
	justify-content: center;

	@media (max-width: 600px) {
		display: none;
	}
`;

const SwitchMenuContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 20px;

	@media (min-width: 601px) {
		display: none;
	}
`;

const NavbarOption = styled.h4`
	color: ${(props) => props.theme.colors.title};
	font-weight: 800;
	margin-left: 5px;
	margin-right: 5px;
	text-decoration: none;
	border-bottom: 4px solid transparent;
	transition: all 0.3s ease;
	position: relative;

	&::before {
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 2px;
		background-color: ${(props) => props.theme.colors.branding};
		transform-origin: bottom right;
		transform: scaleX(0);
		transition: transform 0.5s ease;
	}

	&:hover::before {
		transform-origin: bottom left;
		transform: scaleX(1);
	}

	&:hover {
		cursor: pointer;
		color: ${(props) => props.theme.colors.branding};
	}

	@media (max-width: 1400px) {
		font-size: ${(props) => props.theme.fontSizes.md};
	}

	@media (max-width: 1200px) {
		font-size: ${(props) => props.theme.fontSizes.sm};
	}

	@media (max-width: 900px) {
		font-size: ${(props) => props.theme.fontSizes.xs};
	}
`;

const SideBarTheme = styled.aside`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 60px;
	height: 100vh;
	position: fixed;
	left: 0;

	@media (max-width: 600px) {
		display: none;
	}
`;

export default function LayoutTemplate({ children }) {
	const { language } = useContext(SettingsContext);

	return (
		<>
			<HeaderContainer>
				<Fade top delay={100} duration={200}>
					<Link href="#section-home" passHref>
						<LogoContainer>
							<LogoText>
								<CaracteresLogo>&lt;</CaracteresLogo>GV <CaracteresLogo>/&gt;</CaracteresLogo>
							</LogoText>
						</LogoContainer>
					</Link>
				</Fade>

				<NavbarOptionContainer>
					<Fade top delay={100} duration={200}>
						<Link href="#section-home" passHref>
							<NavbarOption>{language.navbarMenu.labelHome}</NavbarOption>
						</Link>
					</Fade>

					<Fade top delay={200} duration={200}>
						<Link href="#section-services" passHref>
							<NavbarOption>{language.navbarMenu.labelServices}</NavbarOption>
						</Link>
					</Fade>

					<Fade top delay={300} duration={200}>
						<Link href="#section-sobre-mim" passHref>
							<NavbarOption>{language.navbarMenu.labelAboutMe}</NavbarOption>
						</Link>
					</Fade>
					<Fade top delay={400} duration={200}>
						<Link href="#section-portifolio" passHref>
							<NavbarOption>{language.navbarMenu.labelPortifolio}</NavbarOption>
						</Link>
					</Fade>
					<Fade top delay={500} duration={200}>
						<Link href="#section-experiencia" passHref>
							<NavbarOption>{language.navbarMenu.labelExperience}</NavbarOption>
						</Link>
					</Fade>
					<Fade top delay={600} duration={200}>
						<LanguageSwitchButton />
						<SwitchThemeButton />
					</Fade>
				</NavbarOptionContainer>

				<SwitchMenuContainer>
					<LanguageSwitchButton />
					<SwitchThemeButton />
				</SwitchMenuContainer>
			</HeaderContainer>

			<Main>
				<ContainerPage>{children}</ContainerPage>
			</Main>
		</>
	);
}
