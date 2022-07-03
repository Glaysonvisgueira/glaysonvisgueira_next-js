import React from "react";
import styled from "styled-components";

//Styled-components
import { TitleSection, ContainerTitleSection } from "@/styles/ui";

//Ícones
import { ContactCardLink } from "@styled-icons/fluentui-system-filled/ContactCardLink";

export default function Contatos() {
	return (
		<>
			<ContainerTitleSection>
				<ContactCardLink />
				<TitleSection>Contatos</TitleSection>
			</ContainerTitleSection>
		</>
	);
}
