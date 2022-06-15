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

//Mui components
import Grow from "@mui/material/Grow";

//Custom components
import Head from "@/components/Head";

const ContainerSkillBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 400px;
	height: 300px;
	padding: 10px;
	background: #fff;
	border-radius: 8px;
`;

const ContainerSkill = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 30px;
	background-color: #ccc;
	margin: 5px;

	p {
		margin-right: 5px;
	}
`;

const ProgressBar = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	width: 100%;
	height: 14px;
	padding: 3px;
	background-color: #ccc;
	border-radius: 18px;

	div {
		width: 50%;
		height: 100%;
		background-color: #000;
		border-radius: 18px;
	}
`;

export default function Portifolio() {
	const [checked, setChecked] = React.useState(true);

	const handleChange = () => {
		setChecked((prev) => !prev);
	};

	return (
		<>
			<Head title="Portifólio" metaDescription="" keywords="" />
			<Grow in={checked}>
				<div>
					<ContainerSkillBox>
						<ContainerSkill>
							<p>asd</p>
							<ProgressBar>
								<div></div>
							</ProgressBar>
						</ContainerSkill>

						<ContainerSkill>
							<p>aasda</p>
							<ProgressBar>
								<div></div>
							</ProgressBar>
						</ContainerSkill>
					</ContainerSkillBox>
				</div>
			</Grow>
		</>
	);
}
