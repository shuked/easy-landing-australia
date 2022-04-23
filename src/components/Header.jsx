import { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
// import Menu from './Menu'
import { Link as Scroll } from "react-scroll";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PopupMenu from "./header/PopupMenu";

const HeaderContainer = styled.header`
  background-color: rgba(255, 255, 255, 1);
  color: #000;
  /* position: sticky; */
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1vw 10vw;
  height: 5vh;
  @media (max-width: 1080px) {
    position: sticky;
    top: 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    
    }
  /* border-bottom: 1px solid #aaa; */
`;
const Logo = styled.h1`
  font-size: 1.5vw;
  flex-grow: 5;
  cursor: pointer;
  display: inline-block;
  margin-left: 1vw;
  @media (max-width: 1080px) {
    font-size: 4vw;
    
    }
`;


const Menu = styled.menu`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-grow: 2;
  @media (max-width: 1080px) {
        display: none;
        
    }
`;
const MenuItem = styled.div`
  cursor: pointer;
`;

const HeaderSocial = styled.aside`
  display: flex;
  justify-content: space-around;
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo>
        <Scroll to="container" smooth="true">
          EASY LANDING AUSTRALIA
        </Scroll>
      </Logo>
      {/* <Menu /> */}
      <Menu>
        <MenuItem>
          <Scroll to="about-us" smooth="true">
            About Us
          </Scroll>
        </MenuItem>
        <MenuItem>
          <Scroll to="our-project" smooth="true">
            Our Project
          </Scroll>
        </MenuItem>
        <MenuItem>
          <Scroll to="visa" smooth="true">
            Visa
          </Scroll>
        </MenuItem>

        <MenuItem>
          <Scroll to="contact-us" smooth="true">
            Contact Us
          </Scroll>
        </MenuItem>

        <MenuItem>
        <a href="https://www.instagram.com/easy_landing_australia/">
            <InstagramIcon sx={{ fontSize: "1vw" }} />
          </a>
        </MenuItem>

        <MenuItem>
        <a href="https://wa.me/614688917354">
            <WhatsAppIcon sx={{ fontSize: "1vw" }} />
          </a>
        </MenuItem>

      </Menu>
    </HeaderContainer>
  );
}

export default Header;
