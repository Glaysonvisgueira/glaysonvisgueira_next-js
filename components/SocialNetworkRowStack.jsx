import { useRouter } from "next/router";
import styled from "styled-components";

import { Facebook } from "@styled-icons/entypo-social/Facebook";
import { Instagram } from "@styled-icons/icomoon/Instagram";
import { Telegram } from "@styled-icons/boxicons-logos/Telegram";
import { MailSend } from "@styled-icons/boxicons-regular/MailSend";
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare";
import { Github } from "@styled-icons/bootstrap/Github";
import { LogoWhatsapp } from "@styled-icons/ionicons-solid/LogoWhatsapp";

//Material icons

const SocialMediaContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	@media (max-width: 600px) {
		width: 100%;
		justify-content: space-between;
	}
`;

const ButtonSocialMediaIcon = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 5px;
	width: 32px;
	height: 32px;
	//background-color: #29313c;
	background-color: ${(props) => props.theme.colors.backgroundSecondary};

	border-radius: 4px;

	&:hover {
		cursor: pointer;
		opacity: 0.8;
	}

	&:active {
		opacity: 0.5;
	}

	svg {
		color: ${(props) => props.theme.colors.branding};
		width: 24px;
		height: 24px;
	}

	@media (max-width: 600px) {
		margin: 5px;
	}
`;

export default function SocialNetworkRowStack() {
	const router = useRouter();

	function redirectToFacebook() {
		window.open("https://www.facebook.com/glayson.visgueira", "_ blank");
	}

	function redirectToGithub() {
		window.open("https://github.com/Glaysonvisgueira", "_ blank");
	}

	function redirectToEmail() {
		window.open("mailto:glaysonwow@gmail.com", "_ blank");
	}

	function redirectToWhatsapp() {
		window.open("https://wa.me/5586999277101/?text=Olá%20Glayson,%20tudo%20bem?%20Vim através de sua página pessoal!", "_ blank");
	}

	function redirectToTelegram() {
		window.open("https://t.me/glayson_visgueira", "_ blank");
	}

	function redirectToInstagram() {
		window.open("https://www.instagram.com/glayson_visgueira", "_ blank");
	}

	function redirectToLinkedin() {
		window.open("https://www.linkedin.com/in/glayson-visgueira-7433a61b3/", "_ blank");
	}

	return (
		<SocialMediaContainer>
			<ButtonSocialMediaIcon onClick={redirectToFacebook}>
				<Facebook />
			</ButtonSocialMediaIcon>

			<ButtonSocialMediaIcon onClick={redirectToGithub}>
				<Github sx={{ color: "#FCD434" }} />
			</ButtonSocialMediaIcon>

			<ButtonSocialMediaIcon onClick={redirectToEmail}>
				<MailSend sx={{ color: "#FCD434" }} />
			</ButtonSocialMediaIcon>

			<ButtonSocialMediaIcon onClick={redirectToWhatsapp}>
				<LogoWhatsapp sx={{ color: "#FCD434" }} />
			</ButtonSocialMediaIcon>

			<ButtonSocialMediaIcon onClick={redirectToTelegram}>
				<Telegram sx={{ color: "#FCD434" }} />
			</ButtonSocialMediaIcon>

			<ButtonSocialMediaIcon onClick={redirectToInstagram}>
				<Instagram sx={{ color: "#FCD434" }} />
			</ButtonSocialMediaIcon>

			<ButtonSocialMediaIcon onClick={redirectToLinkedin}>
				<LinkedinSquare sx={{ color: "#FCD434" }} />
			</ButtonSocialMediaIcon>
		</SocialMediaContainer>
	);
}
