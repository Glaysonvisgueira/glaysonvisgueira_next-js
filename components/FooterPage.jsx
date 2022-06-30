import styled from "styled-components";

import { BodyText } from "@/styles/ui";

const FooterContainer = styled.footer`
	display: flex;
	align-content: center;
	justify-content: center;
	flex-direction: column;
	width: 100%;
	height: 200px;
	background-color: ${(props) => props.theme.colors.backgroundSecondary};

	#footer-text-container {
		display: flex;
		align-content: center;
		justify-content: space-between;
		width: 80%;
		margin-bottom: 10px;
		background: #ccc;
	}
`;

export default function FooterPage(props) {
	return (
		<FooterContainer>
			<div id="footer-text-container">
				<BodyText>Build 37c01km</BodyText>
				<BodyText>Build</BodyText>
			</div>
		</FooterContainer>
	);
}
