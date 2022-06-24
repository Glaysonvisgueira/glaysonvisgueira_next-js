import React from "react";
import styled from "styled-components";

//Styled-components
import { TitleSection } from "@/styles/ui";

//Custom components
import RadialCircleBackground from "@/components/RadialCircleBackground";

const TitlePage = styled.h1`
	color: ${(props) => props.theme.colors.branding};
	font-size: 50px;
	font-weight: 700;
`;

export default function Portifolio() {
	return (
		<>
			<TitleSection>Portifólio</TitleSection>
			<RadialCircleBackground />
		</>
	);
}
