import styled from "styled-components";
import Image from "next/image";

//Ícones
import { Github } from "@styled-icons/bootstrap/Github";

const GithubStatsCard = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	width: 300px;
	height: 420px;
	border: 2px solid ${(props) => props.theme.colors.branding};
	border-radius: 8px;
	flex-direction: column;
	overflow: hidden;
	position: relative;

	svg {
		color: ${(props) => props.theme.colors.backgroundSecondary};
		width: 28px;
		height: 28px;
		position: absolute;
		top: 10px;
		right: 10px;
	}

	.image-rounded {
		border-radius: 50%;
	}

	.background {
		width: 100%;
		height: 150px;
		background-color: ${(props) => props.theme.colors.branding};
	}

	.img {
		width: 140px;
		height: 140px;
		border-radius: 50%;
		border: 5px solid ${(props) => props.theme.colors.branding};
		background-color: ${(props) => props.theme.colors.backgroundSecondary};
		position: absolute;
		top: 30px;
	}

	.content {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		flex-direction: column;
		width: 100%;
		height: 100%;
		padding: 20px;

		h3 {
			color: ${(props) => props.theme.colors.title};
			margin-top: 60px;
		}

		h2 {
			color: ${(props) => props.theme.colors.body};
			margin-bottom: 20px;
			font-size: 14px;
			margin-top: 5px;
			font-weight: 300;
		}

		p {
			text-align: center;
			color: ${(props) => props.theme.colors.body};
		}
	}

	.github-stats {
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		width: 90%;
		height: 60px;
		background: ${(props) => props.theme.colors.backgroundSecondary};
		border-radius: 8px;
		padding: 10px;
		position: absolute;
		bottom: 15px;

		.stats {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;

			p {
				font-size: 18px;
				font-weight: 900;
				color: ${(props) => props.theme.colors.title};
				margin-bottom: 5px;
			}

			span {
				font-size: 10px;
				color: ${(props) => props.theme.colors.body};
			}
		}
	}
`;

export default function AboutMe(props) {
	return (
		<GithubStatsCard>
			<Github />
			<div className="background" />
			<div className="img">
				<Image src="/img/user-photo.jpg" alt="Desenvolvedor Glayson Visgueira" layout="fill" objectFit="cover" className="image-rounded" />
			</div>
			<div className="content">
				<h3>Glayson Visgueira</h3>
				<h2>@glaysonvisgueira</h2>
				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
				<div className="github-stats">
					<div className="stats">
						<p>11</p>
						<span>Seguidores</span>
					</div>
					<div className="stats">
						<p>31</p>
						<span>Seguindo</span>
					</div>
					<div className="stats">
						<p>35</p>
						<span>Repositórios</span>
					</div>
				</div>
			</div>
		</GithubStatsCard>
	);
}
