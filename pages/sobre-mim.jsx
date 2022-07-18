import React from "react";
import styled from "styled-components";
//import ScrollAnimation from "react-animate-on-scroll";

//Styled icons
import { NotepadPerson } from "@styled-icons/fluentui-system-filled/NotepadPerson";

//Styled-components
import { TitleSection, ContainerTitleSection } from "@/styles/ui";

//Custom components
import SocialNetworkRowStack from "@/components/SocialNetworkRowStack";

const ContainerBoxMd = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 60%;
	min-height: 400px;
	padding: 20px;
	background-color: ${(props) => props.theme.colors.backgroundSecondary};
	border-radius: 8px;
	transition: all 0.3s ease;
	flex-direction: row;
	//background-color: #ccc;

	.about-me-text-container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-direction: column;
		font-size: 16px;
		color: ${(props) => props.theme.colors.body};
		text-align: center;
		flex: 0.8;
		margin-left: 20px;
		//background-color: #ccc;
		height: 100%;
	}

	.image-text {
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		height: 100%;
	}

	.photo-container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-direction: column;
		width: 300px;
		height: 100%;

		.photo {
			width: 280px;
			height: 280px;
			border: 4px solid ${(props) => props.theme.colors.branding};
			border-radius: 50%;
		}
	}

	@media (max-width: 1600px) {
		width: 80%;
	}
`;

const ButtonDownloadCV = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	//margin-top: 20px;
	height: 38px;
	//width: 200px;
	width: 100%;
	border-radius: 4px;
	background-color: ${(props) => props.theme.colors.branding};
	color: ${(props) => props.theme.colors.background};

	&:hover {
		cursor: pointer;
		opacity: 0.8;
	}
`;

export default function SobreMim() {
	return (
		<>
			<ContainerTitleSection>
				<NotepadPerson />
				<TitleSection>Sobre mim</TitleSection>
			</ContainerTitleSection>

			{/*<ScrollAnimation animateIn="slideInLeft" animateOnce>*/}
			<ContainerBoxMd>
				<div className="photo-container">
					<div className="photo"></div>

					<ButtonDownloadCV>Download CV</ButtonDownloadCV>
				</div>

				<div className="about-me-text-container">
					<TitleSection>Glayson Visgueira</TitleSection>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
					make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
					containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
					<SocialNetworkRowStack />
				</div>
			</ContainerBoxMd>
			{/*</ScrollAnimation> */}
		</>
	);
}
