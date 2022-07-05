import styled from "styled-components";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useTheme } from "styled-components";

import { Github } from "@styled-icons/bootstrap/Github";

const GithubIcon = styled(Github)`
	color: #000;
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
	color: ${(props) => props.theme.colors.background};
	font-weight: 800;
	margin-top: 2px;
	margin-bottom: 2px;
	span {
		font-weight: 400;
	}
`;

export default function TimelinePortifolio(props) {
	const theme = useTheme();

	return (
		<VerticalTimeline lineColor={theme.colors.branding}>
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0 0 0px 0 #ddd" }}
				iconStyle={{ background: theme.colors.backgroundSecondary, color: "#fff", boxShadow: `0 0 0 4px ${theme.colors.branding}, inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)` }}
				icon={<Github />}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.backgroundSecondary, backgroundColor: theme.colors.branding, padding: "0 4px 0 4px", borderRadius: "4px" }}>2011</h3>
					<BoldText>
						Instituição: <span>S.O.S. Educação Profissional</span>
					</BoldText>
					<BoldText>
						Categoria: <span>Curso profissionalizante</span>
					</BoldText>
					<BoldText>
						Título: <span>Administração, empregabilidade, digitação e informática fundamental</span>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ color: "#000", borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0 0 0px 0 #ddd" }}
				iconStyle={{ background: theme.colors.backgroundSecondary, color: "#fff", boxShadow: `0 0 0 4px ${theme.colors.branding}, inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)` }}
				icon={<Github />}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.backgroundSecondary, backgroundColor: theme.colors.branding, padding: "0 4px 0 4px", borderRadius: "4px" }}>2013</h3>
					<BoldText>
						Empresa: <span>Armazém Paraíba</span>
					</BoldText>
					<BoldText>
						Cargo: <span>Auxiliar administrativo</span>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ color: "#000", borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0 0 0px 0 #ddd" }}
				iconStyle={{ background: theme.colors.backgroundSecondary, color: "#fff", boxShadow: `0 0 0 4px ${theme.colors.branding}, inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)` }}
				icon={<Github />}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.backgroundSecondary, backgroundColor: theme.colors.branding, padding: "0 4px 0 4px", borderRadius: "4px" }}>2014</h3>
					<BoldText>
						Instituição: <span>SENAC - Serviço Nacional de Aprendizagem Comercial</span>
					</BoldText>
					<BoldText>
						Categoria: <span>Curso profissionalizante</span>
					</BoldText>
					<BoldText>
						Título: <span>Aperfeiçoamento em operações logísticas</span>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ color: "#000", borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0 0 0px 0 #ddd" }}
				iconStyle={{ background: theme.colors.backgroundSecondary, color: "#fff", boxShadow: `0 0 0 4px ${theme.colors.branding}, inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)` }}
				icon={<Github />}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.backgroundSecondary, backgroundColor: theme.colors.branding, padding: "0 4px 0 4px", borderRadius: "4px" }}>2014</h3>
					<BoldText>
						Instituição: <span>Centro Universitário Maurício de Nassau</span>
					</BoldText>
					<BoldText>
						Categoria: <span>Bacharelado</span>
					</BoldText>
					<BoldText>
						Título: <span>Sistemas de Informações</span>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ color: "#000", borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0 0 0px 0 #ddd" }}
				iconStyle={{ background: theme.colors.backgroundSecondary, color: "#fff", boxShadow: `0 0 0 4px ${theme.colors.branding}, inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)` }}
				icon={<Github />}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.backgroundSecondary, backgroundColor: theme.colors.branding, padding: "0 4px 0 4px", borderRadius: "4px" }}>2018</h3>
					<BoldText>
						Instituição: <span>Centro Universitário Maurício de Nassau</span>
					</BoldText>
					<BoldText>
						Categoria: <span>Workshop</span>
					</BoldText>
					<BoldText>
						Título: <span>IaaS - Infraestrutura como serviço (infrastructure as a service)</span>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ color: "#000", borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0 0 0px 0 #ddd" }}
				iconStyle={{ background: theme.colors.backgroundSecondary, color: "#fff", boxShadow: `0 0 0 4px ${theme.colors.branding}, inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)` }}
				icon={<Github />}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.backgroundSecondary, backgroundColor: theme.colors.branding, padding: "0 4px 0 4px", borderRadius: "4px" }}>2018</h3>
					<BoldText>
						Instituição: <span>Fábrica de Gênios</span>
					</BoldText>
					<BoldText>
						Categoria: <span>Curso de extensão</span>
					</BoldText>
					<BoldText>
						Título: <span>Arduino - Essencial para Automação Residencial</span>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ color: "#000", borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0 0 0px 0 #ddd" }}
				iconStyle={{ background: theme.colors.backgroundSecondary, color: "#fff", boxShadow: `0 0 0 4px ${theme.colors.branding}, inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)` }}
				icon={<Github />}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.backgroundSecondary, backgroundColor: theme.colors.branding, padding: "0 4px 0 4px", borderRadius: "4px" }}>2019</h3>
					<BoldText>
						Instituição: <span>Udemy</span>
					</BoldText>
					<BoldText>
						Categoria: <span>Curso de extensão</span>
					</BoldText>
					<BoldText>
						Título: <span>Java: Fundamentos de programação</span>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ color: "#000", borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0 0 0px 0 #ddd" }}
				iconStyle={{ background: theme.colors.backgroundSecondary, color: "#fff", boxShadow: `0 0 0 4px ${theme.colors.branding}, inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)` }}
				icon={<Github />}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.backgroundSecondary, backgroundColor: theme.colors.branding, padding: "0 4px 0 4px", borderRadius: "4px" }}>2019</h3>
					<BoldText>
						Instituição: <span>Udemy</span>
					</BoldText>
					<BoldText>
						Categoria: <span>Curso de extensão</span>
					</BoldText>
					<BoldText>
						Título: <span>Framework bootstrap 4 - Completo, prático e responsivo</span>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ color: "#000", borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0 0 0px 0 #ddd" }}
				iconStyle={{ background: theme.colors.backgroundSecondary, color: "#fff", boxShadow: `0 0 0 4px ${theme.colors.branding}, inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)` }}
				icon={<Github />}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.backgroundSecondary, backgroundColor: theme.colors.branding, padding: "0 4px 0 4px", borderRadius: "4px" }}>2019</h3>
					<BoldText>
						Instituição: <span>Udemy</span>
					</BoldText>
					<BoldText>
						Categoria: <span>Curso de extensão</span>
					</BoldText>
					<BoldText>
						Título: <span>Django 2.0 avançado, dominando o framework</span>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ color: "#000", borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0 0 0px 0 #ddd" }}
				iconStyle={{ background: theme.colors.backgroundSecondary, color: "#fff", boxShadow: `0 0 0 4px ${theme.colors.branding}, inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)` }}
				icon={<Github />}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.backgroundSecondary, backgroundColor: theme.colors.branding, padding: "0 4px 0 4px", borderRadius: "4px" }}>2019</h3>
					<BoldText>
						Instituição: <span>Udemy</span>
					</BoldText>
					<BoldText>
						Categoria: <span>Curso de extensão</span>
					</BoldText>
					<BoldText>
						Título: <span>Desenvolvimento de aplicativos Android com Java e Android Studio</span>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ color: "#000", borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0 0 0px 0 #ddd" }}
				iconStyle={{ background: theme.colors.backgroundSecondary, color: "#fff", boxShadow: `0 0 0 4px ${theme.colors.branding}, inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)` }}
				icon={<Github />}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.backgroundSecondary, backgroundColor: theme.colors.branding, padding: "0 4px 0 4px", borderRadius: "4px" }}>2019</h3>
					<BoldText>
						Instituição: <span>SENAC - Serviço Nacional de Aprendizagem Comercial</span>
					</BoldText>
					<BoldText>
						Categoria: <span>Workshop</span>
					</BoldText>
					<BoldText>
						Título: <span>Relacionamento interpessoal no trabalho</span>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ color: "#000", borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0 0 0px 0 #ddd" }}
				iconStyle={{ background: theme.colors.backgroundSecondary, color: "#fff", boxShadow: `0 0 0 4px ${theme.colors.branding}, inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)` }}
				icon={<Github />}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.backgroundSecondary, backgroundColor: theme.colors.branding, padding: "0 4px 0 4px", borderRadius: "4px" }}>2019</h3>
					<BoldText>
						Instituição: <span>The Forense</span>
					</BoldText>
					<BoldText>
						Categoria: <span>Congresso digital</span>
					</BoldText>
					<BoldText>
						Título: <span>Direito, Tecnologia e Proteção de Dados</span>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ color: "#000", borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0 0 0px 0 #ddd" }}
				iconStyle={{ background: theme.colors.backgroundSecondary, color: "#fff", boxShadow: `0 0 0 4px ${theme.colors.branding}, inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)` }}
				icon={<Github />}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.backgroundSecondary, backgroundColor: theme.colors.branding, padding: "0 4px 0 4px", borderRadius: "4px" }}>2020</h3>
					<BoldText>
						Instituição: <span>Udemy</span>
					</BoldText>
					<BoldText>
						Categoria: <span>Curso de extensão</span>
					</BoldText>
					<BoldText>
						Título: <span>Construção de aplicativos mobile do zero com React Native e Redux</span>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ color: "#000", borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0 0 0px 0 #ddd" }}
				iconStyle={{ background: theme.colors.backgroundSecondary, color: "#fff", boxShadow: `0 0 0 4px ${theme.colors.branding}, inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)` }}
				icon={<Github />}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.backgroundSecondary, backgroundColor: theme.colors.branding, padding: "0 4px 0 4px", borderRadius: "4px" }}>2020</h3>
					<BoldText>
						Instituição: <span>Udemy</span>
					</BoldText>
					<BoldText>
						Categoria: <span>Curso de extensão</span>
					</BoldText>
					<BoldText>
						Título: <span>Criando poderosas API's RESTful com Django Rest Framework</span>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ color: "#000", borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0 0 0px 0 #ddd" }}
				iconStyle={{ background: theme.colors.backgroundSecondary, color: "#fff", boxShadow: `0 0 0 4px ${theme.colors.branding}, inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)` }}
				icon={<Github />}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.backgroundSecondary, backgroundColor: theme.colors.branding, padding: "0 4px 0 4px", borderRadius: "4px" }}>2020</h3>
					<BoldText>
						Instituição: <span>Alura</span>
					</BoldText>
					<BoldText>
						Categoria: <span>Curso de extensão</span>
					</BoldText>
					<BoldText>
						Título: <span>Fundamentos de SEO: Primeiros passos para ranquear seu site na Busca Orgânica</span>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ color: "#000", borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0 0 0px 0 #ddd" }}
				iconStyle={{ background: theme.colors.backgroundSecondary, color: "#fff", boxShadow: `0 0 0 4px ${theme.colors.branding}, inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)` }}
				icon={<Github />}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.backgroundSecondary, backgroundColor: theme.colors.branding, padding: "0 4px 0 4px", borderRadius: "4px" }}>2021</h3>
					<BoldText>
						Empresa: <span>Armazém Paraíba</span>
					</BoldText>
					<BoldText>
						Cargo: <span>Desenvolvedor Júnior</span>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>
			{/*<VerticalTimelineElement iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }} icon={<GithubIcon />} /> */}
		</VerticalTimeline>
	);
}
