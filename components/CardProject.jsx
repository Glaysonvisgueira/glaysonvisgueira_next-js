import React, { useContext } from "react";
import styled from "styled-components";
import Image from "next/image";

//Context
import { SettingsContext } from "@/context/SettingsContext";

//Icons
import { GithubOutline, ExternalLinkOutline } from "@styled-icons/evaicons-outline";
import { NoPhotography } from "@styled-icons/material-outlined";

const Card = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	flex-direction: column;
	width: 100%;
	background-color: ${(props) => props.theme.colors.backgroundSecondary};
	border-radius: 4px;
	border: 2px solid transparent;
	transition: all 0.3s ease;

	.created-at {
		color: ${(props) => props.theme.colors.body};
		font-size: 14px;
		font-weight: 300;
		margin-top: 10px;
	}

	.project-type {
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;
		flex-direction: row;
		margin-top: 5px;
		margin-bottom: 5px;

		span {
			color: ${(props) => props.theme.colors.backgroundSecondary};
			background-color: ${(props) => props.theme.colors.branding};
			border-radius: 90px;
			padding: 2px 10px;
			font-size: 12px;
			font-weight: 900;
			margin-right: 10px;
		}
	}

	&:hover {
		border: 2px solid ${(props) => props.theme.colors.branding};

		.image img {
			transition: transform 0.3s ease;
			transform: scale(1.2);
		}

		.image svg {
			transition: transform 0.3s ease;
			transform: scale(1.2);
		}
	}

	.image {
		position: relative;
		width: 100%;
		height: 200px;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
		border-top-left-radius: 4px;
		border-top-right-radius: 4px;

		img {
			transition: transform 0.3s ease;
			transform: scale(1);
		}

		svg {
			width: 60px;
			height: 60px;
			color: ${(props) => props.theme.colors.inactiveTitle};
			transition: transform 0.3s ease;
			transform: scale(1);
		}
	}

	.content-padding {
		padding: 14px;
		width: 100%;
	}

	.hr {
		width: 100%;
		border-top: 1px solid ${(props) => props.theme.colors.inactiveTitle};
	}

	.title {
		font-weight: 700;
		font-size: 18px;
		color: ${(props) => props.theme.colors.title};
		margin-bottom: 10px;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.description-wrapper {
		height: 110px;
		overflow: hidden;
		position: relative;
	}

	.description {
		font-size: 16px;
		color: ${(props) => props.theme.colors.body};
		letter-spacing: 2px;
		display: -webkit-box;
		-webkit-line-clamp: 4;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.container-buttons {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		flex-direction: row;
		width: 100%;

		a {
			display: flex;
			align-items: center;
			justify-content: center;
			border: 2px solid ${(props) => props.theme.colors.branding};
			padding: 8px 10px;
			border-radius: 4px;
			color: ${(props) => props.theme.colors.branding};
			font-weight: bold;
			width: 100%;
			text-decoration: none;
			cursor: pointer;
			gap: 10px;

			svg {
				width: 26px;
				height: 26px;
				color: ${(props) => props.theme.colors.branding};
			}

			&:hover {
				color: ${(props) => props.theme.colors.backgroundSecondary};
				background-color: ${(props) => props.theme.colors.branding};

				svg {
					color: ${(props) => props.theme.colors.backgroundSecondary};
				}
			}
		}

		a:first-of-type:not(:only-of-type) {
			margin-right: 10px;
		}
	}

	.tech-stack {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		flex-wrap: wrap;

		svg {
			width: 22px;
			height: 22px;
			margin-right: 5px;
			color: ${(props) => props.theme.colors.inactiveTitle};
			transition: all 0.3s ease;
		}
	}
`;

export default function CardProject({ title, description, typeProject, techs, createdAt, liveDemoUrl, sourceCodeLink, imageSourcePath }) {
	const { language } = useContext(SettingsContext);

	return (
		<Card>
			<div className="image">{imageSourcePath ? <Image src={imageSourcePath} alt={`Imagem do projeto: ${title}`} layout="fill" /> : <NoPhotography />}</div>

			<div className="content-padding">
				<h4 className="title" title={title}>
					{title}
				</h4>

				<div className="project-type">
					{typeProject?.map((chip, index) => (
						<span key={index}>{chip}</span>
					))}
				</div>

				<span className="created-at">
					{language.portifolioPage.createdLabel}: {createdAt}
				</span>
			</div>

			<div className="hr" />

			<div className="content-padding description-wrapper">
				<p className="description">{description}</p>
			</div>

			<div className="hr" />

			<div className="content-padding">
				<div className="tech-stack">
					{techs?.map((icone, i) => (
						<div key={i}>{icone}</div>
					))}
				</div>
			</div>

			<div className="hr" />

			<div className="content-padding">
				<div className="container-buttons">
					{liveDemoUrl != null && (
						<a href={liveDemoUrl} target="_blank" rel="noreferrer">
							<span>{language.portifolioPage.demoLabel.toUpperCase()}</span>
							<ExternalLinkOutline />
						</a>
					)}

					{sourceCodeLink != null && (
						<a href={sourceCodeLink} target="_blank" rel="noreferrer">
							<span>{language.portifolioPage.sourceCodeLabel.toUpperCase()}</span>
							<GithubOutline />
						</a>
					)}
				</div>
			</div>
		</Card>
	);
}
