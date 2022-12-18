import React, { useState, useContext } from "react";
import styled from "styled-components";
import Link from "next/link";

//Custom components
import ThemeButtons from "@/components/ThemeButtons";
import LanguageSwitchButton from "@/components/LanguageSwitchButton";

//Ícones
import { Home } from "@styled-icons/heroicons-solid/Home";
import { Code } from "@styled-icons/fluentui-system-regular/Code";
import { Timeline } from "@styled-icons/fluentui-system-regular/Timeline";
import { FolderBriefcase } from "@styled-icons/fluentui-system-filled/FolderBriefcase";
import { Badge } from "@styled-icons/material-outlined/Badge";

//Contexto
import { SettingsContext } from "@/context/SettingsContext";

const StyledBurger = styled.div`
	width: 2rem;
	height: 2rem;
	position: fixed;
	right: 30px;
	z-index: 20;
	display: none;

	&:hover {
		cursor: pointer;
		opacity: 0.8;
	}

	@media (max-width: 768px) {
		display: flex;
		justify-content: space-around;
		flex-flow: column nowrap;
	}
	div {
		width: 2rem;
		height: 0.25rem;
		background-color: ${(props) => props.theme.colors.branding};
		border-radius: 10px;
		transform-origin: 1px;
		transition: all 0.3s linear;
		&:nth-child(1) {
			transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
		}
		&:nth-child(2) {
			transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
			opacity: ${({ open }) => (open ? 0 : 1)};
		}
		&:nth-child(3) {
			transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
		}
	}
`;

const Ul = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	z-index: 10;

	.language-switch {
		margin-bottom: 40px;
	}

	.container-language-select {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 40px;
	}

	li {
		font-weight: 700;
		padding: 18px 10px;
		text-align: left;
		border-bottom: 1px solid #525252;
		border-left: 4px solid transparent;

		a {
			color: ${(props) => props.theme.colors.title};
			text-decoration: none;
		}

		&:hover {
			cursor: pointer;
			border-left: 4px solid ${(props) => props.theme.colors.branding};
		}
	}

	@media (max-width: 768px) {
		//flex-flow: column nowrap;
		background-color: #161616;
		position: fixed;
		transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
		z-index: 3;
		top: 0;
		right: 0;
		height: 100vh;
		width: 100%;
		padding-top: 3.5rem;
		transition: transform 0.3s ease-in-out;

		li {
			color: ${(props) => props.theme.colors.title};
			display: flex;
			align-items: center;
			justify-content: left;

			svg {
				width: 28px;
				height: 28px;
			}
		}
	}
`;

const ContainerThemeButtonsInBurger = styled.div`
	position: absolute;
	top: 20px;
	left: 10px;
`;

const Burger = () => {
	const { language } = useContext(SettingsContext);
	const [open, setOpen] = useState(false);

	function handleOpenOnClickMenu() {
		setOpen(!open);
	}

	return (
		<>
			<StyledBurger open={open} onClick={() => setOpen(!open)}>
				<div />
				<div />
				<div />
			</StyledBurger>
			<Ul open={open}>
				<ContainerThemeButtonsInBurger>
					<ThemeButtons />
				</ContainerThemeButtonsInBurger>

				<div>
					<Link href="#" passHref>
						<li onClick={handleOpenOnClickMenu}>
							<Home />
							&nbsp;&nbsp;{language.navbarMenu.labelHome}
						</li>
					</Link>
					<Link href="#section-services" passHref>
						<li onClick={handleOpenOnClickMenu}>
							<Code />
							&nbsp;&nbsp;{language.navbarMenu.labelServices}
						</li>
					</Link>
					<Link href="#section-sobre-mim" passHref>
						<li onClick={handleOpenOnClickMenu}>
							<Badge />
							&nbsp;&nbsp;{language.navbarMenu.labelAboutMe}
						</li>
					</Link>
					<Link href="#section-portifolio" passHref>
						<li onClick={handleOpenOnClickMenu}>
							<FolderBriefcase />
							&nbsp;&nbsp;{language.navbarMenu.labelPortifolio}
						</li>
					</Link>
					<Link href="#section-experiencia" passHref>
						<li onClick={handleOpenOnClickMenu}>
							<Timeline />
							&nbsp;&nbsp;{language.navbarMenu.labelExperience}
						</li>
					</Link>
				</div>
				<div className="language-switch">
					<LanguageSwitchButton />
				</div>
			</Ul>
		</>
	);
};

export default Burger;
