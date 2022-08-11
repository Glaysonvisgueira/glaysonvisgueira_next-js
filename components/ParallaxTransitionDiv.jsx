import styled from "styled-components";
import { Parallax } from "react-parallax";

const ContainerParallaxDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 400px;
	position: relative;

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
			<Parallax bgImage="img/pc-code.jpg" bgImageAlt="Homem com óculos de realidade visual" strength={1000} style={{ width: "100%", height: "100%" }}></Parallax>
		</ContainerParallaxDiv>
	);
}
