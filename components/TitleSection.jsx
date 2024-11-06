import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

import { BodyText } from "@/styles/ui";

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: ${({ alignTitle }) => (alignTitle === "left" ? "flex-start" : "center")};
	flex-direction: column;
	padding: 0 40px;

	${({ hasMarginBottom }) => hasMarginBottom && "margin-bottom: 90px; @media (max-width: 900px) {	margin-bottom: 40px; }"}

	.type-string {
		font-size: 32px;
		font-weight: 800;
		color: ${(props) => props.theme.colors.branding};
		margin-bottom: 10px;
		text-align: center;

		@media (max-width: 1200px) {
			font-size: 28px;
		}

		@media (max-width: 601px) {
			font-size: 26px;
		}
	}
`;

const TitleSection = ({ title, subtitle, hasMarginBottom, alignTitle }) => (
	<ScrollAnimation animateIn="fadeIn" animateOnce delay={200}>
		<Wrapper hasMarginBottom={hasMarginBottom} alignTitle={alignTitle}>
			<h2 className="type-string">{title}</h2>
			{subtitle && <BodyText centerText>{subtitle}</BodyText>}
		</Wrapper>
	</ScrollAnimation>
);

export default TitleSection;
