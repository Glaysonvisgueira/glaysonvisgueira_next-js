import React from "react";
import styled from "styled-components";

const WrapperProgressBar = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	flex-direction: row;
`;

const ProgressBar = styled.div`
	width: 200px;
	height: 12px;
	background-color: #ccc;
	border-radius: 20px;
	margin-left: 10px;
	margin-right: 10px;
	//padding: 2px;

	.progress-line {
		background-color: ${(props) => props.theme.colors.branding};
		width: ${(props) => props.percent}%;
		height: 100%;
		border-radius: 20px;
	}
`;

const PercentText = styled.span`
	font-weight: 400;
	color: ${(props) => props.theme.colors.branding};
	font-size: 16px;
`;

const TechText = styled.span`
	font-weight: 900;
	color: ${(props) => props.theme.colors.branding};
	font-size: 16px;
`;

export default function ProgressBarTech(props) {
	return (
		<WrapperProgressBar>
			<TechText>{props.techName}</TechText>
			<ProgressBar percent={props.percent}>
				<div className="progress-line"></div>
			</ProgressBar>
			<PercentText>{props.percent}%</PercentText>
		</WrapperProgressBar>
	);
}
