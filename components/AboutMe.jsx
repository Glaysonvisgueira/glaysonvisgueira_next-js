import React, { useEffect, useState } from "react";

//Third's librarys
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import ScrollAnimation from "react-animate-on-scroll";

//PDFs
import curriculoPTBR from "../public/pdf/curriculo-ptbr.pdf";

//Ícones
import { GithubSquare } from "@styled-icons/fa-brands/GithubSquare";

const WrapperAboutMe = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 60%;
	height: 100%;

	@media (max-width: 1400px) {
		width: 80%;
	}

	.container {
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;
		flex-direction: row;
		width: 100%;
		height: 600px;

		@media (max-width: 900px) {
			align-items: center;
			justify-content: center;
			flex-direction: column;
			width: 100%;
			height: auto;
		}

		.left-view {
			display: flex;
			align-items: center;
			justify-content: flex-start;
			flex-direction: column;
			width: 40%;
			height: 100%;
			//margin-right: 40px;
			//background-color: #d8f0b2;

			@media (max-width: 1400px) {
				margin-right: 20px;
			}

			@media (max-width: 900px) {
				width: 100%;
				align-items: center;
				justify-content: center;
				margin-top: 20px;
			}
		}

		.right-view {
			display: flex;
			align-items: flex-start;
			justify-content: flex-start;
			flex-direction: column;
			width: 60%;
			height: 100%;
			//background-color: #b1d5ec;

			@media (max-width: 900px) {
				width: 100%;
				align-items: flex-start;
				justify-content: flex-start;
				margin-top: 20px;
			}

			h3 {
				color: ${(props) => props.theme.colors.branding};
				font-size: 32px;

				@media (max-width: 600px) {
					font-size: 22px;
				}
			}

			p {
				color: ${(props) => props.theme.colors.body};
				font-size: ${(props) => props.theme.fontSizes.md};
				text-align: justify;
				margin-top: 15px;
				margin-bottom: 15px;

				strong {
					font-weight: 700;
					color: ${(props) => props.theme.colors.branding};
				}

				@media (max-width: 600px) {
					font-size: ${(props) => props.theme.fontSizes.sm};
				}
			}
		}
	}

	.skills {
	}
`;

const GithubStatsCard = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	width: 300px;
	height: 420px;
	border: 2px solid ${(props) => props.theme.colors.branding};
	border-radius: 8px;
	flex-direction: column;
	overflow: hidden;
	position: relative;

	@media (max-width: 601px) {
		width: 100%;
	}

	svg {
		color: ${(props) => props.theme.colors.backgroundSecondary};
		width: 28px;
		height: 28px;
		position: absolute;
		top: 10px;
		right: 10px;

		&:hover {
			opacity: 0.8;
			cursor: pointer;
		}
	}

	.image-rounded {
		border-radius: 50%;
	}

	.background {
		width: 100%;
		height: 150px;
		background-color: ${(props) => props.theme.colors.branding};
	}

	.img {
		width: 140px;
		height: 140px;
		border-radius: 50%;
		border: 5px solid ${(props) => props.theme.colors.branding};
		background-color: ${(props) => props.theme.colors.backgroundSecondary};
		position: absolute;
		top: 30px;
	}

	.content {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		flex-direction: column;
		width: 100%;
		height: 100%;
		padding: 20px;

		h3 {
			color: ${(props) => props.theme.colors.title};
			margin-top: 60px;
		}

		h2 {
			color: ${(props) => props.theme.colors.body};
			margin-bottom: 20px;
			font-size: 14px;
			margin-top: 5px;
			font-weight: 300;
		}

		p {
			text-align: center;
			color: ${(props) => props.theme.colors.body};
		}
	}

	.github-stats {
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		width: 90%;
		height: 60px;
		background: ${(props) => props.theme.colors.backgroundSecondary};
		border-radius: 8px;
		padding: 10px;
		position: absolute;
		bottom: 15px;

		.stats {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;

			p {
				font-size: 18px;
				font-weight: 900;
				color: ${(props) => props.theme.colors.title};
				margin-bottom: 5px;
			}

			span {
				font-size: 10px;
				color: ${(props) => props.theme.colors.body};
			}
		}
	}
`;

