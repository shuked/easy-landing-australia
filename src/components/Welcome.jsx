import { useState } from "react";
import styled from "styled-components";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link as Scroll } from "react-scroll";


const WelcomeContainer = styled.div`
  margin: 3vw;
  /* background-color: rgba(0,0,0,0.3); */
  /* color: #ffffff; */
  display: flex;
  height: 80vh;
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1); */
`;
const WelcomeContent = styled.h1`
  font-size: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 8;
`;
const WelcomeMenu = styled.div`
  padding: 5vw;
  text-align: center;
  /* flex-grow:1; */
`;
const MenuItem = styled.h1`
  font-size: 2.5vw;
  cursor: pointer;
  /* &:hover {
    color: #AAA;
  } */
`;

function Welcome() {
  return (
      
    <WelcomeContainer id="welcome">
        <WelcomeContent>
        <h1>ICON</h1>
        <Scroll to="about-us" smooth="true">
          <KeyboardArrowDownIcon sx={{ fontSize: "7rem", cursor: "pointer" }} />
        </Scroll>
      </WelcomeContent>
      <WelcomeMenu>
        <Scroll to="about-us" smooth="true">
          <MenuItem>About Us</MenuItem>
        </Scroll>
        <Scroll to="our-project" smooth="true">
          <MenuItem>Our Project</MenuItem>
        </Scroll>
        <Scroll to="visa" smooth="true">
          <MenuItem>Visa 462</MenuItem>
        </Scroll>
        <Scroll to="contact-us" smooth="true">
          <MenuItem>Contact Us</MenuItem>
        </Scroll>
        
      </WelcomeMenu>

      
    </WelcomeContainer>
  );
}

export default Welcome;
