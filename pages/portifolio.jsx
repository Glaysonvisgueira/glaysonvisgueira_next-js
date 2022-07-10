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

const ContainerGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	width: 60%;
	gap: 20px;
	transition: all 0.3s ease;

	@media (max-width: 1600px) {
		width: 85%;
	}

	@media (max-width: 900px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

const WrapperProjectCard = styled.div`
	width: 100%;
	height: 200px;
	background-color: ${(props) => props.theme.colors.backgroundSecondary};
	border-radius: 8px;
	border: 2px solid ${(props) => props.theme.colors.branding};
	//margin: 20px;
	transition: all 0.3s ease;

	&:hover {
		transform: scale(1.1);
		//cursor: pointer;
		z-index: 1;
	}
`;

export default function Portifolio() {
	return (
		<>
			<ContainerTitleSection>
				<FolderBriefcase />
				<TitleSection>Portifólio</TitleSection>
			</ContainerTitleSection>

			<ContainerGrid>
				<WrapperProjectCard />
				<WrapperProjectCard />
				<WrapperProjectCard />
				<WrapperProjectCard />
				<WrapperProjectCard />
				<WrapperProjectCard />
				<WrapperProjectCard />
				<WrapperProjectCard />
			</ContainerGrid>
			{/*<StackTechs />*/}
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
