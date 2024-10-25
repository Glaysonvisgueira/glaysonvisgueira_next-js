import React, { useContext } from "react";
import styled from "styled-components";
import Marquee from "react-fast-marquee";
import { useTheme } from "styled-components";

//Contexto
import { SettingsContext } from "@/context/SettingsContext";

//Custom components
import TitleSection from "@/components/TitleSection";

//Icons
import { QuotesLeft } from "@styled-icons/icomoon";

const Container = styled.div`
	width: 60%;

	@media (max-width: 1600px) {
		width: 75%;
	}

	@media (max-width: 1400px) {
		width: 80%;
	}

	@media (max-width: 1100px) {
		width: 85%;
	}

	@media (max-width: 900px) {
		width: 90%;
	}
`;

const Section = styled.section`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	width: 100%;
	padding-top: 60px;
`;

const Testimonial = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	flex-direction: column;
	width: 540px;
	height: 100%;
	min-height: 320px;
	margin-right: 24px;
	padding: 22px;
	border-radius: 8px;
	background-color: ${(props) => props.theme.colors.backgroundSecondary};
	/* height: 100px; */
	/* border: 1px solid ${(props) => props.theme.colors.inactiveTitle}; */

	svg {
		color: ${(props) => props.theme.colors.branding};
		width: 44px;
		height: 44px;
		margin-bottom: 20px;
	}

	p {
		text-align: left;
		color: ${(props) => props.theme.colors.title};
		font-weight: 900;
		letter-spacing: 3px;
		margin-bottom: 40px;
	}

	.user-wrapper {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		flex-direction: row;

		.user-image {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 60px;
			height: 60px;
			border: 2px solid ${(props) => props.theme.colors.branding};
			border-radius: 50%;
		}

		.user-data {
			margin-left: 10px;

			h4 {
				color: ${(props) => props.theme.colors.title};
				font-weight: 900;
			}

			span {
				color: ${(props) => props.theme.colors.body};
				font-weight: 400;
			}
		}
	}
`;

export default function Testimonials() {
	const { language } = useContext(SettingsContext);

	const theme = useTheme();

	return (
		<Section id="testimonials">
			<TitleSection title="Título" subtitle="Subtítulo" hasMarginBottom />

			<Marquee autoFill gradient loop={0} direction="left" speed={60} gradientColor={theme.colors.backgroundPageRgb}>
				{[1, 2, 3, 4, 5, 6].map((testimonial, index) => (
					<Testimonial key={index}>
						<QuotesLeft />

						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla incidunt blanditiis saepe nisi ipsum quidem, sapiente iusto deleniti vero nesciunt quasi aut, assumenda fugit! Eaque deserunt veritatis officiis
							voluptate repellat.
						</p>

						<div className="user-wrapper">
							<div className="user-image"></div>

							<div className="user-data">
								<h4>Nome</h4>
								<span>Descrição</span>
							</div>
						</div>
					</Testimonial>
				))}
			</Marquee>
		</Section>
	);
}
