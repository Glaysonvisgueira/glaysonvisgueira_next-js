import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

import ThemeButtons from "@/components/ThemeButtons";

//Ícones
import { Home } from "@styled-icons/heroicons-solid/Home";
import { WindowDevTools } from "@styled-icons/fluentui-system-regular/WindowDevTools"; //Serviços
import { ContactCardLink } from "@styled-icons/fluentui-system-filled/ContactCardLink";
import { Timeline } from "@styled-icons/fluentui-system-regular/Timeline";
import { FolderBriefcase } from "@styled-icons/fluentui-system-filled/FolderBriefcase";
import { NotepadPerson } from "@styled-icons/fluentui-system-filled/NotepadPerson";

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
		//background-color: ${(props) => props.theme.colors.backgroundSecondary};
		background: ${(props) => props.theme.colors.backgroundRadial};
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
			justify-content: center;

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
							&nbsp;&nbsp;HOME
						</li>
					</Link>
					<Link href="#section-services" passHref>
						<li onClick={handleOpenOnClickMenu}>
							<WindowDevTools />
							&nbsp;&nbsp;SERVIÇOS
						</li>
					</Link>
					<Link href="#section-sobre-mim" passHref>
						<li onClick={handleOpenOnClickMenu}>
							<NotepadPerson />
							&nbsp;&nbsp;SOBRE MIM
						</li>
					</Link>
					<Link href="#section-portifolio" passHref>
						<li onClick={handleOpenOnClickMenu}>
							<FolderBriefcase />
							&nbsp;&nbsp;PORTIFÓLIO
						</li>
					</Link>
					<Link href="#section-experiencia" passHref>
						<li onClick={handleOpenOnClickMenu}>
							<Timeline />
							&nbsp;&nbsp;EXPERIÊNCIA
						</li>
					</Link>
					<Link href="#section-contatos" passHref>
						<li onClick={handleOpenOnClickMenu}>
							<ContactCardLink />
							&nbsp;&nbsp;CONTATOS
						</li>
					</Link>
				</div>
			</Ul>
		</>
	);
};

export default Burger;
