import styled from "styled-components";

const ThemeButtonsContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

const ButtonTheme = styled.div`
	margin: 5px;
	width: 24px;
	height: 24px;
	border: 1px solid #fff;
	//background-color: #fff;
	border-radius: 50%;

	&:hover {
		cursor: pointer;
		opacity: 0.8;
	}

	@media (max-width: 1200px) {
		width: 18px;
		height: 18px;
	}

	@media (max-width: 900px) {
		width: 16px;
		height: 16px;
	}
`;

export default function ThemeButtons() {
	return (
		<ThemeButtonsContainer>
			<ButtonTheme style={{ background: "#171E26" }} />
			<ButtonTheme style={{ background: "#fff" }} />
			<ButtonTheme style={{ background: "#FCD434" }} />
			<ButtonTheme style={{ background: "#4C18DF" }} />
			<ButtonTheme style={{ background: "#17A536" }} />
		</ThemeButtonsContainer>
	);
}