const ButtonCV = styled.a`
	z-index: 1;
	position: relative;
	width: 200px;
	height: 44px;
	margin-top: 15px;
	margin-bottom: 15px;
	font-size: ${(props) => props.theme.fontSizes.lg};
	transition: all 0.3s ease;
	border: none;
	text-decoration: none;
	color: ${(props) => props.theme.colors.background};
	border-radius: 4px;
	background-color: ${(props) => props.theme.colors.branding};
	font-weight: 700;
	display: flex;
	align-items: center;
	justify-content: center;

	&:hover {
		cursor: pointer;
		opacity: 0.8;
	}

	@media (max-width: 601px) {
		width: 100%;
	}

	@media (max-width: 425px) {
		width: 100%;
	}
`;

export default function AboutMe(props) {
	const [githubUserData, setGithubUserData] = useState({});

	useEffect(() => {
		async function fetchGithubStats() {
			const response = await fetch("https://api.github.com/users/glaysonvisgueira");
			const json = await response.json();
			console.log("RESPONSE: ", response);
			setGithubUserData(json);
		}
		fetchGithubStats();
	}, []);

	return (
		<WrapperAboutMe>
			<div className="container">
				<div className="left-view">
					<ScrollAnimation animateIn="fadeIn" animateOnce delay={200}>
						<GithubStatsCard>
							<GithubSquare />
							<div className="background" />
							<div className="img">
								<Image src="/img/user-photo.jpg" alt="Desenvolvedor Glayson Visgueira" layout="fill" objectFit="cover" className="image-rounded" />
							</div>
							<div className="content">
								<h3>Glayson Visgueira</h3>
								<h2>@glaysonvisgueira</h2>
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
								<div className="github-stats">
									<div className="stats">
										<p>11</p>
										<span>Seguidores</span>
									</div>
									<div className="stats">
										<p>31</p>
										<span>Seguindo</span>
									</div>
									<div className="stats">
										<p>35</p>
										<span>Repositórios</span>
									</div>

									<div className="stats">
										<p>2</p>
										<span>Estrelas</span>
									</div>
								</div>
							</div>
						</GithubStatsCard>
					</ScrollAnimation>
				</div>
				<div className="right-view">
					<ScrollAnimation animateIn="fadeIn" animateOnce delay={200}>
						<h3>Sobre mim</h3>
						<p>
							Bacharel em Sistemas de informações pelo Centro Universitário Maurício de Nassau, com graduação finalizada no primeiro semestre de 2021. Trabalhei durante 9 anos na empresa Claudino S/A, nos quais 8 anos foram na
							área administrativa e a 1 ano no setor de tecnologia, mais especificamente na equipe responsável pelo Ecommerce da empresa, onde diariamente realizo manutenções ou desenvolvimento de novas funcionalidades que
							utilizam as tecnologias: Python, Django, Django REST Framework, React.js, Next.Js e PostgreSQL.
						</p>

						<p>Possuo maior aptidão para área de Front-end, com conhecimentos sólidos na stack: React.Js, Next.Js, HTML, Css e Styled components.</p>

						<p>
							Atualmente adquirindo conhecimentos em Dart e Flutter para desenvolvimento de aplicações para multiplataformas. Possuo inglês intermediário (autodidata) e diariamente absorvendo conhecimentos de design patterns e
							de Clean Code/Architecture. Sou proativo, curioso e motivado em encontrar soluções para problemas utilizando tecnologia.
						</p>
						<ButtonCV href={curriculoPTBR} target="_blank">
							Download CV
						</ButtonCV>
					</ScrollAnimation>
				</div>
			</div>
			<div className="skills"></div>
		</WrapperAboutMe>
	);
}
