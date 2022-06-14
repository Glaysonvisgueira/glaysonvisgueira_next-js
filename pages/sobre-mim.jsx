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
	color: ${(props) => props.theme.colors.textColorTitle};
	font-size: 50px;
	font-weight: 700;
`;

const ContainerGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-column-gap: 10px;
`;

const ColumnBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: "relative";
	width: 300px;
	height: 300px;
	border-radius: 14px;
	background-color: #ccc;
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
				<Container>
					<ContainerGrid>
						<ColumnBox>SOBRE MIM</ColumnBox>
						<ColumnBox>SOBRE MIM</ColumnBox>
						<ColumnBox>SOBRE MIM</ColumnBox>
						<ColumnBox>SOBRE MIM</ColumnBox>
					</ContainerGrid>
				</Container>
			</Grow>
		</>
	);
}
