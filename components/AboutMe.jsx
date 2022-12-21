import styled from "styled-components";
import Image from "next/image";

//Ícones
import { Github } from "@styled-icons/bootstrap/Github";

const WrapperAboutMe = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 60%;
	height: 100%;
	//background-color: red;

	.container {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: row;
		width: 100%;
		height: 100%;

		.left-view {
			display: flex;
			align-items: flex-start;
			justify-content: flex-start;
			flex-direction: column;
			width: 100%;
			height: 100%;
		}
		.right-view {
			display: flex;
			align-items: flex-start;
			justify-content: flex-start;
			flex-direction: column;
			width: 100%;
			height: 100%;
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

export const BodyText = styled.p`
	color: ${(props) => props.theme.colors.body};
	font-size: ${(props) => props.theme.fontSizes.md};
	text-align: justify;

	strong {
		font-weight: 700;
		color: ${(props) => props.theme.colors.branding};
	}

	@media (max-width: 600px) {
		font-size: ${(props) => props.theme.fontSizes.sm};
	}
`;

export default function AboutMe(props) {
	return (
		<WrapperAboutMe>
			<div className="container">
				<div className="left-view">
					<GithubStatsCard>
						<Github />
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
							</div>
						</div>
					</GithubStatsCard>
				</div>

				<div className="right-view">
					<h3>Sobre mim</h3>
					<BodyText>
						Bacharel em <strong>Sistemas de informações</strong> pelo <strong>Centro Universitário Maurício de Nassau</strong>, com graduação finalizada no primeiro semestre de 2021. Trabalhei durante 9 anos na empresa Claudino
						S/A, nos quais 8 anos foram na área administrativa e a 1 ano no setor de TI da empresa, mais especificamente na equipe responsável pelo Ecommerce da empresa, onde diariamente realizo manutenções ou desenvolvimento de
						novas funcionalidades que utilizam as tecnologias: <strong>Python</strong>, <strong>Django</strong>, <strong>Django REST Framework</strong>, <strong>React.js</strong>, <strong>Next.Js</strong> e
						<strong> PostgreSQL</strong>.
					</BodyText>

					<BodyText>
						Possuo maior aptidão para área de <strong>Front-end</strong> e conhecimentos sólidos na stack: <strong>React.Js</strong>, <strong>Next.Js</strong>, <strong>HTML</strong>, <strong>Css</strong> e
						<strong> Styled components</strong>.
					</BodyText>

					<BodyText>
						Atualmente adquirindo conhecimentos em <strong>Dart</strong> e <strong>Flutter</strong> para desenvolvimento de aplicações para multiplataformas. Possuo inglês intermediário (autodidata) e diariamente absorvendo
						conhecimentos de <strong>design patterns</strong> de <strong>Clean Code/Architecture</strong>. Sou proativo, curioso e motivado em encontrar soluções para problemas utilizando tecnologia.
					</BodyText>
					<p>Download CV</p>
				</div>
			</div>
			<div className="skills"></div>
		</WrapperAboutMe>
	);
}
