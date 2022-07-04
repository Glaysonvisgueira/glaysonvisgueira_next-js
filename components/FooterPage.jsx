import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";

const FooterContainer = styled.footer`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;
	width: 100%;
	background-color: ${(props) => props.theme.colors.branding};

	#grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: 1fr;
		grid-column-gap: 20px;
		grid-row-gap: 0px;
		transition: all 0.3s ease;
		width: 60%;
		text-align: center;

		@media (max-width: 1200px) {
			width: 80%;
		}

		@media (max-width: 800px) {
			grid-template-columns: repeat(2, 1fr);
		}

		@media (max-width: 601px) {
			width: 100%;
			grid-template-columns: repeat(1, 1fr);
		}
	}
`;

const Divider = styled.div`
	width: 100%;
	border-top: 1px solid ${(props) => props.theme.colors.backgroundSecondary};
`;

const SectionFooterMenu = styled.div`
	display: flex;
	align-content: center;
	justify-content: flex-start;
	flex-direction: column;
	width: 100%;
	height: 100%;
	//border: 1px solid #000;
	padding: 5px;
`;

const FooterTextTitle = styled.h4`
	font-weight: 800;
	color: ${(props) => props.theme.colors.background};
`;

const FooterText = styled.span`
	font-weight: 400;
	font-size: 14px;
	color: ${(props) => props.theme.colors.background};
	transition: all 0.3s ease;
	margin-top: 3px;
	margin-bottom: 3px;

	&:hover {
		cursor: pointer;
		//margin-left: 10px;
		text-decoration: underline;
	}
`;

const FooterTextExternalLink = styled.a`
	font-weight: 400;
	font-size: 14px;
	color: ${(props) => props.theme.colors.background};
	transition: all 0.3s ease;
	margin-top: 3px;
	margin-bottom: 3px;
	text-decoration: none;

	&:hover {
		cursor: pointer;
		//margin-left: 10px;
		text-decoration: underline;
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
	transition: all 0.3s ease;
	width: 60%;
	margin-top: 10px;

	@media (max-width: 1200px) {
		width: 80%;
	}

	@media (max-width: 601px) {
		flex-direction: column;
	}

	@media (max-width: 400px) {
		width: 100%;
	}
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
				<SectionFooterMenu>
					<FooterTextTitle>NAVEGAÇÃO</FooterTextTitle>
					<Link href="#section-home" passHref>
						<FooterText>Home</FooterText>
					</Link>
					<Link href="#section-sobre-mim" passHref>
						<FooterText>Sobre mim</FooterText>
					</Link>
					<Link href="#section-portifolio" passHref>
						<FooterText>Portifólio</FooterText>
					</Link>
					<Link href="#section-experiencia" passHref>
						<FooterText>Experiência</FooterText>
					</Link>
					<Link href="#section-contatos" passHref>
						<FooterText>Contatos</FooterText>
					</Link>
				</SectionFooterMenu>

				<SectionFooterMenu>
					<FooterTextTitle>HOSPEDAGEM</FooterTextTitle>

					<FooterTextExternalLink href="https://vercel.com/" target="_blank">
						Vercel
					</FooterTextExternalLink>
				</SectionFooterMenu>

				<SectionFooterMenu>
					<FooterTextTitle>CÓDIGO FONTE</FooterTextTitle>
					<FooterTextExternalLink href="https://github.com/Glaysonvisgueira/glaysonvisgueira_next-js" target="_blank">
						Github
					</FooterTextExternalLink>
				</SectionFooterMenu>

				<SectionFooterMenu>
					<FooterTextTitle>TECNOLOGIAS</FooterTextTitle>

					<FooterTextExternalLink href="https://pt-br.reactjs.org/" target="_blank">
						React.Js
					</FooterTextExternalLink>

					<FooterTextExternalLink href="https://styled-components.com/" target="_blank">
						Next.js
					</FooterTextExternalLink>

					<FooterTextExternalLink href="https://nextjs.org/" target="_blank">
						Styled components
					</FooterTextExternalLink>
				</SectionFooterMenu>
			</div>
			<Divider />
			<ContainerBuildCopyright>
				<div>
					<TextBuildProject>Copyright © 2022.</TextBuildProject>
				</div>
				<div>
					<TextBuildProject>Build: cod. build</TextBuildProject>
				</div>
			</ContainerBuildCopyright>
		</FooterContainer>
	);
}
/*
<BodyText>Build 37c01km</BodyText>
<BodyText>Build</BodyText>
 */
