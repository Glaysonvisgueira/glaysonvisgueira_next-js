import styled from "styled-components";
import { Parallax } from "react-parallax";

const ContainerParallaxDiv = styled.div`
	width: 100%;
	height: 450px;

	@media (max-width: 601px) {
		height: 300px;
	}

	@media (max-width: 425px) {
		height: 250px;
	}
`;

export default function ParallaxTransitionDiv() {
	return (
		<ContainerParallaxDiv>
			<Parallax bgImage="img/man-tech.jpg" bgImageAlt="Homem com óculos de realidade visual" strength={100} style={{ width: "100%", height: "100%" }} />
		</ContainerParallaxDiv>
	);
}
