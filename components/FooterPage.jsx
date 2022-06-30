import styled from "styled-components";

const FooterContainer = styled.footer`
	display: flex;
	align-content: center;
	justify-content: center;
	width: 100%;
	height: 200px;
	background-color: ${(props) => props.theme.colors.branding};

	div {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: 1fr;
		grid-column-gap: 20px;
		grid-row-gap: 0px;

		.div1 {
			grid-area: 1 / 4 / 2 / 5;
			background-color: #000;
		}
		.div2 {
			grid-area: 1 / 1 / 2 / 2;
		}
		.div3 {
			grid-area: 1 / 2 / 2 / 3;
		}
		.div4 {
			grid-area: 1 / 3 / 2 / 4;
		}
	}
`;

export default function FooterPage(props) {
	return (
		<FooterContainer>
			<div className="div1">a</div>
			<div className="div2">b</div>
			<div className="div3">c</div>
			<div className="div4">d</div>
		</FooterContainer>
	);
}
/*
<BodyText>Build 37c01km</BodyText>
<BodyText>Build</BodyText>
 */
