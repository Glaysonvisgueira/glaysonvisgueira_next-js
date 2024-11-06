import React, { useContext } from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

//Styled icons
import { Robot } from "@styled-icons/fa-solid/Robot";
import { DesignServices } from "@styled-icons/material-rounded/DesignServices";
import { DesignIdeas } from "@styled-icons/fluentui-system-filled/DesignIdeas";
import { CodeBlock } from "@styled-icons/boxicons-regular/CodeBlock";

//Context
import { SettingsContext } from "@/context/SettingsContext";

//Components
import { FluidContainer } from "@/styles/ui";
import TitleSection from "@/components/TitleSection";

const SectionServices = styled.section`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	width: 70%;
	padding: 60px 0;

	@media (max-width: 1500px) {
		width: 80%;
	}

	@media (max-width: 1200px) {
		width: 100%;
	}
`;

const ContainerGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	transition: all 0.3s ease;
	gap: 20px;
	justify-items: center;

	@media (max-width: 1200px) {
		grid-template-columns: repeat(2, 1fr);
		width: 85%;
	}

	@media (max-width: 600px) {
		grid-template-columns: repeat(1, 1fr);
		width: 100%;
		justify-items: left;
	}
`;

const CardService = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	flex-direction: column;
	width: 100%;
	transition: all 0.3s ease;

	.box {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 50px;
		height: 50px;
		border-radius: 8px;
		margin-bottom: 10px;
		/* background-color: ${(props) => props.theme.colors.backgroundSecondary}; */
		background-color: ${(props) => props.theme.colors.branding};
		background: linear-gradient(133deg, ${(props) => props.theme.colors.brandingDarker} 0%, ${(props) => props.theme.colors.branding} 100%);

		svg {
			color: ${(props) => props.theme.colors.background};
			/* color: ${(props) => props.theme.colors.branding}; */
			width: 36px;
			height: 36px;
		}
	}

	h3 {
		color: ${(props) => props.theme.colors.title};
		font-size: 20px;
		font-weight: 900;
		margin-top: 5px;
		margin-bottom: 10px;

		@media (max-width: 900px) {
			font-size: 18px;
		}
	}

	p {
		color: ${(props) => props.theme.colors.body};
		font-size: 16px;
		font-weight: 400;
		text-align: left;
		word-wrap: break-word;

		@media (max-width: 900px) {
			font-size: 14px;
		}
	}

	@media (max-width: 600px) {
		width: 100%;
		padding: 20px;
	}
`;

export default function ServicesOffer() {
	const { language } = useContext(SettingsContext);

	return (
		<FluidContainer id="section-services">
			<SectionServices>
				<TitleSection title={language.servicesOffer.title} subtitle={language.servicesOffer.subtitle} hasMarginBottom />

				<ContainerGrid>
					<ScrollAnimation animateIn="fadeIn" animateOnce delay={100}>
						<CardService>
							<div className="box">
								<CodeBlock />
							</div>
							<h3>{language.servicesOffer.cards.development.title}</h3>
							<p>{language.servicesOffer.cards.development.contentText}</p>
						</CardService>
					</ScrollAnimation>

					<ScrollAnimation animateIn="fadeIn" animateOnce delay={200}>
						<CardService>
							<div className="box">
								<Robot />
							</div>

							<h3>{language.servicesOffer.cards.seo.title}</h3>
							<p>{language.servicesOffer.cards.seo.contentText}</p>
						</CardService>
					</ScrollAnimation>

					<ScrollAnimation animateIn="fadeIn" animateOnce delay={300}>
						<CardService>
							<div className="box">
								<DesignIdeas />
							</div>

							<h3>{language.servicesOffer.cards.ux.title}</h3>
							<p>{language.servicesOffer.cards.ux.contentText}</p>
						</CardService>
					</ScrollAnimation>

					<ScrollAnimation animateIn="fadeIn" animateOnce delay={400}>
						<CardService>
							<div className="box">
								<DesignServices />
							</div>

							<h3>{language.servicesOffer.cards.branding.title}</h3>
							<p>{language.servicesOffer.cards.branding.contentText}</p>
						</CardService>
					</ScrollAnimation>

					<ScrollAnimation animateIn="fadeIn" animateOnce delay={500}>
						<CardService>
							<div className="box">
								<DesignServices />
							</div>

							<h3>{language.servicesOffer.cards.consultancy.title}</h3>
							<p>{language.servicesOffer.cards.consultancy.contentText}</p>
						</CardService>
					</ScrollAnimation>

					<ScrollAnimation animateIn="fadeIn" animateOnce delay={600}>
						<CardService>
							<div className="box">
								<CodeBlock />
							</div>
							<h3>{language.servicesOffer.cards.mobile_devlopment.title}</h3>
							<p>{language.servicesOffer.cards.mobile_devlopment.contentText}</p>
						</CardService>
					</ScrollAnimation>

					<ScrollAnimation animateIn="fadeIn" animateOnce delay={700}>
						<CardService>
							<div className="box">
								<CodeBlock />
							</div>
							<h3>{language.servicesOffer.cards.chatbot.title}</h3>
							<p>{language.servicesOffer.cards.chatbot.contentText}</p>
						</CardService>
					</ScrollAnimation>

					<ScrollAnimation animateIn="fadeIn" animateOnce delay={800}>
						<CardService>
							<div className="box">
								<CodeBlock />
							</div>
							<h3>{language.servicesOffer.cards.support.title}</h3>
							<p>{language.servicesOffer.cards.support.contentText}</p>
						</CardService>
					</ScrollAnimation>
				</ContainerGrid>
			</SectionServices>
		</FluidContainer>
	);
}
