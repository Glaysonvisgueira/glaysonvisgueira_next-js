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

const ContainerTechs = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	//background-color: #ccc;
	width: 80%;

	svg {
		width: 38px;
		height: 38px;
		color: #4b4b4b;
		margin: 10px;
		transition: all 0.3s ease;

		&:hover {
			color: ${(props) => props.theme.colors.branding};
		}
	}

	.grid {
		display: grid;
		//width: auto;
		grid-template-columns: repeat(8, 1fr);
		transition: all 0.3s ease;

		//@media (max-width: 1400px) {
		//	grid-template-columns: repeat(4, 1fr);
		//}
	}
`;

export default function SlideTechs() {
	return (
		<ContainerTechs>
			<div className="grid">
				<Adobephotoshop />
				<Amazons3 />
				<Visualstudiocode />
				<Adobephotoshop />
				<Trello />
				<Oracle />
				<Amazonaws />
				<GoogleCloud />
				<Firebase />
				<Mongodb />
				<Postgresql />
				<Sqlite />
				<Javascript />
				<Java />
				<ReactLogo />
				<Nextdotjs />
				<Python />
				<Flutter />
				<Django />
				<Nodejs />
				<LogoVercel />
				<Netlify />
				<Materialui />
				<Styledcomponents />
				<Css3 />
				<Html5 />
				<Git />
				<LogoBitbucket />
				<GithubOutline />
				<Api />
				<Bootstrap />
				<TailwindCss />
				<Mysql />
				<Linux />
				<Windows />
				<Android />
				<Ios />
				<Typescript />
				<Sass />
				<Jquery />
				<Figma />
			</div>
		</ContainerTechs>
	);
}
