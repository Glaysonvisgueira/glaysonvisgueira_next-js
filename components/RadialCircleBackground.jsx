import styled from "styled-components";

const RadialCircle = styled.div`
	//background: radial-gradient(circle, rgba(102, 102, 102, 1) 0%, rgba(12, 12, 12, 1) 100%);
	background: radial-gradient(#505050, #0c0c0c);
	width: 400px;
	height: 500px;
	opacity: 0.5;
	position: absolute;
	top: 0;
	left: 0;
`;

export default function RadialCircleBackground() {
	return <RadialCircle />;
}
