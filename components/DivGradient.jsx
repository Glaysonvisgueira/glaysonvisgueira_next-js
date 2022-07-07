import styled from "styled-components";

const ContainerDivGradient = styled.div`
	background-color: ${(props) => props.theme.colors.backgroundSecondary};
	width: 100%;
	height: 200px;
`;

export default function DivGradient() {
	return <ContainerDivGradient />;
}
