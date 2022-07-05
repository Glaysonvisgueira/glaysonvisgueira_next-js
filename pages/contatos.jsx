import React from "react";
import styled from "styled-components";

//Styled-components
import { TitleSection, ContainerTitleSection } from "@/styles/ui";

//Ícones
import { ContactCardLink } from "@styled-icons/fluentui-system-filled/ContactCardLink";

const CardFlip = styled.div`
	.flip-card {
		background-color: transparent;
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
		border: 4px solid ${(props) => props.theme.colors.branding};
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
		//color: ${(props) => props.theme.colors.branding};
	}
`;

export default function Contatos() {
	return (
		<>
			<ContainerTitleSection>
				<ContactCardLink />
				<TitleSection>Contatos</TitleSection>
			</ContainerTitleSection>

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
		</>
	);
}
