import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";

const FooterContainer = styled.footer`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;
	width: 100%;
	height: 180px;
	background-color: ${(props) => props.theme.colors.branding};

	#grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: 1fr;
		grid-column-gap: 20px;
		grid-row-gap: 0px;
		width: 60%;

		.div1 {
			display: flex;
			align-content: center;
			justify-content: flex-start;
			flex-direction: column;
			width: 100%;
			height: 100%;
			//border: 1px solid #000;
			padding: 5px;
		}
		.div2 {
			display: flex;
			align-content: center;
			justify-content: flex-start;
			flex-direction: column;
			width: 100%;
			height: 100%;
			//border: 1px solid #000;
			padding: 5px;
		}
		.div3 {
			grid-area: 1 / 2 / 2 / 3;
		}
		.div4 {
			grid-area: 1 / 3 / 2 / 4;
		}
	}
`;

const FooterTextTitle = styled.h4`
	font-weight: 800;
	color: ${(props) => props.theme.colors.background};
`;

const FooterText = styled.span`
	font-weight: 400;
	font-size: 14px;
	color: ${(props) => props.theme.colors.background};

	&:hover {
		cursor: pointer;
	}
`;

const TextBuildProject = styled.h4`
	font-weight: 500;
	color: ${(props) => props.theme.colors.background};
	font-size: 14px;

	span {
		font-weight: 400;
	}
`;

const ContainerBuildCopyright = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 10px;
	width: 60%;
`;

export default function FooterPage(props) {
	const [commit, setCommit] = useState([]);

	useEffect(() => {
		getLastCommit();
	}, []);

	console.log(commit);
	async function getLastCommit() {
		try {
			const response = await fetch("https://api.github.com/repos/Glaysonvisgueira/glaysonvisgueira_next-js/commits").then((data) => {
				const json = response.json();
				setCommit(json);
			});
		} catch (err) {
			console.log(err);
		}
	}

	return (
		<FooterContainer>
			<div id="grid">
				<div className="div1">
					<FooterTextTitle>NAVEGAÇÃO</FooterTextTitle>
					<Link href="#section-home" passHref>
						<FooterText>Home</FooterText>
					</Link>
					<FooterText>Sobre mim</FooterText>
					<FooterText>Portifólio</FooterText>
					<FooterText>Experiência</FooterText>
					<FooterText>Contatos</FooterText>
				</div>
				<div className="div2"></div>
			</div>

			<ContainerBuildCopyright>
				<div>
					<TextBuildProject>Copyright © 2022. Todos os direitos reservados.</TextBuildProject>
				</div>
				<div>
					<TextBuildProject>Build: {commit}</TextBuildProject>
				</div>
			</ContainerBuildCopyright>
		</FooterContainer>
	);
}
/*
<BodyText>Build 37c01km</BodyText>
<BodyText>Build</BodyText>
 */
