import React from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

//Contexto
import { SettingsContext } from "@/context/SettingsContext";

//Ícones
import { Amazonaws } from "@styled-icons/simple-icons/Amazonaws";
import { Visualstudiocode } from "@styled-icons/simple-icons/Visualstudiocode";
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
import { Trello } from "@styled-icons/boxicons-logos/Trello";

const TechGrid = styled.footer`
	padding-top: 30px;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
	grid-column-gap: 5px;
	grid-row-gap: 15px;
	transition: all 0.3s ease;
	width: 100%;
	text-align: center;
	margin: auto;
`;

const Tech = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	min-width: 100px;
	height: 44px;
	background-color: ${(props) => props.theme.colors.backgroundSecondary};
	padding: 15px;
	border-radius: 4px;

	svg {
		width: 34px;
		height: 34px;
		color: ${(props) => props.theme.colors.branding};
		transition: all 0.3s ease;
	}
`;

export const TitleSection = styled.h2`
	font-weight: 700;
	color: ${(props) => props.theme.colors.branding};
	font-size: 26px;
	padding-top: 30px;
	text-align: center;

	@media (max-width: 900px) {
		font-size: 18px;
	}
`;

export default function TechsGrid(props) {
	return (
		<TechGrid>
			<ScrollAnimation animateIn="fadeIn" animateOnce>
				<Tech>
					<Amazonaws />
				</Tech>
			</ScrollAnimation>
			<ScrollAnimation animateIn="fadeIn" animateOnce>
				<Tech>
					<GoogleCloud />
				</Tech>
			</ScrollAnimation>
			<ScrollAnimation animateIn="fadeIn" animateOnce>
				<Tech>
					<Firebase />
				</Tech>
			</ScrollAnimation>
			<Tech>
				<Visualstudiocode />
			</Tech>
			<Tech>
				<Mongodb />
			</Tech>
			<Tech>
				<Postgresql />
			</Tech>
			<Tech>
				<Sqlite />
			</Tech>
			<Tech>
				<Javascript />
			</Tech>
			<Tech>
				<Java />
			</Tech>
			<Tech>
				<ReactLogo />
			</Tech>
			<Tech>
				<Nextdotjs />
			</Tech>
			<Tech>
				<Python />
			</Tech>
			<Tech>
				<Flutter />
			</Tech>
			<Tech>
				<Django />
			</Tech>
			<Tech>
				<Nodejs />
			</Tech>
			<Tech>
				<LogoVercel />
			</Tech>
			<Tech>
				<Netlify />
			</Tech>
			<Tech>
				<Materialui />
			</Tech>
			<Tech>
				<Styledcomponents />
			</Tech>
			<Tech>
				<Css3 />
			</Tech>
			<Tech>
				<Html5 />
			</Tech>
			<Tech>
				<Amazons3 />
			</Tech>
			<Tech>
				<Git />
			</Tech>
			<Tech>
				<LogoBitbucket />
			</Tech>
			<Tech>
				<GithubOutline />
			</Tech>
			<Tech>
				<Api />
			</Tech>
			<Tech>
				<Oracle />
			</Tech>
			<Tech>
				<Bootstrap />
			</Tech>
			<Tech>
				<TailwindCss />
			</Tech>
			<Tech>
				<Mysql />
			</Tech>
			<Tech>
				<Linux />
			</Tech>
			<Tech>
				<Windows />
			</Tech>
			<Tech>
				<Android />
			</Tech>
			<Tech>
				<Ios />
			</Tech>
			<Tech>
				<Typescript />
			</Tech>
			<Tech>
				<Sass />
			</Tech>
			<Tech>
				<Jquery />
			</Tech>
			<Tech>
				<Figma />
			</Tech>
			<Tech>
				<Adobephotoshop />
			</Tech>
			<Tech>
				<Trello />
			</Tech>
		</TechGrid>
	);
}
