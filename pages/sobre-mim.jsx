import React from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

//Styled icons
import { NotepadPerson } from "@styled-icons/fluentui-system-filled/NotepadPerson";
import { MailSend } from "@styled-icons/boxicons-regular/MailSend";
import { LocationOn } from "@styled-icons/material-sharp/LocationOn";
import { Phone } from "@styled-icons/evaicons-solid/Phone";

//Custom components
import ProgressBarTech from "@/components/ProgressBarTech";

const ContainerSection = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	width: 100%;
	min-height: 400px;
	transition: all 0.3s ease;
	//background-color: ${(props) => props.theme.colors.backgroundSecondary};

	.sobre {
		display: flex;
		align-items: flex-start;
		justify-content: center;
		flex-direction: column;
		width: 40%;
		margin-top: 30px;

		.divider-margin {
			margin-top: 20px;
		}

		.stack-icon-text {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: row;

			svg {
				width: 28px;
				height: 28px;
				color: ${(props) => props.theme.colors.branding};
				margin-right: 10px;
			}
		}

		@media (max-width: 1200px) {
			width: 60%;
		}

		@media (max-width: 900px) {
			margin-top: 0px;
			width: 80%;
			align-items: center;
		}

		@media (max-width: 425px) {
			width: 85%;
		}
	}
`;

const ContainerSobreMimHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	width: 100%;
	margin-top: 40px;
	margin-bottom: 30px;

	@media (max-width: 900px) {
		flex-direction: column;
	}

	.photo-wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;

		.photo {
			width: 220px;
			height: 220px;
			border: 6px solid ${(props) => props.theme.colors.branding};
			border-radius: 50%;

			@media (max-width: 900px) {
				margin-bottom: 20px;
				width: 170px;
				height: 170px;
			}
		}
	}

	.header {
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;
		flex-direction: column;
		height: 100%;
		margin-left: 60px;

		div {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: row;
			margin-top: 3px;
			margin-bottom: 3px;

			svg {
				width: 14px;
				height: 14px;
				margin-right: 10px;
				color: ${(props) => props.theme.colors.branding};
			}
		}

		@media (max-width: 900px) {
			margin-left: 0px;
			align-items: center;
			justify-content: center;
		}
	}
`;

const Title = styled.h3`
	font-weight: 900;
	color: ${(props) => props.theme.colors.branding};
	font-size: 26px;

	@media (max-width: 900px) {
		font-size: 18px;
	}
`;

const SubTitle = styled.h3`
	font-weight: 700;
	color: ${(props) => props.theme.colors.branding};
	font-size: 18px;
	margin-bottom: 20px;
	@media (max-width: 900px) {
		font-size: 16px;
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

const WrapperTechs = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 40px;
	//margin-bottom: 40px;

	.grid {
		display: grid;
		width: 100%;
		margin: auto;
		//background-color: #ccc;
		grid-template-columns: repeat(2, 1fr);
		transition: all 0.3s ease;
		gap: 15px;

		@media (max-width: 650px) {
			grid-template-columns: repeat(1, 1fr);
		}
	}
`;

const ButtonDownloadCV = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	//margin-top: 20px;
	height: 38px;
	//width: 200px;
	margin-top: 20px;
	width: 100%;
	border-radius: 4px;
	background-color: ${(props) => props.theme.colors.branding};
	color: ${(props) => props.theme.colors.background};
	font-weight: 900;

	&:hover {
		cursor: pointer;
		opacity: 0.8;
	}

	@media (max-width: 900px) {
		margin-top: 0px;
		margin-bottom: 20px;
	}
`;

export default function SobreMim(props) {
	return (
		<ScrollAnimation animateIn="fadeIn" animateOnce>
			<ContainerSection>
				<ContainerSobreMimHeader>
					<div className="photo-wrapper">
						<div className="photo"></div>
						<ButtonDownloadCV>Download CV</ButtonDownloadCV>
					</div>
					<div className="header">
						<Title>Glayson Visgueira</Title>
						<SubTitle>Front-end developer</SubTitle>
						<div>
							<MailSend />
							<BodyText>glaysonwow@gmail.com</BodyText>
						</div>
						<div>
							<LocationOn />
							<BodyText>Teresina - PI</BodyText>
						</div>
						<div>
							<Phone />
							<BodyText>86 99927-7101</BodyText>
						</div>
					</div>
				</ContainerSobreMimHeader>
				<div className="sobre">
					<div className="stack-icon-text">
						<NotepadPerson />
						<Title>Sobre mim</Title>
					</div>
					<div className="divider-margin" />
					<BodyText style={{ marginTop: "20px", marginBottom: "20px" }}>
						Bacharel em <strong>Sistemas de informações</strong> pelo <strong>Centro Universitário Maurício de Nassau</strong>, com graduação finalizada no primeiro semestre de 2021. Trabalhei durante 9 anos na empresa Claudino
						S/A, nos quais 8 anos foram na área administrativa e a 1 ano no setor de TI da empresa, mais especificamente na equipe responsável pelo Ecommerce da empresa, onde diariamente realizo manutenções ou desenvolvimento de
						novas funcionalidades que utilizam as tecnologias: <strong>Python</strong>, <strong>Django</strong>, <strong>Django REST Framework</strong>, <strong>React.js</strong>, <strong>Next.Js</strong> e
						<strong>PostgreSQL</strong>.
						<BodyText style={{ marginTop: "20px", marginBottom: "20px" }}>
							Possuo maior aptidão para área de <strong>Front-end</strong> e conhecimentos sólidos na stack: <strong>React.Js</strong>, <strong>Next.Js</strong>, <strong>HTML</strong>, <strong>Css</strong> e
							<strong>Styled components</strong>.
						</BodyText>
						<BodyText style={{ marginTop: "20px", marginBottom: "20px" }}>
							Atualmente adquirindo conhecimentos em <strong>Dart</strong> e <strong>Flutter</strong> para desenvolvimento de aplicações para multiplataformas. Possuo inglês intermediário (autodidata) e diariamente absorvendo
							conhecimentos de <strong>design patterns</strong> de <strong>Clean Code/Architecture</strong>. Sou proativo, curioso e motivado em encontrar soluções para problemas utilizando tecnologia.
						</BodyText>
					</BodyText>
				</div>

				<Title style={{ marginTop: 30, marginBottom: 10 }}>Skills</Title>

				<WrapperTechs>
					<div className="grid">
						<ProgressBarTech techName="Next.JS" percent={90} />
						<ProgressBarTech techName="Javascript" percent={90} />
						<ProgressBarTech techName="React.JS" percent={90} />
						<ProgressBarTech techName="REST API" percent={90} />
						<ProgressBarTech techName="React Native" percent={90} />
						<ProgressBarTech techName="CSS" percent={80} />
						<ProgressBarTech techName="Styled Components" percent={80} />
						<ProgressBarTech techName="Typescript" percent={80} />
						<ProgressBarTech techName="SEO" percent={80} />
						<ProgressBarTech techName="MongoDB" percent={70} />
						<ProgressBarTech techName="Node.JS" percent={70} />
						<ProgressBarTech techName="PostgreeSQL" percent={70} />
						<ProgressBarTech techName="Python" percent={60} />
						<ProgressBarTech techName="Django" percent={60} />
						<ProgressBarTech techName="Expo" percent={60} />
						<ProgressBarTech techName="Flutter" percent={30} />
					</div>
				</WrapperTechs>
			</ContainerSection>
		</ScrollAnimation>
	);
}

/*<ScrollAnimation animateIn="slideInLeft" animateOnce>
			</ScrollAnimation> */
