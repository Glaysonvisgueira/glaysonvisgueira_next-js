import React from "react";
import styled from "styled-components";
//import ScrollAnimation from "react-animate-on-scroll";

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
	//background-color: ${(props) => props.theme.colors.backgroundSecondary};
	transition: all 0.3s ease;

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

	.header {
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;
		flex-direction: column;
		//background-color: #ccc;
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

	&:hover {
		cursor: pointer;
		opacity: 0.8;
	}
`;

export default function SobreMim(props) {
	return (
		<ContainerSection>
			<ContainerSobreMimHeader>
				<div className="photo"></div>
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
				<BodyText>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
					make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
					containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
				</BodyText>
			</div>

			<WrapperTechs>
				<div className="grid">
					<ProgressBarTech techName="Javascript" percent={10} />
					<ProgressBarTech techName="Python" percent={60} />
					<ProgressBarTech techName="Node.JS" percent={70} />
					<ProgressBarTech techName="React.JS" percent={90} />
					<ProgressBarTech techName="Next.JS" percent={90} />
					<ProgressBarTech techName="MongoDB" percent={80} />
					<ProgressBarTech techName="PostgreeSQL" percent={80} />
					<ProgressBarTech techName="REST API" percent={90} />
					<ProgressBarTech techName="React Native" percent={88} />
					<ProgressBarTech techName="REST API" percent={88} />
				</div>
			</WrapperTechs>
		</ContainerSection>
	);
}

/*<ScrollAnimation animateIn="slideInLeft" animateOnce>
			</ScrollAnimation> */
