import React from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

//Styled icons
import { Robot } from "@styled-icons/fa-solid/Robot";
import { DesignServices } from "@styled-icons/material-rounded/DesignServices";
import { DesignIdeas } from "@styled-icons/fluentui-system-filled/DesignIdeas";
import { CodeBlock } from "@styled-icons/boxicons-regular/CodeBlock";

//Styled-components
import { TitleH3, BodyText, TitleSection } from "@/styles/ui";

const ContainerGrid = styled.div`
	//margin-top: 40px;
	display: grid;
	width: auto;
	grid-template-columns: repeat(4, 1fr);
	//background: #ccc;

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
	height: 340px;
	padding: 20px;
	border-radius: 8px;
	color: ${(props) => props.theme.colors.branding}5E;
	background-color: ${(props) => props.theme.colors.backgroundSecondary};
	column-gap: 20px;
	margin: 20px;
	border: 4px solid transparent;
	transition: all 0.3s ease;

	div {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;

		h3 {
			margin-top: 20px;
		}

		p {
			text-align: center;
		}
	}

	.text-explanation {
		margin-top: 20px;
	}

	svg {
		color: ${(props) => props.theme.colors.branding};
		width: 48px;
		height: 48px;
	}

	&:hover {
		border: 4px solid ${(props) => props.theme.colors.branding};
		color: ${(props) => props.theme.colors.branding};
		box-shadow: 0px 0px 40px 0px ${(props) => props.theme.colors.branding}5E;
	}

	@media (max-width: 1200px) {
		width: 90%;
	}
`;

const CardFlip = styled.div`
	.flip-card {
		width: 200px;
		height: 300px;
		perspective: 1000px; /* Remove this if you don't want the 3D effect */
	}

	/* This container is needed to position the front and back side */
	.flip-card-inner {
		position: relative;
		width: 100%;
		height: 100%;
		text-align: center;
		transition: transform 0.8s;
		transform-style: preserve-3d;
	}

	/* Do an horizontal flip when you move the mouse over the flip box container */
	.flip-card:hover .flip-card-inner {
		transform: rotateY(180deg);
	}

	/* Position the front and back side */
	.flip-card-front,
	.flip-card-back {
		position: absolute;
		width: 100%;
		height: 100%;
		-webkit-backface-visibility: hidden; /* Safari */
		backface-visibility: hidden;
	}

	/* Style the front side (fallback if image is missing) */
	.flip-card-front {
		background-color: ${(props) => props.theme.colors.backgroundSecondary};
		//border: 4px solid ${(props) => props.theme.colors.branding};
		border-radius: 8px;
	}

	/* Style the back side */
	.flip-card-back {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		background-color: ${(props) => props.theme.colors.branding};
		color: white;
		transform: rotateY(180deg);
		box-shadow: 0px 0px 40px 0px ${(props) => props.theme.colors.branding}5E;
		border-radius: 8px;
		//color: ${(props) => props.theme.colors.branding};
	}
`;

export default function SobreMim() {
	const [checked, setChecked] = React.useState(true);

	const handleChange = () => {
		setChecked((prev) => !prev);
	};

	return (
		<>
			<TitleSection>Serviços oferecidos</TitleSection>
			<ScrollAnimation animateIn="slideInUp" animateOnce>
				<ContainerGrid>
					<CardFlip>
						<div className="flip-card">
							<div className="flip-card-inner">
								<div className="flip-card-front"></div>
								<div className="flip-card-back">
									<h1>Title</h1>
									<p>Description</p>
								</div>
							</div>
						</div>
					</CardFlip>

					{/*
					<CardAboutMe>
						<div>
							<Robot />
							<TitleH3>SEO</TitleH3>
						</div>
						<div className="text-explanation">
							<BodyText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum{"\n"}has been the industry's standard dummy text ever since the 1500s.</BodyText>
						</div>
					</CardAboutMe>
				*/}

					{/*
				<ScrollAnimation animateIn="fadeIn" delay={400} animateOnce={true}>
					<CardAboutMe>
						<div>
							<Robot />
							<TitleH3>SEO</TitleH3>
						</div>
						<div className="text-explanation">
							<BodyText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</BodyText>
						</div>
					</CardAboutMe>
				</ScrollAnimation>
				*/}

					<CardAboutMe>
						<div>
							<DesignServices />
							<TitleH3>UX/UI</TitleH3>
						</div>
						<div className="text-explanation">
							<BodyText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</BodyText>
						</div>
					</CardAboutMe>

					<CardAboutMe>
						<div>
							<DesignIdeas />
							<TitleH3>BRANDING</TitleH3>
						</div>
						<div className="text-explanation">
							<BodyText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</BodyText>
						</div>
					</CardAboutMe>

					<CardAboutMe>
						<div>
							<CodeBlock />
							<TitleH3>DESENVOLVIMENTO</TitleH3>
						</div>
						<div className="text-explanation">
							<BodyText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</BodyText>
						</div>
					</CardAboutMe>
				</ContainerGrid>
			</ScrollAnimation>
		</>
	);
}
