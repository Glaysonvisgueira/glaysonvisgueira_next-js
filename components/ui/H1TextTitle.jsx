import React from "react";
import styled from "styled-components";

const Text = styled.h1`
	color: ${(props) => props.theme.colors.title};
`;

export default function H1TextTitle(props) {
	return <Text>{props.text}</Text>;
}
