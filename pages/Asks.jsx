/* eslint-disable react/jsx-key */
import React, { useContext, useState } from "react";
import styled from "styled-components";

//Contexto
import { SettingsContext } from "@/context/SettingsContext";

//Custom components
import TitleSection from "@/components/TitleSection";

const faqData = [
	{ question: "O que é React?", answer: "React é uma biblioteca JavaScript para construção de interfaces de usuário." },
	{ question: "Como funciona o seguro desemprego?", answer: "O seguro-desemprego é um benefício que oferece auxílio financeiro ao trabalhador demitido sem justa causa." },
	{ question: "O que é styled-components?", answer: "Styled-components é uma biblioteca que permite escrever CSS dentro de componentes JavaScript." },
	{ question: "O que é React?", answer: "React é uma biblioteca JavaScript para construção de interfaces de usuário." },
	{ question: "Como funciona o seguro desemprego?", answer: "O seguro-desemprego é um benefício que oferece auxílio financeiro ao trabalhador demitido sem justa causa." },
	{ question: "O que é styled-components?", answer: "Styled-components é uma biblioteca que permite escrever CSS dentro de componentes JavaScript." },
];

const AccordionContainer = styled.div`
	width: 60%;
	border-radius: 12px;
	overflow: hidden;

	> div:not(:last-child) {
		border-bottom: 1px solid ${(props) => props.theme.colors.inactiveTitle};
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
		color: ${({ isOpen, theme }) => (isOpen ? theme.colors.branding : theme.colors.title)};
		font-size: 18px;
		font-weight: 900;
	}
	&:hover {
		h3 {
			color: ${(props) => props.theme.colors.branding};
		}
	}

	span {
		color: ${(props) => props.theme.colors.branding};
		font-size: 40px;
	}
`;

const Answer = styled.div`
	overflow: hidden;
	padding: ${({ isOpen }) => (isOpen ? "10px 20px 40px 20px" : "0 15px")};

	p {
		color: ${(props) => props.theme.colors.title};
	}
`;

const AccordionItem = ({ question, answer, isOpen, onClick }) => (
	<div>
		<Question onClick={onClick} isOpen={isOpen}>
			<h3>{question}</h3>
			<span>{isOpen ? "-" : "+"}</span>
		</Question>
		<Answer isOpen={isOpen}>{isOpen && <p>{answer}</p>}</Answer>
	</div>
);

const Accordion = () => {
	const [openIndex, setOpenIndex] = useState(null);

	const toggleAccordion = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<AccordionContainer>
			{faqData.map((item, index) => (
				<AccordionItem key={index} question={item.question} answer={item.answer} isOpen={openIndex === index} onClick={() => toggleAccordion(index)} />
			))}
		</AccordionContainer>
	);
};

export default function Asks() {
	const { language } = useContext(SettingsContext);

	return (
		<Section id="section-ask">
			<TitleSection title="Título" subtitle="Subtítulo" hasMarginBottom />
			<Accordion />
		</Section>
	);
}
