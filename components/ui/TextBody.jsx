import React from "react";
import styled from "styled-components";

const Text = styled.p`
	color: ${(props) => props.theme.colors.body};
	text-align: center;
`;

export default function BodyTextTitle({ children }) {
	return <Text>{children}</Text>;
}
