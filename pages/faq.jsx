/* eslint-disable react/jsx-key */
import React, { useContext, useState } from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

//Contexto
import { SettingsContext } from "@/context/SettingsContext";

//Custom components
import TitleSection from "@/components/TitleSection";
import { BodyText } from "@/styles/ui";

//Icons
import { ArrowIosDownward, ArrowIosUpward } from "@styled-icons/evaicons-solid";

const AccordionContainer = styled.div`
	width: 50%;
	border-radius: 12px;
	overflow: hidden;

	> div:not(:last-child) {
		border-bottom: 2px solid ${(props) => props.theme.colors.backgroundSecondary};
	}

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

const Question = styled.div`
	padding: 22px;
	/* background-color: ${(props) => props.theme.colors.backgroundSecondary}; */
	font-weight: 900;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: space-between;

	h3 {
		color: ${({ isOpen, theme }) => (isOpen ? theme.colors.branding : theme.colors.body)};
		font-size: 18px;
		font-weight: 900;
	}
	&:hover {
		h3 {
			color: ${(props) => props.theme.colors.branding};
		}

		svg {
			color: ${(props) => props.theme.colors.branding};
		}
	}

	svg {
		color: ${({ isOpen, theme }) => (isOpen ? theme.colors.branding : theme.colors.body)};
		width: 28px;
		height: 44px;
	}

	@media (max-width: 900px) {
		h3 {
			font-size: 14px;
		}

		svg {
			width: 26px;
			height: 34px;
		}
	}
`;

const Answer = styled.div`
	overflow: hidden;
	padding: ${({ isOpen }) => (isOpen ? "10px 20px 40px 20px" : "0 15px")};
	/* background-color: ${(props) => props.theme.colors.backgroundSecondary}; */

	p {
		padding-left: 20px;
		padding-right: 20px;
	}
`;

const AccordionItem = ({ question, answer, isOpen, onClick }) => (
	<div>
		<Question onClick={onClick} isOpen={isOpen}>
			<h3>{question}</h3>
			<span>{isOpen ? <ArrowIosUpward /> : <ArrowIosDownward />}</span>
		</Question>
		<Answer isOpen={isOpen}>{isOpen && <BodyText>{answer}</BodyText>}</Answer>
	</div>
);

const Accordion = () => {
	const { language } = useContext(SettingsContext);
	const [openIndex, setOpenIndex] = useState(null);

	const toggleAccordion = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<AccordionContainer>
			{language.faq.questions.map((item, index) => (
				<ScrollAnimation animateIn="fadeIn" animateOnce key={item.id}>
					<AccordionItem key={index} question={`${item.question}`} answer={item.answer} isOpen={openIndex === index} onClick={() => toggleAccordion(index)} />
				</ScrollAnimation>
			))}
		</AccordionContainer>
	);
};

export default function Faq() {
	const { language } = useContext(SettingsContext);

	return (
		<Section id="section-ask">
			<TitleSection title={language.faq.title} subtitle={language.faq.subtitle} hasMarginBottom />
			<Accordion />
		</Section>
	);
}
