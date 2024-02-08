import React from "react";
import styled from "styled-components";

const ContainerTitleSection = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	margin-bottom: 30px;
	width: 60%;

	@media (max-width: 1600px) {
		width: 85%;
	}

	@media (max-width: 900px) {
		margin-top: 40px;
	}
`;

export const TitleSection = styled.h2`
	font-weight: 700;
	color: ${(props) => props.theme.colors.branding};
	font-size: 26px;
	padding-left: 5px;

	@media (max-width: 900px) {
		font-size: 18px;
	}
`;

export default function TitlePageSection({ title }) {
	return (
		<ContainerTitleSection>
			<TitleSection>&lt;{title} /&gt;</TitleSection>
		</ContainerTitleSection>
	);
}
