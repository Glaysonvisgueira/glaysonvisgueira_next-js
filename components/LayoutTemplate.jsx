import React, { useState, useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";
import ThemeButtons from "@/components/ThemeButtons";
import BurgerMenu from "@/components/BurgerMenu";

const Main = styled.main`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	width: 100%;
	min-height: 100vh;
	//background-color: ${(props) => props.theme.colors.background};
	background-image: linear-gradient(to right top, #171e26, #1b232b, #202731, #242c36, #29313c);
`;

const HeaderContainer = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	width: 100%;
	height: 64px;
	position: fixed;
	top: 0;

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
	color: ${(props) => props.theme.colors.textTitle};
	font-family: "Quicksand", sans-serif;
	font-weight: 700;
	font-size: 30px;

	@media (max-width: 900px) {
		font-size: ${(props) => props.theme.fontSizes.xl}px;
	}
`;

const CaracteresLogo = styled.span`
	color: ${(props) => props.theme.colors.textColorTitle};
	font-family: "Quicksand", sans-serif;
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

	@media (min-width: 600px) {
		display: none;
	}
`;

const NavbarOption = styled.span`
	color: ${(props) => props.theme.colors.textBody};
	font-family: "Quicksand", sans-serif;
	font-weight: 400;
	//font-size: 18px;
	margin-left: 5px;
	margin-right: 5px;
	border-bottom: 4px solid transparent;
	//text-decoration: none;
	transition: border-color 0.5s ease;

	&:hover {
		cursor: pointer;
		color: ${(props) => props.theme.colors.textTitle};
		border-bottom: 4px solid ${(props) => props.theme.colors.textColorTitle};
	}

	@media (max-width: 1400px) {
		font-size: ${(props) => props.theme.fontSizes.lg}px;
	}

	@media (max-width: 1200px) {
		font-size: ${(props) => props.theme.fontSizes.md}px;
	}

	@media (max-width: 900px) {
		font-size: ${(props) => props.theme.fontSizes.xs}px;
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
	const [homeSelected, setHomeSelected] = useState(true);
	const [sobreSelected, seSobreSelected] = useState(false);
	const [portifolioSelected, setPortifolioSelected] = useState(false);
	const [experienciaSelected, setExperienciaSelected] = useState(false);
	const [contatosSelected, setContatosSelected] = useState(false);

	return (
		<Main>
			<HeaderContainer>
				<Link href="/" passHref>
					<LogoContainer>
						<LogoText>
							<CaracteresLogo>&lt;</CaracteresLogo>GV <CaracteresLogo>/&gt;</CaracteresLogo>
						</LogoText>
					</LogoContainer>
				</Link>

				<NavbarOptionContainer>
					<Link href="/" passHref>
						<NavbarOption id="home" selected={homeSelected}>
							HOME
						</NavbarOption>
					</Link>
					<Link href="/sobre-mim" passHref>
						<NavbarOption id="sobre">SOBRE MIM</NavbarOption>
					</Link>
					<Link href="/portifolio" passHref>
						<NavbarOption id="portifolio">PORTIFÓLIO</NavbarOption>
					</Link>
					<Link href="/experiencia" passHref>
						<NavbarOption id="experiencia">EXPERIÊNCIA</NavbarOption>
					</Link>
					<Link href="/contatos" passHref>
						<NavbarOption id="contatos">CONTATOS</NavbarOption>
					</Link>
				</NavbarOptionContainer>

				<BurgerMenuContainer>
					<BurgerMenu />
				</BurgerMenuContainer>
			</HeaderContainer>
			<SideBarTheme>
				<ThemeButtons />
			</SideBarTheme>
			{children}
		</Main>
	);
}
