import React from "react";
import styled from "styled-components";

//Mui components
import Grow from "@mui/material/Grow";

//Custom components
import Head from "@/components/Head";

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 70%;
	height: 100vh;
	//background-color: #000;
`;

const TitlePage = styled.h1`
	color: ${(props) => props.theme.colors.branding};
	font-size: 50px;
	font-weight: 700;
`;

const ContainerGrid = styled.div`
	display: grid;
	width: 100%;

	grid-template-columns: repeat(4, 1fr);

	@media (max-width: 1400px) {
		grid-template-columns: repeat(4, 1fr);
	}

	@media (max-width: 1200px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 600px) {
		grid-template-columns: repeat(1, 1fr);
		margin-top: 60px;
	}
`;

const CardAboutMe = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: "relative";
	width: 220px;
	height: 220px;
	border-radius: 8px;
	font-weight: 700;
	color: ${(props) => props.theme.colors.title};
	background-color: ${(props) => props.theme.colors.backgroundSecondary};
	column-gap: 20px;
	margin: 10px auto;
	border: 4px solid transparent;
	transition: all 0.3s ease;

	&:hover {
		border: 4px solid ${(props) => props.theme.colors.branding};
		color: ${(props) => props.theme.colors.branding};
	}

	@media (max-width: 1200px) {
		width: 90%;
	}

	@media (max-width: 1000px) {
		width: 70%;
	}

	@media (max-width: 600px) {
		width: 80%;
	}
`;

export default function SobreMim() {
	const [checked, setChecked] = React.useState(true);

	const handleChange = () => {
		setChecked((prev) => !prev);
	};

	return (
		<>
			<Head title="Experiência" metaDescription="" keywords="" />
			<Grow in={checked}>
				<ContainerGrid>
					<CardAboutMe>SEO</CardAboutMe>
					<CardAboutMe>UX/UI</CardAboutMe>
					<CardAboutMe>BRANDING</CardAboutMe>
					<CardAboutMe>DESENVOLVIMENTO</CardAboutMe>
				</ContainerGrid>
			</Grow>
		</>
	);
}
