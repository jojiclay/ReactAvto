import React from 'react'
import { FooterContainer, FooterIcons, FooterMenuA, FooterMobIcons, FooterWrapper } from './style'
import  Youtube from "../../assets/youtube.svg"
import  Istagramm from "../../assets/instagramm.svg"
import  Netimg from "../../assets/net.svg"

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <div className='FootCam'>Camper</div>
        <FooterMobIcons>
              <img src={Youtube} alt="Youtube" />
              <img src={Istagramm} alt="Instagram" />
              <img src={Netimg} alt="Net-Image" />
            </FooterMobIcons>
        <FooterMenuA>
          <div>
            <h2>Services</h2>
            <p>Lodging</p>
            <p>Harbor</p>
            <p>Day Use</p>
          </div>
          <div>
            <h2>Menu</h2>
            <p>About</p>
            <p>Services</p>
            <p>Booking</p>
            <p>Blog</p>
          </div>
          <div>
            <h2>Contact</h2>
            <FooterIcons>
              <img src={Youtube} alt="Youtube" />
              <img src={Istagramm} alt="Instagram" />
              <img src={Netimg} alt="Net-Image" />
            </FooterIcons>
            <p>021 Korea Seul, LA</p>
            <p>camper@example.com</p>
            <p>(021) 345-6789-99</p>
          </div>
        </FooterMenuA>
      </FooterContainer>
    </FooterWrapper>
  )
}

export default Footer