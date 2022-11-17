import styled from "styled-components";

const WrapperDiv = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	flex-direction: column;
	width: 300px;
	//background-color: #ccc;

	h2 {
		color: ${(props) => props.theme.colors.branding};
		font-size: 58px;

		span {
			font-size: 38px;
			color: #fff;
		}
	}

	.hr {
		border-top: 2px solid ${(props) => props.theme.colors.branding};
		width: 100%;
		margin-top: 5px;
		margin-bottom: 5px;
	}

	p {
		font-size: 22px;
		color: ${(props) => props.theme.colors.body};
	}
`;

export default function CounterDescription(props) {
	return (
		<WrapperDiv>
			<h2>
				306 <span>mil</span>
			</h2>
			<div className="hr" />
			<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
		</WrapperDiv>
	);
}
