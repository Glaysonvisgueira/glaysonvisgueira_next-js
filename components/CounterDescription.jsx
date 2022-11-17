import styled from "styled-components";

const WrapperDiv = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	flex-direction: column;
	//width: 300px;
	//border: 2px solid ${(props) => props.theme.colors.branding};
	/* border-radius: 8px;
	padding: 8px; */
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
		//border-image: linear-gradient(to bottom, red, rgba(0, 0, 0, 0)) 1 100%;
		//background: linear-gradient(to right, ${(props) => props.theme.colors.branding}, #000000);
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
				+{props.numeroAnos} <span>anos</span>
			</h2>
			<div className="hr" />
			<p>{props.description}</p>
		</WrapperDiv>
	);
}
