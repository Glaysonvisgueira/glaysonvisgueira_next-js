import React from "react";
import styled from "styled-components";

//Mui components
import Grow from "@mui/material/Grow";

//Styled-components
import { TitleSection } from "@/styles/ui";

export default function Contatos() {
	const [checked, setChecked] = React.useState(true);

	const handleChange = () => {
		setChecked((prev) => !prev);
	};

	return (
		<>
			<TitleSection>Contatos</TitleSection>
		</>
	);
}
