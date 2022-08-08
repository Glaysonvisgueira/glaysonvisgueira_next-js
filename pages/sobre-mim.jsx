import React from "react";
import styled from "styled-components";
//import ScrollAnimation from "react-animate-on-scroll";

//Styled icons
import { NotepadPerson } from "@styled-icons/fluentui-system-filled/NotepadPerson";
import { MailSend } from "@styled-icons/boxicons-regular/MailSend";
import { LocationOn } from "@styled-icons/material-sharp/LocationOn";
import { Phone } from "@styled-icons/evaicons-solid/Phone";

//Styled-components
import { TitleSection, ContainerTitleSection, BodyText } from "@/styles/ui";

//Custom components
import ProgressBarTech from "@/components/ProgressBarTech";

const ContainerSection = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	width: 100%;
	min-height: 400px;
	background-color: ${(props) => props.theme.colors.backgroundSecondary};
	transition: all 0.3s ease;

	.sobre {
		display: flex;
		align-items: flex-start;
		justify-content: center;
		flex-direction: column;
		width: 40%;
		margin-top: 60px;
	}
`;

const ContainerSobreMimHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	width: 100%;
	height: 200px;

	.photo {
		width: 240px;
		height: 240px;
		border: 3px solid ${(props) => props.theme.colors.branding};
		border-radius: 50%;
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
	@media (max-width: 900px) {
		font-size: 16px;
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

const WrapperTechs = styled.div`
	display: grid;
	width: 60%;
	background-color: #ccc;
	grid-template-columns: repeat(2, 1fr);
	transition: all 0.3s ease;
	gap: 20px;
`;

export default function SobreMim(props) {
	return (
		<ContainerSection>
			<ContainerTitleSection>
				<NotepadPerson />
				<TitleSection>Sobre mim</TitleSection>
			</ContainerTitleSection>

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
				<Title>Sobre mim</Title>
				<BodyText>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
					make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
					containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
				</BodyText>
			</div>

			<WrapperTechs>
				<ProgressBarTech techName="Javascript" percent={40} />
				<ProgressBarTech techName="Python" percent={10} />
				<ProgressBarTech techName="Node.JS" percent={88} />
				<ProgressBarTech techName="React.JS" percent={88} />
				<ProgressBarTech techName="Next.JS" percent={88} />
				<ProgressBarTech techName="MongoDB" percent={88} />
				<ProgressBarTech techName="PostgreeSQL" percent={88} />
				<ProgressBarTech techName="REST API" percent={88} />
			</WrapperTechs>
		</ContainerSection>
	);
}

/*<ScrollAnimation animateIn="slideInLeft" animateOnce>
			</ScrollAnimation> */
