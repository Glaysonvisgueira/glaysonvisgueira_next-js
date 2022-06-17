import React from "react";
import styled from "styled-components";

//MUI components
import Grow from "@mui/material/Grow";

//Custom components
import Head from "@/components/Head";
import SocialNetworkRowStack from "@/components/SocialNetworkRowStack";
import LandingAnimation from "@/components/LandingPageAnimation";
import SobreMimPage from "../pages/sobre-mim";

const LandingPageContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;

	@media (max-width: 800px) {
		flex-direction: column;
	}
`;

const TitleLandingContainer = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	flex-direction: column;
	padding: 10px;
	//background: #ccc;

	@media (max-width: 600px) {
		flex: 0.5;
	}
`;

const TitleLanding = styled.div`
	font-size: 50px;
	font-weight: 700;
	color: ${(props) => props.theme.colors.branding};

	@media (max-width: 1400px) {
		font-size: 40px;
	}

	@media (max-width: 1200px) {
		font-size: 36px;
	}

	@media (max-width: 600px) {
		font-size: 26px;
	}
`;

const SubTitleLanding = styled.div`
	font-weight: 400;
	color: ${(props) => props.theme.colors.body};
	text-align: left;
	margin-top: 20px;
	margin-bottom: 20px;

	@media (max-width: 1980px) {
		font-size: ${(props) => props.theme.fontSizes.lg};
	}

	@media (max-width: 1200px) {
		font-size: ${(props) => props.theme.fontSizes.md};
	}

	@media (max-width: 900px) {
		font-size: ${(props) => props.theme.fontSizes.md};
	}
`;

const ImageLandingContainer = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: center;
	padding: 10px;
	flex: 0.6;
	//border: 2px solid ${(props) => props.theme.colors.textColorTitle};
	border-radius: 8px;

	@media (max-width: 800px) {
		order: -1;
	}
`;

const HrBorder = styled.div`
	width: 100%;
	border-top: 2px solid ${(props) => props.theme.colors.subtitle};
	margin-top: 15px;
	margin-bottom: 15px;
`;

const SectionOne = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	min-height: 100vh;
`;

const ButtonSaibaMais = styled.button`
	width: 200px;
	height: 34px;
	background-color: ${(props) => props.theme.colors.branding};
	color: ${(props) => props.theme.colors.backgroundSecondary};
	border-radius: 4px;
	margin-top: 15px;
	margin-bottom: 15px;
	border: none;
	font-size: ${(props) => props.theme.fontSizes.lg};

	&:hover {
		cursor: pointer;
		opacity: 0.8;
	}

	&:active {
		opacity: 0.5;
	}
`;

export default function HomePage(props) {
	const [checked, setChecked] = React.useState(true);

	const handleChange = () => {
		setChecked((prev) => !prev);
	};

	return (
		<>
			<Grow in={checked}>
				<LandingPageContainer>
					<Head title="Homepage" metaDescription="" keywords="" />

					<TitleLandingContainer>
						<TitleLanding>&lt;Glayson Visgueira /&gt;</TitleLanding>
						<SubTitleLanding> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</SubTitleLanding>

						<ButtonSaibaMais>Saiba mais</ButtonSaibaMais>
						<SocialNetworkRowStack />
					</TitleLandingContainer>
				</LandingPageContainer>
			</Grow>
		</>
	);
}
