import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Lottie from "react-lottie";

import ScrollDownLottie from "@/public/lotties/scroll-down.json";

const ContainerLottie = styled.div`
	width: 80px;
	height: 80px;
	transition: all 0.3s ease;
	z-index: 1;
	position: absolute;
	bottom: 40px;

	@media (max-width: 601px) {
		display: none;
	}
`;

export default function ScrollDownAnimation() {
	const [isStopped] = useState(false);
	const [isPaused] = useState(false);

	var defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: ScrollDownLottie,
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
