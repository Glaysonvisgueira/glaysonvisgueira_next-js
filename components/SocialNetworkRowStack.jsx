import { useRouter } from "next/router";
import styled from "styled-components";

//Material icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const SocialMediaContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;

	@media (max-width: 600px) {
		justify-content: space-between;
	}
`;

const ButtonSocialMediaIcon = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 5px;
	width: 36px;
	height: 36px;
	//background-color: #29313c;
	background-color: ${(props) => props.theme.colors.backgroundSecondary};

	border-radius: 4px;

	&:hover {
		cursor: pointer;
		opacity: 0.8;
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
				<FacebookIcon sx={{ color: "#FCD434" }} />
			</ButtonSocialMediaIcon>

			<ButtonSocialMediaIcon onClick={redirectToGithub}>
				<GitHubIcon sx={{ color: "#FCD434" }} />
			</ButtonSocialMediaIcon>

			<ButtonSocialMediaIcon onClick={redirectToEmail}>
				<ContactMailIcon sx={{ color: "#FCD434" }} />
			</ButtonSocialMediaIcon>

			<ButtonSocialMediaIcon onClick={redirectToWhatsapp}>
				<WhatsAppIcon sx={{ color: "#FCD434" }} />
			</ButtonSocialMediaIcon>

			<ButtonSocialMediaIcon onClick={redirectToTelegram}>
				<TelegramIcon sx={{ color: "#FCD434" }} />
			</ButtonSocialMediaIcon>

			<ButtonSocialMediaIcon onClick={redirectToInstagram}>
				<InstagramIcon sx={{ color: "#FCD434" }} />
			</ButtonSocialMediaIcon>

			<ButtonSocialMediaIcon onClick={redirectToLinkedin}>
				<LinkedInIcon sx={{ color: "#FCD434" }} />
			</ButtonSocialMediaIcon>
		</SocialMediaContainer>
	);
}
