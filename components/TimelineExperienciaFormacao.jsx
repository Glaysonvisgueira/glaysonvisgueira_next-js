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

export default function TimelinePortifolio(props) {
	const theme = useTheme();

	return (
		<VerticalTimeline lineColor={theme.colors.branding}>
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ borderBottom: `5px solid ${theme.colors.branding}`, boxShadow: "0 0 0px 0 #ddd" }}
				iconStyle={{ background: theme.colors.backgroundSecondary, color: "#fff", boxShadow: `0 0 0 4px ${theme.colors.branding}, inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)` }}
				icon={<Github />}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.backgroundSecondary }}>2011</h3>
					<h4>Instituição: S.O.S. Educação Profissional</h4>
					<h4>Tipo: S.O.S. Educação Profissional</h4>
					<h4>Descrição: S.O.S. Educação Profissional</h4>
				</TimelineContent>
			</VerticalTimelineElement>

			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ color: "#000", borderBottom: `5px solid ${theme.colors.branding}`, boxShadow: "0 0 0px 0 #ddd" }}
				iconStyle={{ background: theme.colors.backgroundSecondary, color: "#fff", boxShadow: `0 0 0 4px ${theme.colors.branding}, inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)` }}
				icon={<Github />}>
				<h3 className="vertical-timeline-element-title">TÍTULO</h3>
				<h4 className="vertical-timeline-element-subtitle">SUBTÍTULO</h4>
				<p>Descrição</p>
				<span>Data</span>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ color: "#000", borderBottom: `5px solid ${theme.colors.branding}`, boxShadow: "0 0 0px 0 #ddd" }}
				iconStyle={{ background: theme.colors.backgroundSecondary, color: "#fff", boxShadow: `0 0 0 4px ${theme.colors.branding}, inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)` }}
				icon={<Github />}>
				<h3 className="vertical-timeline-element-title">TÍTULO</h3>
				<h4 className="vertical-timeline-element-subtitle">SUBTÍTULO</h4>
				<p>Descrição</p>
				<span>Data</span>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ color: "#000", borderBottom: `5px solid ${theme.colors.branding}`, boxShadow: "0 0 0px 0 #ddd" }}
				iconStyle={{ background: theme.colors.backgroundSecondary, color: "#fff", boxShadow: `0 0 0 4px ${theme.colors.branding}, inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)` }}
				icon={<Github />}>
				<h3 className="vertical-timeline-element-title">TÍTULO</h3>
				<h4 className="vertical-timeline-element-subtitle">SUBTÍTULO</h4>
				<p>Descrição</p>
				<span>Data</span>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ color: "#000", borderBottom: `5px solid ${theme.colors.branding}`, boxShadow: "0 0 0px 0 #ddd" }}
				iconStyle={{ background: theme.colors.backgroundSecondary, color: "#fff", boxShadow: `0 0 0 4px ${theme.colors.branding}, inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)` }}
				icon={<Github />}>
				<h3 className="vertical-timeline-element-title">TÍTULO</h3>
				<h4 className="vertical-timeline-element-subtitle">SUBTÍTULO</h4>
				<p>Descrição</p>
				<span>Data</span>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ color: "#000", borderBottom: `5px solid ${theme.colors.branding}`, boxShadow: "0 0 0px 0 #ddd" }}
				iconStyle={{ background: theme.colors.backgroundSecondary, color: "#fff", boxShadow: `0 0 0 4px ${theme.colors.branding}, inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)` }}
				icon={<Github />}>
				<h3 className="vertical-timeline-element-title">TÍTULO</h3>
				<h4 className="vertical-timeline-element-subtitle">SUBTÍTULO</h4>
				<p>Descrição</p>
				<span>Data</span>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ color: "#000", borderBottom: `5px solid ${theme.colors.branding}`, boxShadow: "0 0 0px 0 #ddd" }}
				iconStyle={{ background: theme.colors.backgroundSecondary, color: "#fff", boxShadow: `0 0 0 4px ${theme.colors.branding}, inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)` }}
				icon={<Github />}>
				<h3 className="vertical-timeline-element-title">TÍTULO</h3>
				<h4 className="vertical-timeline-element-subtitle">SUBTÍTULO</h4>
				<p>Descrição</p>
				<span>Data</span>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ color: "#000", borderBottom: `5px solid ${theme.colors.branding}`, boxShadow: "0 0 0px 0 #ddd" }}
				iconStyle={{ background: theme.colors.backgroundSecondary, color: "#fff", boxShadow: `0 0 0 4px ${theme.colors.branding}, inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)` }}
				icon={<Github />}>
				<h3 className="vertical-timeline-element-title">TÍTULO</h3>
				<h4 className="vertical-timeline-element-subtitle">SUBTÍTULO</h4>
				<p>Descrição</p>
				<span>Data</span>
			</VerticalTimelineElement>
			{/*<VerticalTimelineElement iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }} icon={<GithubIcon />} /> */}
		</VerticalTimeline>
	);
}
