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
`;

export default function SobreMim() {
	const [checked, setChecked] = React.useState(true);

	const handleChange = () => {
		setChecked((prev) => !prev);
	};

	return (
		<>
			<TitleSection>Serviços oferecidos</TitleSection>
			<ContainerGrid>
				<ScrollAnimation animateIn="fadeIn" delay="400" animateOnce={true}>
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
				<ScrollAnimation animateIn="fadeIn" delay="600" animateOnce={true}>
					<CardAboutMe>
						<div>
							<DesignServices />
							<TitleH3>UX/UI</TitleH3>
						</div>
						<div className="text-explanation">
							<BodyText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</BodyText>
						</div>
					</CardAboutMe>
				</ScrollAnimation>
				<ScrollAnimation animateIn="fadeIn" delay="800" animateOnce={true}>
					<CardAboutMe>
						<div>
							<DesignIdeas />
							<TitleH3>BRANDING</TitleH3>
						</div>
						<div className="text-explanation">
							<BodyText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</BodyText>
						</div>
					</CardAboutMe>
				</ScrollAnimation>
				<ScrollAnimation animateIn="fadeIn" delay="1000" animateOnce={true}>
					<CardAboutMe>
						<div>
							<CodeBlock />
							<TitleH3>DESENVOLVIMENTO</TitleH3>
						</div>
						<div className="text-explanation">
							<BodyText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</BodyText>
						</div>
					</CardAboutMe>
				</ScrollAnimation>
			</ContainerGrid>
		</>
	);
}
