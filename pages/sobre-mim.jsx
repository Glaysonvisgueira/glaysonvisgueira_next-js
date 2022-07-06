import React from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

//Styled icons
import { NotepadPerson } from "@styled-icons/fluentui-system-filled/NotepadPerson";

//Styled-components
import { TitleSection, ContainerTitleSection } from "@/styles/ui";

export default function SobreMim() {
	return (
		<>
			<ContainerTitleSection>
				<NotepadPerson />
				<TitleSection>Sobre mim</TitleSection>
			</ContainerTitleSection>
		</>
	);
}
