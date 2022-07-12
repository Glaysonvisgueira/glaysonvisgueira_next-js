import React from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

//Styled icons
import { NotepadPerson } from "@styled-icons/fluentui-system-filled/NotepadPerson";

//Styled-components
import { TitleSection, ContainerTitleSection } from "@/styles/ui";

const ContainerBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 60%;
	height: 700px;
	background-color: ${(props) => props.theme.colors.backgroundSecondary};
	border-radius: 8px;
	transition: all 0.3s ease;
	//border: 4px solid ${(props) => props.theme.colors.branding};

	@media (max-width: 1600px) {
		width: 80%;
	}

	@media (max-width: 1600px) {
		width: 85%;
	}

	.left-card {
		flex: 0.3;
		height: 100%;
		//border: 2px solid #ccc;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20px;
		flex-direction: column;

		.photo {
			width: 200px;
			height: 200px;
			border-radius: 50%;
			border: 4px solid ${(props) => props.theme.colors.branding};
		}
	}

	.right-card {
		flex: 0.7;
		height: 100%;
	}
`;

const ButtonDownloadCV = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 38px;
	width: 100%;
	border-radius: 4px;
	background-color: ${(props) => props.theme.colors.branding};
	color: ${(props) => props.theme.colors.background};
`;

export default function SobreMim() {
	return (
		<>
			<ContainerTitleSection>
				<NotepadPerson />
				<TitleSection>Sobre mim</TitleSection>
			</ContainerTitleSection>
			<ContainerBox>
				<div className="left-card">
					<div className="photo"></div>
					<ButtonDownloadCV>Download CV</ButtonDownloadCV>
				</div>
				<div className="right-card"></div>
			</ContainerBox>
		</>
	);
}
