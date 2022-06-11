import styled from "styled-components";

//Material icons
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const SocialMediaContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

const ButtonSocialMediaIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 3px;
    width: 40px;
    height: 40px;
    background-color: #29313C;
    border-radius: 4px;

    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`;

export default function SocialNetworkRowStack() {
  return (    
      <SocialMediaContainer>
        
        <ButtonSocialMediaIcon>
            <FacebookIcon sx={{color: '#FCD434'}}/>
        </ButtonSocialMediaIcon>

        <ButtonSocialMediaIcon>
            <GitHubIcon sx={{color: '#FCD434'}} />
        </ButtonSocialMediaIcon>

        <ButtonSocialMediaIcon>
            <ContactMailIcon sx={{color: '#FCD434'}} />
        </ButtonSocialMediaIcon>

        <ButtonSocialMediaIcon>
            <WhatsAppIcon  sx={{color: '#FCD434'}}/>
        </ButtonSocialMediaIcon>

        <ButtonSocialMediaIcon>
            <TelegramIcon  sx={{color: '#FCD434'}}/>
        </ButtonSocialMediaIcon>

        <ButtonSocialMediaIcon>
            <InstagramIcon sx={{color: '#FCD434'}} />
        </ButtonSocialMediaIcon>

        <ButtonSocialMediaIcon>
            <LinkedInIcon  sx={{color: '#FCD434'}}/>
        </ButtonSocialMediaIcon>

      </SocialMediaContainer>
     
  )
}
