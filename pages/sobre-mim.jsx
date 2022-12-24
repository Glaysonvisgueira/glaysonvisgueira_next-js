import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import ScrollAnimation from "react-animate-on-scroll";

//Styled icons
import { NotepadPerson } from "@styled-icons/fluentui-system-filled/NotepadPerson";
import { MailSend } from "@styled-icons/boxicons-regular/MailSend";
import { LocationOn } from "@styled-icons/material-sharp/LocationOn";
import { Phone } from "@styled-icons/evaicons-solid/Phone";

//Custom components
import ProgressBarTech from "@/components/ProgressBarTech";
import AboutMe from "@/components/AboutMe";

import curriculoPTBR from "../public/pdf/curriculo-ptbr.pdf";

const ContainerSection = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	width: 100%;
	min-height: 400px;
	transition: all 0.3s ease;
	//background-color: ${(props) => props.theme.colors.backgroundSecondary};

	.sobre {
		display: flex;
		align-items: flex-start;
		justify-content: center;
		flex-direction: column;
		width: 60%;
		margin-top: 30px;

		.divider-margin {
			margin-top: 20px;
		}

		.stack-icon-text {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: row;

			svg {
				width: 28px;
				height: 28px;
				color: ${(props) => props.theme.colors.branding};
				margin-right: 10px;
			}
		}

		@media (max-width: 1400px) {
			width: 80%;
		}

		@media (max-width: 900px) {
			margin-top: 0px;
			width: 80%;
			align-items: center;
		}

		@media (max-width: 425px) {
			width: 85%;
		}
	}
`;

const ContainerSobreMimHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	width: 100%;
	margin-top: 40px;
	margin-bottom: 30px;

	@media (max-width: 900px) {
		flex-direction: column;
	}

	.photo-wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;

		.photo {
			width: 220px;
			height: 220px;
			position: relative;
			border: 6px solid ${(props) => props.theme.colors.branding};
			border-radius: 50%;

			.image {
				border-radius: 50%;
			}

			@media (max-width: 900px) {
				margin-bottom: 20px;
				width: 170px;
				height: 170px;
			}
		}
	}

	.header {
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;
		flex-direction: column;
		height: 100%;
		margin-left: 60px;

		div {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: row;
			margin-top: 3px;
			margin-bottom: 3px;

			svg {
				width: 14px;
				height: 14px;
				margin-right: 10px;
				color: ${(props) => props.theme.colors.branding};
			}
		}

		@media (max-width: 900px) {
			margin-left: 0px;
			align-items: center;
			justify-content: center;
		}
	}
`;

const Title = styled.h3`
	font-weight: 900;
	color: ${(props) => props.theme.colors.branding};
	font-size: 26px;

	@media (max-width: 900px) {
		font-size: 18px;
	}
`;

const SubTitle = styled.h3`
	font-weight: 700;
	color: ${(props) => props.theme.colors.branding};
	font-size: 18px;
	margin-bottom: 20px;
	@media (max-width: 900px) {
		font-size: 16px;
	}
`;

export const BodyText = styled.p`
	color: ${(props) => props.theme.colors.body};
	font-size: ${(props) => props.theme.fontSizes.md};
	text-align: justify;

	strong {
		font-weight: 700;
		color: ${(props) => props.theme.colors.branding};
	}

	@media (max-width: 600px) {
		font-size: ${(props) => props.theme.fontSizes.sm};
	}
`;

const WrapperTechs = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 40px;
	//margin-bottom: 40px;

	.grid {
		display: grid;
		width: 100%;
		margin: auto;
		grid-template-columns: repeat(2, 1fr);
		transition: all 0.3s ease;
		gap: 15px;

		@media (max-width: 650px) {
			grid-template-columns: repeat(1, 1fr);
		}
	}
`;

const ButtonDownloadCV = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 38px;
	margin-top: 20px;
	width: 100%;
	border-radius: 4px;
	background-color: ${(props) => props.theme.colors.branding};
	color: ${(props) => props.theme.colors.background};
	font-weight: 900;
	text-decoration: none;

	&:hover {
		cursor: pointer;
		opacity: 0.8;
	}

	@media (max-width: 900px) {
		margin-top: 0px;
		margin-bottom: 20px;
		width: 250px;
	}
`;

export default function SobreMim(props) {
	const [githubUserData, setGithubUserData] = useState({});

	useEffect(() => {
		async function fetchGithubStats() {
			const response = await fetch("https://api.github.com/users/glaysonvisgueira");
			const json = await response.json();
			console.log("RESPONSE: ", response);
			setGithubUserData(json);
		}
		fetchGithubStats();
	}, []);

	return (
		<ContainerSection>
			<AboutMe />
		</ContainerSection>
	);
}
