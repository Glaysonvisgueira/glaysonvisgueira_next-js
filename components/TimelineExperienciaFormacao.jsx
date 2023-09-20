import React, { useContext } from "react";
import styled from "styled-components";
import { useTheme } from "styled-components";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

//Contexto
import { SettingsContext } from "@/context/SettingsContext";

//ícones
import { School } from "@styled-icons/ionicons-outline/School";
import { LearningApp } from "@styled-icons/fluentui-system-filled/LearningApp";
import { Work } from "@styled-icons/material-rounded/Work";

const LearningAppIcon = styled(LearningApp)`
	color: ${(props) => props.theme.colors.backgroundSecondary};
	width: 40px;
	height: 40px;
`;

const SchoolIcon = styled(School)`
	color: ${(props) => props.theme.colors.backgroundSecondary};
	width: 40px;
	height: 40px;
`;

const WorkIcon = styled(Work)`
	color: ${(props) => props.theme.colors.backgroundSecondary};
	width: 40px;
	height: 40px;
`;

const TimelineContent = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	flex-direction: column;
`;

export const TitleContentTimeline = styled.h3`
	.vertical-timeline-element-title {
		color: ${(props) => props.theme.colors.branding};
	}
	@media (max-width: 1600px) {
		font-size: ${(props) => props.theme.fontSizes.xl};
	}

	@media (max-width: 1400px) {
		font-size: ${(props) => props.theme.fontSizes.lg};
	}

	@media (max-width: 1200px) {
		font-size: ${(props) => props.theme.fontSizes.md};
	}

	@media (max-width: 900px) {
		font-size: ${(props) => props.theme.fontSizes.sm};
	}
`;

const BoldText = styled.h4`
	color: ${(props) => props.theme.colors.contrastText};
	font-weight: 800;
	margin-top: 2px;
	margin-bottom: 2px;
	span {
		font-weight: 400;
	}
