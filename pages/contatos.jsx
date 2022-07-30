import React from "react";
import styled from "styled-components";

//Styled-components
import { TitleSection, ContainerTitleSection } from "@/styles/ui";

//Ícones
import { ContactCardLink } from "@styled-icons/fluentui-system-filled/ContactCardLink";

const ContainerContact = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	flex-direction: column;
	width: 100%;
	min-height: 400px;
	background-color: ${(props) => props.theme.colors.backgroundSecondary};
	transition: all 0.3s ease;
`;

const ContentContainer = styled.div`
	width: 100%;
	height: 100%;
	background-color: #ccc;
`;

export default function Contatos() {
	return (
		<ContainerContact>
			<ContainerTitleSection>
				<ContactCardLink />
				<TitleSection>Contatos</TitleSection>
			</ContainerTitleSection>
			<ContentContainer></ContentContainer>
		</ContainerContact>
	);
}
