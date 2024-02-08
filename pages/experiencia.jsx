import React, { useContext } from "react";
import styled from "styled-components";

//Custom components
import TimelineExperienciaFormacao from "@/components/TimelineExperienciaFormacao";
import TitlePageSection from "@/components/TitlePageSection";

//Contexto
import { SettingsContext } from "@/context/SettingsContext";

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
			<TitlePageSection title={language.experiencePage.title} />
			<TimelineExperienciaFormacao />
		</SectionExperiencia>
	);
}