`;

export default function TimelinePortifolio(props) {
	const { language } = useContext(SettingsContext);
	const theme = useTheme();

	return (
		<VerticalTimeline lineColor={theme.colors.branding}>
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0px 0px 0px 0px #ccc" }}
				iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
				icon={<LearningAppIcon />}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.backgroundSecondary, backgroundColor: theme.colors.branding, padding: "0 6px 0 6px", borderRadius: "4px" }}>2011</h3>
					<BoldText>
						{language.experiencePage.timeline.labelInstitution}: <span>S.O.S. Educação Profissional</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelCategory}: <span>{language.experiencePage.timeline.labelProfessionalCourse}</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelTitle}:{" "}
						<span> {language.id == "ptbr" ? "Administração, empregabilidade, digitação e informática fundamental" : "Administration, employability, typing and fundamental informatics"}</span>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ color: "#000", borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0px 0px 0px 0px #ccc" }}
				iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
				icon={<WorkIcon />}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.backgroundSecondary, backgroundColor: theme.colors.branding, padding: "0 6px 0 6px", borderRadius: "4px" }}>2013</h3>
					<BoldText>
						{language.experiencePage.timeline.labelCompany}: <span>Armazém Paraíba</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelPosition}: <span>Auxiliar administrativo</span>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ color: "#000", borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0px 0px 0px 0px #ccc" }}
				iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
				icon={<LearningAppIcon />}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.backgroundSecondary, backgroundColor: theme.colors.branding, padding: "0 6px 0 6px", borderRadius: "4px" }}>2014</h3>
					<BoldText>
						{language.experiencePage.timeline.labelInstitution}: <span>SENAC - Serviço Nacional de Aprendizagem Comercial</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelCategory}: <span>{language.experiencePage.timeline.labelProfessionalCourse}</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelTitle}: <span>Aperfeiçoamento em operações logísticas</span>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ color: "#000", borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0px 0px 0px 0px #ccc" }}
				iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
				icon={<SchoolIcon />}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.backgroundSecondary, backgroundColor: theme.colors.branding, padding: "0 6px 0 6px", borderRadius: "4px" }}>2014</h3>
					<BoldText>
						{language.experiencePage.timeline.labelInstitution}: <span>Centro Universitário Maurício de Nassau</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelCategory}: <span>{language.experiencePage.timeline.labelBachelorDegree}</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelTitle}: <span>Sistemas de Informações</span>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ color: "#000", borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0px 0px 0px 0px #ccc" }}
				iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
				icon={<LearningAppIcon />}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.backgroundSecondary, backgroundColor: theme.colors.branding, padding: "0 6px 0 6px", borderRadius: "4px" }}>2018</h3>
					<BoldText>
						{language.experiencePage.timeline.labelInstitution}: <span>Centro Universitário Maurício de Nassau</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelCategory}: <span>Workshop</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelTitle}: <span>IaaS - Infraestrutura como serviço</span>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ color: "#000", borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0px 0px 0px 0px #ccc" }}
				iconStyle={{ background: theme.colors.branding, boxShadow: `0 0 0 0 ` }}
				icon={<LearningAppIcon />}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.backgroundSecondary, backgroundColor: theme.colors.branding, padding: "0 6px 0 6px", borderRadius: "4px" }}>2018</h3>
					<BoldText>
						{language.experiencePage.timeline.labelInstitution}: <span>Fábrica de Gênios</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelCategory}: <span>{language.experiencePage.timeline.labelExtensionCourse}</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelTitle}: <span>Arduino - Essencial para Automação Residencial</span>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ color: "#000", borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0px 0px 0px 0px #ccc" }}
				iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
				icon={<LearningAppIcon />}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.backgroundSecondary, backgroundColor: theme.colors.branding, padding: "0 6px 0 6px", borderRadius: "4px" }}>2019</h3>
					<BoldText>
						{language.experiencePage.timeline.labelInstitution}: <span>Udemy</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelCategory}: <span>{language.experiencePage.timeline.labelExtensionCourse}</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelTitle}: <span>Java: Fundamentos de programação</span>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ color: "#000", borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0px 0px 0px 0px #ccc" }}
				iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
				icon={<LearningAppIcon />}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.backgroundSecondary, backgroundColor: theme.colors.branding, padding: "0 6px 0 6px", borderRadius: "4px" }}>2019</h3>
					<BoldText>
						{language.experiencePage.timeline.labelInstitution}: <span>Udemy</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelCategory}: <span>{language.experiencePage.timeline.labelExtensionCourse}</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelTitle}: <span>Framework bootstrap 4 - Completo, prático e responsivo</span>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ color: "#000", borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0px 0px 0px 0px #ccc" }}
				iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
				icon={<LearningAppIcon />}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.backgroundSecondary, backgroundColor: theme.colors.branding, padding: "0 6px 0 6px", borderRadius: "4px" }}>2019</h3>
					<BoldText>
						{language.experiencePage.timeline.labelInstitution}: <span>Udemy</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelCategory}: <span>{language.experiencePage.timeline.labelExtensionCourse}</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelTitle}: <span>Django 2.0 avançado, dominando o framework</span>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ color: "#000", borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0px 0px 0px 0px #ccc" }}
				iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
				icon={<LearningAppIcon />}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.backgroundSecondary, backgroundColor: theme.colors.branding, padding: "0 6px 0 6px", borderRadius: "4px" }}>2019</h3>
					<BoldText>
						{language.experiencePage.timeline.labelInstitution}: <span>Udemy</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelCategory}: <span>{language.experiencePage.timeline.labelExtensionCourse}</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelTitle}: <span>Desenvolvimento de aplicativos Android com Java e Android Studio</span>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ color: "#000", borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0px 0px 0px 0px #ccc" }}
				iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
				icon={<LearningAppIcon />}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.backgroundSecondary, backgroundColor: theme.colors.branding, padding: "0 6px 0 6px", borderRadius: "4px" }}>2019</h3>
					<BoldText>
						{language.experiencePage.timeline.labelInstitution}: <span>SENAC - Serviço Nacional de Aprendizagem Comercial</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelCategory}: <span>Workshop</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelTitle}: <span>Relacionamento interpessoal no trabalho</span>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ color: "#000", borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0px 0px 0px 0px #ccc" }}
				iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
				icon={<LearningAppIcon />}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.backgroundSecondary, backgroundColor: theme.colors.branding, padding: "0 6px 0 6px", borderRadius: "4px" }}>2019</h3>
					<BoldText>
						{language.experiencePage.timeline.labelInstitution}: <span>The Forense</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelCategory}: <span>Congresso digital</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelTitle}: <span>Direito, Tecnologia e Proteção de Dados</span>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ color: "#000", borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0px 0px 0px 0px #ccc" }}
				iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
				icon={<LearningAppIcon />}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.backgroundSecondary, backgroundColor: theme.colors.branding, padding: "0 6px 0 6px", borderRadius: "4px" }}>2020</h3>
					<BoldText>
						{language.experiencePage.timeline.labelInstitution}: <span>Udemy</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelCategory}: <span>{language.experiencePage.timeline.labelExtensionCourse}</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelTitle}: <span>Construção de aplicativos mobile do zero com React Native e Redux</span>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ color: "#000", borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0px 0px 0px 0px #ccc" }}
				iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
				icon={<LearningAppIcon />}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.backgroundSecondary, backgroundColor: theme.colors.branding, padding: "0 6px 0 6px", borderRadius: "4px" }}>2020</h3>
					<BoldText>
						{language.experiencePage.timeline.labelInstitution}: <span>Udemy</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelCategory}: <span>{language.experiencePage.timeline.labelExtensionCourse}</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelTitle}: <span>Criando poderosas API's RESTful com Django Rest Framework</span>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ color: "#000", borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0px 0px 0px 0px #ccc" }}
				iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
				icon={<LearningAppIcon />}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.backgroundSecondary, backgroundColor: theme.colors.branding, padding: "0 6px 0 6px", borderRadius: "4px" }}>2020</h3>
					<BoldText>
						{language.experiencePage.timeline.labelInstitution}: <span>Alura</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelCategory}: <span>{language.experiencePage.timeline.labelExtensionCourse}</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelTitle}: <span>Fundamentos de SEO: Primeiros passos para ranquear seu site na Busca Orgânica</span>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ color: "#000", borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0px 0px 0px 0px #ccc" }}
				iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
				icon={<WorkIcon />}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.backgroundSecondary, backgroundColor: theme.colors.branding, padding: "0 6px 0 6px", borderRadius: "4px" }}>2021</h3>
					<BoldText>
						{language.experiencePage.timeline.labelCompany}: <span>Armazém Paraíba</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelPosition}: <span>Desenvolvedor Júnior</span>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>
		</VerticalTimeline>
	);
}
