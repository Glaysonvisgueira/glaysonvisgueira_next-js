import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Lottie from "react-lottie";
import { useTheme } from "styled-components";

import AnimationYellowBackground from "@/public/lotties/landing-page-yellow.json";
import AnimationGreenBackground from "@/public/lotties/landing-page-green.json";
import AnimationOrangeBackground from "@/public/lotties/landing-page-orange.json";
import AnimationPurpleBackground from "@/public/lotties/landing-page-purple.json";
import AnimationRedBackground from "@/public/lotties/landing-page-red.json";
import AnimationLightBlueBackground from "@/public/lotties/landing-page-lightblue.json";

var defaultOptions = {
	loop: true,
	autoplay: true,
	animationData: AnimationYellowBackground,
	rendererSettings: {
		preserveAspectRatio: "xMidYMid slice",
	},
};

const ContainerLottie = styled.div`
	width: 800px;
	height: 800px;
	transition: all 0.3s ease;
	//z-index: 1;

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

export default function LogoReact() {
	const theme = useTheme();
	const [isStopped] = useState(false);
	const [isPaused] = useState(false);

	return (
		<ContainerLottie>
			<Lottie options={defaultOptions} height={"100%"} width={"100%"} isStopped={isStopped} isPaused={isPaused} isClickToPauseDisabled={true} />
		</ContainerLottie>
	);
}
