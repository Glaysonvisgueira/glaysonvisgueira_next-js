import React from "react";
import styled from "styled-components";

//Mui components
import Grow from "@mui/material/Grow";

//Custom components
import Head from "@/components/Head";

const TitlePage = styled.h1`
	color: ${(props) => props.theme.colors.textColorTitle};
	font-size: 50px;
	font-weight: 700;
`;

const ContainerSkill = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 400px;
	height: 60px;
	padding: 10px;
	background: #fff;

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
				<ContainerSkill>
					<p>aa</p>
					<ProgressBar>
						<div></div>
					</ProgressBar>
				</ContainerSkill>
			</Grow>
		</>
	);
}
