import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Lottie from "react-lottie";
import { useTheme } from "styled-components";

import AnimationYellowBackground from "@/public/lotties/landing-page-yellow.json";
import AnimationLightBackground from "@/public/lotties/landing-page-light.json";

const ContainerLottie = styled.div`
	width: 800px;
	height: 800px;
	transition: all 0.3s ease;
	/* background-image: url("/img/bg_circle.png"); */
	background-image: ${(props) => props.theme.imageBlur};
	background-position: center; /* Center the image */
	background-repeat: no-repeat; /* Do not repeat the image */
	background-size: contain; /*Resize the background image to cover the entire container */

	@media (max-width: 1400px) {
		width: 600px;
		height: 600px;
	}

	@media (max-width: 1200px) {
		width: 500px;
		height: 500px;
	}

	@media (max-width: 900px) {
		width: 400px;
		height: 400px;
	}

	@media (max-width: 425px) {
		width: 300px;
		height: 300px;
	}
`;

const AnimationsToShow = {
	dark: AnimationYellowBackground,
	light: AnimationLightBackground,
};

export default function LogoReact() {
	const theme = useTheme();
	const [isStopped] = useState(false);
	const [isPaused] = useState(false);

	var defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: AnimationsToShow[theme.name],
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	return (
		<ContainerLottie>
			<Lottie options={defaultOptions} height={"100%"} width={"100%"} isStopped={isStopped} isPaused={isPaused} isClickToPauseDisabled={true} />
		</ContainerLottie>
	);
}
