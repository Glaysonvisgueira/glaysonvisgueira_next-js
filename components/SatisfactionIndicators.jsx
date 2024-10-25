"use client";
import React, { useContext } from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";
import { useTheme } from "styled-components";

//Context
import { SettingsContext } from "@/context/SettingsContext";

const SectionSatisfactionIndicators = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 60px 0;
	width: 100%;

	@media (max-width: 1600px) {
		width: 85%;
	}
`;

const WrapperStatistics = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: 1fr;
	grid-column-gap: 20px;

	@media (max-width: 1200px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 601px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

const NumberStatWrapper = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	flex-direction: column;
	max-width: 300px;

	span {
		color: ${(props) => props.theme.colors.body};
		text-align: left;
		margin-top: 10px;
	}

	.number {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: row;

		.plus {
			font-size: 44px;
			font-weight: 900;
			color: ${(props) => props.theme.colors.branding};
			margin-right: 5px;
		}

		.percent {
			font-size: 32px;
			font-weight: 900;
			color: ${(props) => props.theme.colors.branding};
			margin-left: 10px;
		}

		.stat-number {
			color: ${(props) => props.theme.colors.title};
			font-size: 44px;
			font-weight: 900;
		}
	}
`;

export default function SatisfactionIndicators() {
	const { language } = useContext(SettingsContext);

	return (
		<SectionSatisfactionIndicators>
			<ScrollAnimation animateIn="fadeIn" animateOnce delay={200}>
				<WrapperStatistics>
					<NumberAnimated number={5} description={language.aboutMePage.stats.stat_1} />
					<NumberAnimated number={15} description={language.aboutMePage.stats.stat_2} />
					<NumberAnimated number={80} description={language.aboutMePage.stats.stat_3} hasPercent />
					<NumberAnimated number={10} description={language.aboutMePage.stats.stat_4} />
				</WrapperStatistics>
			</ScrollAnimation>
		</SectionSatisfactionIndicators>
	);
}

function NumberAnimated({ number, description, hasPercent }) {
	const theme = useTheme();

	return (
		<NumberStatWrapper>
			<div className="number">
				{!hasPercent && <span className="plus">+</span>}

				<span className="stat-number">{number}</span>

				{hasPercent && <span className="percent">%</span>}
			</div>

			<span>{description}</span>
		</NumberStatWrapper>
	);
}
