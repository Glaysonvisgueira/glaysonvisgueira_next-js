import React from "react";
import styled from "styled-components";

//Styled-components
import { TitleSection, ContainerTitleSection } from "@/styles/ui";
//Custom components
import DivGradient from "@/components/DivGradient";
import StackTechs from "@/components/StackTechs";

//Ícones
import { FolderBriefcase } from "@styled-icons/fluentui-system-filled/FolderBriefcase";

const TitlePage = styled.h1`
	color: ${(props) => props.theme.colors.branding};
	font-size: 50px;
	font-weight: 700;
`;

export default function Portifolio() {
	return (
		<>
			<ContainerTitleSection>
				<FolderBriefcase />
				<TitleSection>Portifólio</TitleSection>
			</ContainerTitleSection>

			<StackTechs />
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
