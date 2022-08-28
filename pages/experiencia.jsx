import React from "react";
import styled from "styled-components";
import TimelineExperienciaFormacao from "@/components/TimelineExperienciaFormacao";

//Ícones
import { Timeline } from "@styled-icons/fluentui-system-regular/Timeline";

//Styled-components
import { TitleSection, ContainerTitleSection } from "@/styles/ui";

export default function Experiencia() {
	return (
		<>
			<ContainerTitleSection>
				<Timeline />
				<TitleSection>Formação, cursos e trabalhos</TitleSection>
			</ContainerTitleSection>
			<TimelineExperienciaFormacao />
		</>
	);
}
