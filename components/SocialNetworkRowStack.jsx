import { useRouter } from "next/router";
import styled from "styled-components";

import { Facebook } from "@styled-icons/entypo-social/Facebook";
import { Instagram } from "@styled-icons/icomoon/Instagram";
import { Telegram } from "@styled-icons/boxicons-logos/Telegram";
import { MailSend } from "@styled-icons/boxicons-regular/MailSend";
import { LogoWhatsapp } from "@styled-icons/ionicons-solid/LogoWhatsapp";
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare";
import { Github } from "@styled-icons/bootstrap/Github";

//Material icons

const SocialMediaContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;

	@media (max-width: 600px) {
		width: 100%;
		//justify-content: space-between;
		margin-bottom: 20px;
	}
`;

const ButtonSocialMediaIcon = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 5px;
	width: 32px;
	height: 32px;
	background-color: ${(props) => props.theme.colors.backgroundSecondary};
	transition: all 0.3s ease;
	border-radius: 4px;

	&:hover {
		cursor: pointer;
	}

	&:active {
		opacity: 0.5;
	}

	svg {
		color: ${(props) => props.theme.colors.branding};
		width: 24px;
		height: 24px;

		&:hover .facebook {
			color: #fff;
		}
	}

	@media (max-width: 600px) {
		margin-left: 3px;
		margin-right: 3px;
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
				<Facebook className="facebook" />
			</ButtonSocialMediaIcon>

			<ButtonSocialMediaIcon onClick={redirectToGithub}>
				<Github />
			</ButtonSocialMediaIcon>

			<ButtonSocialMediaIcon onClick={redirectToEmail}>
				<MailSend />
			</ButtonSocialMediaIcon>

			<ButtonSocialMediaIcon onClick={redirectToWhatsapp}>
				<LogoWhatsapp />
			</ButtonSocialMediaIcon>

			<ButtonSocialMediaIcon onClick={redirectToTelegram}>
				<Telegram />
			</ButtonSocialMediaIcon>

			<ButtonSocialMediaIcon onClick={redirectToInstagram}>
				<Instagram />
			</ButtonSocialMediaIcon>

			<ButtonSocialMediaIcon onClick={redirectToLinkedin}>
				<LinkedinSquare />
			</ButtonSocialMediaIcon>
		</SocialMediaContainer>
	);
}

/*

Container com as cores das techs

<SocialMediaContainer>
			<ButtonSocialMediaIcon onClick={redirectToFacebook}>
				<Facebook style={{ color: "#3C5A99" }} />
			</ButtonSocialMediaIcon>

			<ButtonSocialMediaIcon onClick={redirectToGithub}>
				<Github style={{ color: "#818181" }} />
			</ButtonSocialMediaIcon>

			<ButtonSocialMediaIcon onClick={redirectToEmail}>
				<MailSend style={{ color: "#DB4437" }} />
			</ButtonSocialMediaIcon>

			<ButtonSocialMediaIcon onClick={redirectToWhatsapp}>
				<LogoWhatsapp style={{ color: "#25d366" }} />
			</ButtonSocialMediaIcon>

			<ButtonSocialMediaIcon onClick={redirectToTelegram}>
				<Telegram style={{ color: "#0088cc" }} />
			</ButtonSocialMediaIcon>

			<ButtonSocialMediaIcon onClick={redirectToInstagram}>
				<Instagram style={{ color: "#c13584" }} />
			</ButtonSocialMediaIcon>

			<ButtonSocialMediaIcon onClick={redirectToLinkedin}>
				<LinkedinSquare style={{ color: "#0077b5" }} />
			</ButtonSocialMediaIcon>
		</SocialMediaContainer>
*/
