import React, { useContext } from "react";
import styled from "styled-components";

//Custom components
import TimelineExperienciaFormacao from "@/components/TimelineExperienciaFormacao";

//Contexto
import { SettingsContext } from "@/context/SettingsContext";

//Styled-components
import { TitleSection, ContainerTitleSection } from "@/styles/ui";

const SectionExperiencia = styled.section`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	padding-top: 60px;
	width: 100%;
	min-height: 100vh;
`;

export default function Experiencia() {
	const { language } = useContext(SettingsContext);
	return (
		<SectionExperiencia id="section-experiencia">
			<ContainerTitleSection>
				<TitleSection>{language.experiencePage.title}</TitleSection>
			</ContainerTitleSection>
			<TimelineExperienciaFormacao />
		</SectionExperiencia>
	);
}
