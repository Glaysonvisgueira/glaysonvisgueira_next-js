import React from "react";
import styled from "styled-components";

const Text = styled.p`
	color: ${(props) => props.theme.colors.body};
`;

export default function TextSubTitle(props) {
	return <Text>{props.text}</Text>;
}
