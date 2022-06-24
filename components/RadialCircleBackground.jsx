import styled from "styled-components";
import { useTheme } from "styled-components";

const RadialCircle = styled.div`
	background-image: url("/img/bg.jpg");
	background-repeat: no-repeat;
	background-position: center;
`;

export default function RadialCircleBackground() {
	const theme = useTheme();

	return <RadialCircle />;
}
