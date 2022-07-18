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
	padding: 20px;
	background-color: ${(props) => props.theme.colors.backgroundSecondary};
	border-radius: 8px;
	transition: all 0.3s ease;
	flex-direction: column;
	//background-color: #ccc;

	.about-me-text {
		font-size: 16px;
		color: ${(props) => props.theme.colors.body};
		text-align: center;
		flex: 0.5;
		margin-left: 20px;
	}

	.image-text {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.photo {
		width: 300px;
		height: 300px;
		border-radius: 50%;
		border: 4px solid ${(props) => props.theme.colors.branding};
	}

	@media (max-width: 1600px) {
		width: 80%;
	}
`;

const ButtonDownloadCV = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 38px;
	width: 200px;
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

			<ContainerBoxMd>
				<div className="image-text">
					<div className="photo"></div>
					<span className="about-me-text">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
						to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
						sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
					</span>
				</div>
				<ButtonDownloadCV>Download CV</ButtonDownloadCV>
				<SocialNetworkRowStack />
			</ContainerBoxMd>
		</>
	);
}
