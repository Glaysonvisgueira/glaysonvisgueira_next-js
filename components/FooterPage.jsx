import styled from "styled-components";

const FooterContainer = styled.footer`
	width: 100%;
	height: 200px;
	background-color: ${(props) => props.theme.colors.background};
`;

export default function FooterPage(props) {
	return <FooterContainer></FooterContainer>;
}
