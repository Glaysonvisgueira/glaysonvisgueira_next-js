import React, { useEffect, useState } from "react";

//Third's librarys
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import ScrollAnimation from "react-animate-on-scroll";

//Custom components
import StackTech from "@/components/StackTechs";
import SocialNetworkRowStack from "@/components/SocialNetworkRowStack";

//PDFs
import curriculoPTBR from "../public/pdf/curriculo-ptbr.pdf";

const WrapperAboutMe = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 60%;

	@media (max-width: 1600px) {
		width: 85%;
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
			align-items: flex-start;
			justify-content: flex-start;
			flex-direction: column;
			width: 30%;
			height: 100%;
			margin-right: 40px;
			//background-color: #d8f0b2;

			@media (max-width: 1200px) {
				margin-right: 20px;
				width: 45%;
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
			width: 70%;
			height: 100%;
			//background-color: #b1d5ec;

			.tech-and-cv {
				display: flex;
				align-items: center;
				justify-content: space-between;

				@media (max-width: 601px) {
					flex-direction: column;
				}
			}

			@media (max-width: 1200px) {
				width: 55%;
			}

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

		a {
			color: ${(props) => props.theme.colors.body};
			margin-bottom: 20px;
			font-size: 14px;
			margin-top: 5px;
			font-weight: 300;
			text-decoration: none;

			&:hover {
				text-decoration: underline;
			}
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

const GithubAncor = styled.a`
	position: absolute;
	top: 10px;
	right: 10px;

	svg {
		color: ${(props) => props.theme.colors.backgroundSecondary};
		width: 28px;
		height: 28px;

		&:hover {
			opacity: 0.8;
			cursor: pointer;
		}
	}
`;

export default function AboutMe(props) {
	const [githubUserData, setGithubUserData] = useState({});
	console.log("🚀 ~ file: AboutMe.jsx:267 ~ AboutMe ~ githubUserData", githubUserData);

	useEffect(() => {
		async function fetchGithubStats() {
			const response = await fetch("https://api.github.com/users/glaysonvisgueira");
			const json = await response.json();
			setGithubUserData(json);
		}
		fetchGithubStats();
	}, []);

	// followers_url  //link
	// following_url  //link
	// repos_url      //link

	// name
	// bio
	//login
	//html_url

	// followers
	// following
	// public_repos

	return (
		<WrapperAboutMe>
			<div className="container">
				<div className="left-view">
					<ScrollAnimation animateIn="fadeIn" animateOnce delay={200}>
						<GithubStatsCard>
							<div className="background" />
							<div className="img">
								<Image src="/img/user-photo.jpg" alt="Desenvolvedor Glayson Visgueira" layout="fill" objectFit="cover" className="image-rounded" />
							</div>
							<div className="content">
								<h3>{githubUserData?.name}</h3>
								<a href={githubUserData?.html_url} target="_blank">
									@{githubUserData?.login}
								</a>
								<p>{githubUserData?.bio}</p>
								<div className="github-stats">
									<div className="stats">
										<p>{githubUserData?.followers}</p>
										<span>Seguidores</span>
									</div>
									<div className="stats">
										<p>{githubUserData?.following}</p>
										<span>Seguindo</span>
									</div>
									<div className="stats">
										<p>{githubUserData?.public_repos}</p>
										<span>Repositórios</span>
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

						<div className="tech-and-cv">
							<SocialNetworkRowStack />
							<ButtonCV href={curriculoPTBR} target="_blank">
								Download CV
							</ButtonCV>
						</div>
					</ScrollAnimation>
				</div>
			</div>
			<div className="skills">{/* <StackTech /> */}</div>
		</WrapperAboutMe>
	);
}
