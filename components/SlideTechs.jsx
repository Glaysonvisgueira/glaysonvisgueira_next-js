import React from "react";
import styled from "styled-components";

import { Amazonaws } from "@styled-icons/simple-icons/Amazonaws";
import { GoogleCloud } from "@styled-icons/boxicons-logos/GoogleCloud";
import { Firebase } from "@styled-icons/boxicons-logos/Firebase";
import { Mongodb } from "@styled-icons/simple-icons/Mongodb";
import { Postgresql } from "@styled-icons/simple-icons/Postgresql";
import { Sqlite } from "@styled-icons/simple-icons/Sqlite";
import { Javascript } from "@styled-icons/boxicons-logos/Javascript";
import { Java } from "@styled-icons/fa-brands/Java";
import { ReactLogo } from "@styled-icons/boxicons-logos/ReactLogo";
import { Nextdotjs } from "@styled-icons/simple-icons/Nextdotjs";
import { Python } from "@styled-icons/boxicons-logos/Python";
import { Flutter } from "@styled-icons/boxicons-logos/Flutter";
import { Django } from "@styled-icons/boxicons-logos/Django";
import { Nodejs } from "@styled-icons/boxicons-logos/Nodejs";
import { LogoVercel } from "@styled-icons/ionicons-solid/LogoVercel";
import { Netlify } from "@styled-icons/simple-icons/Netlify";
import { Materialui } from "@styled-icons/simple-icons/Materialui";
import { Styledcomponents } from "@styled-icons/simple-icons/Styledcomponents";
import { Css3 } from "@styled-icons/boxicons-logos/Css3";
import { Html5 } from "@styled-icons/boxicons-logos/Html5";
import { Amazons3 } from "@styled-icons/simple-icons/Amazons3";
import { Git } from "@styled-icons/boxicons-logos/Git";
import { LogoBitbucket } from "@styled-icons/ionicons-solid/LogoBitbucket";
import { GithubOutline } from "@styled-icons/evaicons-outline/GithubOutline";
import { Api } from "@styled-icons/material-rounded/Api";
import { Oracle } from "@styled-icons/simple-icons/Oracle";
import { Bootstrap } from "@styled-icons/boxicons-logos/Bootstrap";
import { TailwindCss } from "@styled-icons/boxicons-logos/TailwindCss";
import { Mysql } from "@styled-icons/simple-icons/Mysql";
import { Linux } from "@styled-icons/fa-brands/Linux";
import { Windows } from "@styled-icons/boxicons-logos/Windows";
import { Android } from "@styled-icons/boxicons-logos/Android";
import { Ios } from "@styled-icons/simple-icons/Ios";
import { Typescript } from "@styled-icons/simple-icons/Typescript";
import { Sass } from "@styled-icons/fa-brands/Sass";
import { Jquery } from "@styled-icons/boxicons-logos/Jquery";
import { Figma } from "@styled-icons/boxicons-logos/Figma";
import { Adobephotoshop } from "@styled-icons/simple-icons/Adobephotoshop";
import { Visualstudiocode } from "@styled-icons/simple-icons/Visualstudiocode";
import { Trello } from "@styled-icons/boxicons-logos/Trello";

const ContainerTechsSlide = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	flex-direction: row;

	svg {
		color: #ccc;
		width: 38px;
		height: 38px;
	}
`;

const Slider = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background: white;
	//box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);
	height: 100px;
	//margin: auto;
	overflow: hidden;
	position: relative;

	@keyframes scroll {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(calc(-250px * 7));
		}
	}

	&::before,
	&::after {
		background: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
		content: "";
		height: 100px;
		position: absolute;
		width: 200px;
		z-index: 2;
	}

	&::after {
		right: 0;
		top: 0;
		transform: rotateZ(180deg);
	}

	&::before {
		left: 0;
		top: 0;
	}

	.slide-track {
		animation: scroll 3s linear infinite;
		display: flex;
		width: calc(250px * 14);
	}

	.slide {
		height: 100px;
		width: 250px;
	}
`;

export default function SlideTechs() {
	return (
		<ContainerTechsSlide>
			<Slider>
				<div class="slide-track">
					<div className="slide">
						<Adobephotoshop />
					</div>
					<div className="slide">
						<Amazons3 />
					</div>
					<div className="slide">
						<Visualstudiocode />
					</div>
					<div className="slide">
						<Adobephotoshop />
					</div>
					<div className="slide">
						<Adobephotoshop />
					</div>
					<div className="slide">
						<Adobephotoshop />
					</div>
					<div className="slide">
						<Adobephotoshop />
					</div>
					<div className="slide">
						<Adobephotoshop />
					</div>
					<div className="slide">
						<Adobephotoshop />
					</div>
					<div className="slide">
						<Adobephotoshop />
					</div>
					<div className="slide">
						<Adobephotoshop />
					</div>
					<div className="slide">
						<Adobephotoshop />
					</div>
					<div className="slide">
						<Adobephotoshop />
					</div>
					<div className="slide">
						<Adobephotoshop />
					</div>
					<div className="slide">
						<Adobephotoshop />
					</div>
					<div className="slide">
						<Adobephotoshop />
					</div>
					<div className="slide">
						<Adobephotoshop />
					</div>
					<div className="slide">
						<Adobephotoshop />
					</div>
					<div className="slide">
						<Adobephotoshop />
					</div>
					<div className="slide">
						<Adobephotoshop />
					</div>
					<div className="slide">
						<Adobephotoshop />
					</div>
				</div>
			</Slider>
		</ContainerTechsSlide>
	);
}

/*
@mixin white-gradient {
	background: linear-gradient(to right,  rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);
}

$animationSpeed: 40s;

// Animation
@keyframes scroll {
	0% { transform: translateX(0); }
	100% { transform: translateX(calc(-250px * 7))}
}
 */
