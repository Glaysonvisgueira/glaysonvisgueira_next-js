import React from "react";
import styled from "styled-components";

const Text = styled.h2`
	color: ${(props) => props.theme.colors.title};
	font-size: 16px;
`;

export default function H2TextTitle(props) {
	return <Text>{props.text}</Text>;
}
