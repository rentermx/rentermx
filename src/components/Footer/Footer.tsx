import React from "react";
import { styled } from '@mui/material/styles';
import footerStyles from './FooterStyles';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';

type FooterProps = {

};

const StyledFooter = styled('footer')(({ theme }) => footerStyles('strive'));

const Footer: React.FC<FooterProps> = () => {
  return (
    <section className="bg-[#212121] flex items-center justify-center flex-col">
      <div className="container">
        <StyledFooter>
          <div className="footer-links-section">
          <ul>
            <h1 className="footer-link-title">Mapa del sitio</h1>
              <li className="footer-link">
                Servicios
              </li>
              <li className="footer-link">
                Nosotros
              </li>
              <li className="footer-link">
                Contacto
              </li>
          </ul>
          <ul>
            <h1 className="footer-link-title">Contacto</h1>
              <div className="footer-text">
                +52 33-7688-5025
              </div>
              <div className="footer-text">
                +52 33-3678-5624
              </div>
          </ul>
          <ul>
            <h1 className="footer-link-title">Ubicación</h1>
              <div className="footer-text">
                Calle Maderas #100, Col. Las Pintitas, El Salto Jalisco, C.P. 45693
              </div>
          </ul>
          </div>
          <div className="footer-policy-section">
            <span>© 2020 Appy. All rights reserved.</span>
            <span>Terms · Privacy Policy</span>
            <div>
              <span className="footer-media-button">
                <InstagramIcon></InstagramIcon>
              </span>
              <span className="footer-media-button">
                <FacebookIcon></FacebookIcon>
              </span>
              <span className="footer-media-button">
                <TwitterIcon></TwitterIcon>
              </span>
              <span className="footer-media-button">
                <LanguageIcon></LanguageIcon>
              </span>
            </div>
          </div>
        </StyledFooter>
      </div>
    </section>
  );
};

export default Footer;