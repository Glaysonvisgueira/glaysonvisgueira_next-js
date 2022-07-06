import React from "react";
import styled from "styled-components";

//Styled-components
import { TitleSection, ContainerTitleSection } from "@/styles/ui";
//Custom components
import RadialCircleBackground from "@/components/RadialCircleBackground";

//Ícones
import { FolderBriefcase } from "@styled-icons/fluentui-system-filled/FolderBriefcase";

const TitlePage = styled.h1`
	color: ${(props) => props.theme.colors.branding};
	font-size: 50px;
	font-weight: 700;
`;

const ContainerVideoBackground = styled.div`
	height: 100%;
	width: 100%;
	opacity: 0.2;
	object-fit: cover;
	position: absolute;
`;

export default function Portifolio() {
	return (
		<>
			<ContainerTitleSection>
				<FolderBriefcase />
				<TitleSection>Portifólio</TitleSection>
			</ContainerTitleSection>
		</>
	);
}

/*
<ContainerVideoBackground>
				<video autoPlay loop muted>
					<source src="videos/circuit.mp4" type="video/mp4" />
				</video>
			</ContainerVideoBackground>
*/
