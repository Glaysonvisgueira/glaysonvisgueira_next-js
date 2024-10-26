import React from "react";
import styled from "styled-components";

const ToolTip = styled.div`
	/* Tooltip container */
	transition: all 0.3s ease;

	.tooltip {
		position: relative;
		display: inline-block;

		&:hover {
			svg {
				color: ${(props) => props.theme.colors.branding};
			}
		}
	}

	/* Tooltip text */
	.tooltip .tooltiptext {
		visibility: hidden;
		width: max-content;
		background-color: ${(props) => props.theme.colors.branding};
		z-index: 10 !important;
		color: ${(props) => props.theme.colors.background};
		text-align: center;
		padding: 3px 10px;
		border-radius: 4px;
		font-weight: 900;
		font-size: 14px;

		/* Position the tooltip text */
		position: absolute;
		z-index: 1;
		bottom: 125%;
		left: 50%;
		transform: translateX(-50%); /* Center horizontally */

		/* Fade in tooltip */
		opacity: 0;
		transition: opacity 0.4s;
	}

	/* Tooltip arrow */
	.tooltip .tooltiptext::after {
		content: "";
		position: absolute;
		top: 100%;
		left: 50%;
		transform: translateX(-50%);
		border-width: 5px;
		border-style: solid;
		border-color: ${(props) => props.theme.colors.branding} transparent transparent transparent;
	}

	/* Show the tooltip text when you mouse over the tooltip container */
	.tooltip:hover .tooltiptext {
		visibility: visible;
		opacity: 1;
	}
`;

const Tooltip = ({ children, toolTipText }) => (
	<ToolTip>
		<div className="tooltip">
			{children}
			<span className="tooltiptext">{toolTipText}</span>
		</div>
	</ToolTip>
);

export default Tooltip;
