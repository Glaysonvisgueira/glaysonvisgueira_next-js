import React, { useState } from "react";
import styled from "styled-components";
import Lottie from "react-lottie";

import ReactLottieJson from "@/public/lotties/landing-page.json";

const defaultOptions = {
	loop: true,
	autoplay: true,
	animationData: ReactLottieJson,
	rendererSettings: {
		preserveAspectRatio: "xMidYMid slice",
	},
};

const ContainerLottie = styled.div`
	width: 500px;
	height: 500px;
	z-index: 1;
	position: relative;

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
	const [isStopped] = useState(false);
	const [isPaused] = useState(false);

	return (
		<ContainerLottie>
			<Lottie options={defaultOptions} height={"100%"} width={"100%"} isStopped={isStopped} isPaused={isPaused} isClickToPauseDisabled={true} />
		</ContainerLottie>
	);
}
