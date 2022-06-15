import React, { useState } from "react";
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
	background-image: ${(props) => props.theme.colors.backgroundGradient};
`;

const ContainerContent = styled.main`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 70%;
	min-height: 100vh;

	@media (max-width: 1600px) {
		width: 80%;
	}

	@media (max-width: 1200px) {
		width: 90%;
	}

	@media (max-width: 1000px) {
		width: 100%;
	}
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
	font-weight: 700;
	margin-left: 5px;
	margin-right: 5px;
	text-decoration: none;
	border-bottom: 4px solid transparent;
	transition: border-color 0.5s ease;

	&:hover {
		cursor: pointer;
		color: ${(props) => props.theme.colors.textTitle};
		border-bottom: 4px solid ${(props) => props.theme.colors.textColorTitle};
	}

	&:active {
		//color: op;
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

const NavbarOptionHome = styled(NavbarOption)`
	color: ${(props) => (props.selected ? props.theme.colors.textTitle : props.theme.colors.textBody)};
	border-bottom: 4px solid ${(props) => (props.selected ? props.theme.colors.textColorTitle : "transparent")};
`;

const NavbarOptionSobre = styled(NavbarOption)`
	color: ${(props) => (props.selected ? props.theme.colors.textTitle : props.theme.colors.textBody)};
	border-bottom: 4px solid ${(props) => (props.selected ? props.theme.colors.textColorTitle : "transparent")};
`;

const NavbarOptionPortifolio = styled(NavbarOption)`
	color: ${(props) => (props.selected ? props.theme.colors.textTitle : props.theme.colors.textBody)};
	border-bottom: 4px solid ${(props) => (props.selected ? props.theme.colors.textColorTitle : "transparent")};
`;

const NavbarOptionExperiencia = styled(NavbarOption)`
	color: ${(props) => (props.selected ? props.theme.colors.textTitle : props.theme.colors.textBody)};
	border-bottom: 4px solid ${(props) => (props.selected ? props.theme.colors.textColorTitle : "transparent")};
`;

const NavbarOptionContatos = styled(NavbarOption)`
	color: ${(props) => (props.selected ? props.theme.colors.textTitle : props.theme.colors.textBody)};
	border-bottom: 4px solid ${(props) => (props.selected ? props.theme.colors.textColorTitle : "transparent")};
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
	const [selectedHome, setSelectedHome] = useState(false);
	const [selectedSobre, setSelectedSobre] = useState(false);
	const [selectedPortifolio, setSelectedPortifolio] = useState(false);
	const [selectedExperiencia, setSelectedExperiencia] = useState(false);
	const [selectedContatos, setSelectedContatos] = useState(false);

	function handleActiveOption(option) {
		if (option == "home") {
			setSelectedHome(true);
			setSelectedSobre(false);
			setSelectedPortifolio(false);
			setSelectedExperiencia(false);
			setSelectedContatos(false);
		} else if (option == "sobre") {
			setSelectedHome(false);
			setSelectedSobre(true);
			setSelectedPortifolio(false);
			setSelectedExperiencia(false);
			setSelectedContatos(false);
		} else if (option == "portifolio") {
			setSelectedHome(false);
			setSelectedSobre(false);
			setSelectedPortifolio(true);
			setSelectedExperiencia(false);
			setSelectedContatos(false);
		} else if (option == "experiencia") {
			setSelectedHome(false);
			setSelectedSobre(false);
			setSelectedPortifolio(false);
			setSelectedExperiencia(true);
			setSelectedContatos(false);
		} else if (option == "contatos") {
			setSelectedHome(false);
			setSelectedSobre(false);
			setSelectedPortifolio(false);
			setSelectedExperiencia(false);
			setSelectedContatos(true);
		}
	}

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
						<NavbarOptionHome id="home" selected={selectedHome} onClick={(e) => handleActiveOption(e.target.id)}>
							HOME
						</NavbarOptionHome>
					</Link>
					<Link href="/sobre-mim" passHref>
						<NavbarOptionSobre id="sobre" selected={selectedSobre} onClick={(e) => handleActiveOption(e.target.id)}>
							SOBRE MIM
						</NavbarOptionSobre>
					</Link>
					<Link href="/portifolio" passHref>
						<NavbarOptionPortifolio id="portifolio" selected={selectedPortifolio} onClick={(e) => handleActiveOption(e.target.id)}>
							PORTIFÓLIO
						</NavbarOptionPortifolio>
					</Link>
					<Link href="/experiencia" passHref>
						<NavbarOptionExperiencia id="experiencia" selected={selectedExperiencia} onClick={(e) => handleActiveOption(e.target.id)}>
							EXPERIÊNCIA
						</NavbarOptionExperiencia>
					</Link>
					<Link href="/contatos" passHref>
						<NavbarOptionContatos id="contatos" selected={selectedContatos} onClick={(e) => handleActiveOption(e.target.id)}>
							CONTATOS
						</NavbarOptionContatos>
					</Link>
				</NavbarOptionContainer>

				<BurgerMenuContainer>
					<BurgerMenu />
				</BurgerMenuContainer>
			</HeaderContainer>
			<SideBarTheme>
				<ThemeButtons />
			</SideBarTheme>
			<ContainerContent>{children}</ContainerContent>
		</Main>
	);
}
