import React from "react";
import styled from "styled-components";

import TimelinePortifolio from "@/components/TimelinePortifolio";
//Styled-components
import { TitleSection } from "@/styles/ui";

const TitlePage = styled.h1`
	color: ${(props) => props.theme.colors.branding};
	font-size: 50px;
	font-weight: 700;
`;

export default function Portifolio() {
	const [checked, setChecked] = React.useState(true);

	const handleChange = () => {
		setChecked((prev) => !prev);
	};

	return (
		<>
			<TitleSection>Portifólio</TitleSection>
			<TimelinePortifolio />
		</>
	);
}
