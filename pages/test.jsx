import React from "react";
import styled from "styled-components";

//Mui components
import Grow from "@mui/material/Grow";

//Custom components
import Head from "@/components/Head";
import SlideTechs from "@/components/SlideTechs";

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

/*

*/
