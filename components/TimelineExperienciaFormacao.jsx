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

const TimelineContent = styled.div``;

export default function TimelinePortifolio(props) {
	const theme = useTheme();

	return (
		<VerticalTimeline lineColor={theme.colors.branding}>
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
