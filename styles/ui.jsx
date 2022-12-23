import styled from "styled-components";

export const TitleH1 = styled.h1`
	color: ${(props) => props.theme.colors.title};

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

export const TitleH2 = styled.h2`
	color: ${(props) => props.theme.colors.title};

	@media (max-width: 1600px) {
		font-size: ${(props) => props.theme.fontSizes.lg};
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

export const TitleH3 = styled.h3`
	z-index: 2;
	color: ${(props) => props.theme.colors.title};
	font-size: ${(props) => props.theme.fontSizes.md};

	@media (max-width: 900px) {
		font-size: ${(props) => props.theme.fontSizes.sm};
	}
`;

export const BodyText = styled.p`
	color: ${(props) => props.theme.colors.body};
	font-size: ${(props) => props.theme.fontSizes.md};

	@media (max-width: 600px) {
		font-size: ${(props) => props.theme.fontSizes.sm};
	}
`;

export const TitleSection = styled.h2`
	font-weight: 700;
	color: ${(props) => props.theme.colors.branding};
	font-size: 26px;
	@media (max-width: 900px) {
		font-size: 18px;
	}
`;

export const ContainerTitleSection = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 30px;
	width: 100%;

	@media (max-width: 900px) {
		margin-top: 40px;
	}

	svg {
		color: ${(props) => props.theme.colors.branding};
		width: 44px;
		height: 44px;
		margin-right: 10px;

		@media (max-width: 1400px) {
			width: 34px;
			height: 34px;
		}

		@media (max-width: 900px) {
			width: 28px;
			height: 28px;
		}
	}
`;
