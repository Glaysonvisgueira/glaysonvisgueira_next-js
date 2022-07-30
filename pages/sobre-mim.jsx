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
	align-items: flex-start;
	justify-content: flex-start;
	flex-direction: column;
	width: 100%;
	min-height: 400px;
	background-color: ${(props) => props.theme.colors.backgroundSecondary};
	transition: all 0.3s ease;
`;

const ContentContainer = styled.div`
	width: 100%;
	height: 100%;
	background-color: #ccc;
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

export default function SobreMim() {
	return (
		<ContainerBoxMd>
			<ContainerTitleSection>
				<NotepadPerson />
				<TitleSection>Sobre mim</TitleSection>
			</ContainerTitleSection>
			{/*<ScrollAnimation animateIn="slideInLeft" animateOnce>*/}
			{/*</ScrollAnimation> */}

			<ContentContainer></ContentContainer>
		</ContainerBoxMd>
	);
}
