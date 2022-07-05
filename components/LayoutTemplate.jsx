import React, { useState, useEffect } from "react";

//Third part librarys
import Link from "next/link";
import styled from "styled-components";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

//Custom components
import ThemeButtons from "@/components/ThemeButtons";
import BurgerMenu from "@/components/BurgerMenu";

//Ícones
import { KeyboardArrowUp } from "@styled-icons/material-outlined/KeyboardArrowUp";

const Main = styled.main`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 100%;
	//background: ${(props) => props.theme.colors.backgroundGradient};
	background: ${(props) => props.theme.colors.backgroundRadial};
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
	position: absolute;
	top: 0;
	z-index: 3;
	//background-color: ${(props) => props.theme.colors.background};

	//Deixar header com efeito de Glassmorphin
	//transition: min-height 1s ease !important;
	//background-color: rgba(0, 0, 0, 0.1) !important;
	//backdrop-filter: saturate(180%) blur(30px);
	//-webkit-backdrop-filter: saturate(180%) blur(30px);

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

const NavbarOptionContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	@media (max-width: 600px) {
		display: none;
	}
`;

const BurgerMenuContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	@media (min-width: 601px) {
		display: none;
	}
`;

const NavbarOptionAAA = styled.h4`
	color: ${(props) => props.theme.colors.body};
	font-weight: 800;
	margin-left: 5px;
	margin-right: 5px;
	text-decoration: none;
	border-bottom: 4px solid transparent;
	transition: all 0.3s ease;

	&:hover {
		cursor: pointer;
		color: ${(props) => props.theme.colors.title};
		border-bottom: 4px solid ${(props) => props.theme.colors.branding};
	}

	@media (max-width: 1400px) {
		font-size: ${(props) => props.theme.fontSizes.lg};
	}

	@media (max-width: 1200px) {
		font-size: ${(props) => props.theme.fontSizes.md};
	}

	@media (max-width: 900px) {
		font-size: ${(props) => props.theme.fontSizes.xs};
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
		//border-bottom: 4px solid ${(props) => props.theme.colors.branding};
	}

	@media (max-width: 1400px) {
		font-size: ${(props) => props.theme.fontSizes.lg};
	}

	@media (max-width: 1200px) {
		font-size: ${(props) => props.theme.fontSizes.md};
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

const ButtonUpToTop = styled.div`
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	width: 54px;
	height: 54px;
	bottom: 20px;
	right: 20px;
	z-index: 1;
	background-color: ${(props) => props.theme.colors.branding};
	border: 2px solid ${(props) => props.theme.colors.background};
	transition: all 0.3s ease;

	&:hover {
		cursor: pointer;
		transform: scale(1.2);
	}

	svg {
		color: ${(props) => props.theme.colors.background};
		width: 30px;
		height: 30px;
	}

	@media (max-width: 1200px) {
		width: 44px;
		height: 44px;
	}

	@media (max-width: 600px) {
		width: 34px;
		height: 34px;
	}
`;

export default function LayoutTemplate({ children }) {
	const [showTopBtn, setShowTopBtn] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 200) {
				setShowTopBtn(true);
			} else {
				setShowTopBtn(false);
			}
		});
	}, []);

	//Função para subir ao topo da página.
	const goToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<>
			{showTopBtn && (
				<ButtonUpToTop onClick={goToTop}>
					<KeyboardArrowUp />
				</ButtonUpToTop>
			)}
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
							<NavbarOption>HOME</NavbarOption>
						</Link>
					</Fade>

					<Fade top delay={200} duration={200}>
						<Link href="#section-sobre-mim" passHref>
							<NavbarOption>SOBRE MIM</NavbarOption>
						</Link>
					</Fade>
					<Fade top delay={300} duration={200}>
						<Link href="#section-portifolio" passHref>
							<NavbarOption>PORTIFÓLIO</NavbarOption>
						</Link>
					</Fade>
					<Fade top delay={400} duration={200}>
						<Link href="#section-experiencia" passHref>
							<NavbarOption>EXPERIÊNCIA</NavbarOption>
						</Link>
					</Fade>
					<Fade top delay={500} duration={200}>
						<Link href="#section-contatos" passHref>
							<NavbarOption>CONTATOS</NavbarOption>
						</Link>
					</Fade>
				</NavbarOptionContainer>

				<BurgerMenuContainer>
					<BurgerMenu />
				</BurgerMenuContainer>
			</HeaderContainer>
			<Fade left>
				<SideBarTheme>
					<ThemeButtons />
				</SideBarTheme>
			</Fade>
			<Main>
				<ContainerPage>{children}</ContainerPage>
			</Main>
		</>
	);
}
