import React from "react";
import styled from "styled-components";

import { Robot } from "@styled-icons/fa-solid/Robot";
import { DesignServices } from "@styled-icons/material-rounded/DesignServices";
import { DesignIdeas } from "@styled-icons/fluentui-system-filled/DesignIdeas";
import { CodeBlock } from "@styled-icons/boxicons-regular/CodeBlock";
//

//Mui components
import Grow from "@mui/material/Grow";

//Custom components
import Head from "@/components/Head";
import H2TextTitle from "@/components/ui/H2TextTitle";
import TextBody from "@/components/ui/TextBody";

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 70%;
	height: 100vh;
	//background-color: #000;
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
	justify-content: flex-start;
	flex-direction: column;
	position: "relative";
	width: 220px;
	height: 300px;
	padding: 20px;
	border-radius: 8px;
	background-color: ${(props) => props.theme.colors.backgroundSecondary};
	column-gap: 20px;
	margin: 10px auto;
	border: 4px solid transparent;
	transition: all 0.3s ease;
	color: ${(props) => props.theme.colors.branding}5E;

	div {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;

		h2 {
			margin-top: 20px;
		}
	}

	.text-explanation {
		margin-top: 20px;
	}

	svg {
		color: ${(props) => props.theme.colors.branding};
		width: 48px;
		height: 48px;
		//position: absolute;
		//top: 10px;
		//left: 10px;
	}

	&:hover {
		border: 4px solid ${(props) => props.theme.colors.branding};
		color: ${(props) => props.theme.colors.branding};
		box-shadow: 0px 0px 40px 0px ${(props) => props.theme.colors.branding}5E;
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
					<CardAboutMe>
						<div>
							<Robot />
							<H2TextTitle>SEO</H2TextTitle>
						</div>
						<div className="text-explanation">
							<TextBody>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</TextBody>
						</div>
					</CardAboutMe>
					<CardAboutMe>
						<div>
							<DesignServices />
							<H2TextTitle>UX/UI</H2TextTitle>
						</div>
						<div className="text-explanation">
							<TextBody>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</TextBody>
						</div>
					</CardAboutMe>
					<CardAboutMe>
						<div>
							<DesignIdeas />
							<H2TextTitle>BRANDING</H2TextTitle>
						</div>
						<div className="text-explanation">
							<TextBody>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</TextBody>
						</div>
					</CardAboutMe>
					<CardAboutMe>
						<div>
							<CodeBlock />
							<H2TextTitle>DESENVOLVIMENTO</H2TextTitle>
						</div>
						<div className="text-explanation">
							<TextBody>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</TextBody>
						</div>
					</CardAboutMe>
				</ContainerGrid>
			</Grow>
		</>
	);
}
