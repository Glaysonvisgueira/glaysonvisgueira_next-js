import React, { useContext } from "react";
import styled from "styled-components";

//Custom components
import TimelineExperienciaFormacao from "@/components/TimelineExperienciaFormacao";

//Contexto
import { SettingsContext } from "@/context/SettingsContext";

//Styled-components
import { TitleSection, ContainerTitleSection } from "@/styles/ui";

export default function Experiencia() {
	const { language } = useContext(SettingsContext);
	return (
		<>
			<ContainerTitleSection>
				<TitleSection>{language.experiencePage.title}</TitleSection>
			</ContainerTitleSection>
			<TimelineExperienciaFormacao />
		</>
	);
}
