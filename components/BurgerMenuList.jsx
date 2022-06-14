import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Ul = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	z-index: 10;

	//flex-flow: row nowrap;

	li {
		font-weight: 700;
		padding: 18px 10px;
		text-align: left;
		//color: ${(props) => props.theme.colors.textColorTitle};
		border-bottom: 1px solid ${(props) => props.theme.colors.textSubTitle};
		border-left: 4px solid transparent;

		&:hover {
			cursor: pointer;
			border-left: 4px solid ${(props) => props.theme.colors.textColorTitle};
		}
	}

	@media (max-width: 768px) {
		//flex-flow: column nowrap;
		background-color: ${(props) => props.theme.colors.backgroundSecondary};

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
			color: ${(props) => props.theme.colors.textTitle};
		}
	}
`;

const RightNav = ({ open }) => {
	return (
		<>
			<Ul open={open}>
				<div>
					<Link href="/" passHref>
						<li>HOME</li>
					</Link>
					<Link href="/sobre-mim" passHref>
						<li>SOBRE MIM</li>
					</Link>
					<Link href="/portifolio" passHref>
						<li>PORTIFÓLIO</li>
					</Link>
					<Link href="/experiencia" passHref>
						<li>EXPERIÊNCIA</li>
					</Link>
					<Link href="/contatos" passHref>
						<li>CONTATOS</li>
					</Link>
				</div>
				<span>Build: 1.0</span>
			</Ul>
		</>
	);
};

export default RightNav;
