import { useState } from "react";
import styled from "styled-components";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link as Scroll } from "react-scroll";



const WelcomeContainer = styled.div`
  margin: 3vw;
  /* background-color: rgba(0,0,0,0.3); */
  /* color: #ffffff; */
  display: none;
  flex-direction: column;
  min-height: 80vh;
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1); */
  @media (max-width: 1080px) {
  display: flex;
  }
  
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
  @media (max-width: 1080px) {
    font-size: 5vw;
  }
`;
const SideImage = styled.img`

    margin: 2vw;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
    
`;


function Welcome() {
  return (
      
    <WelcomeContainer id="welcome">
        {/* <WelcomeContent>
        
      </WelcomeContent> */}
      <WelcomeMenu>
        
        <Scroll to="our-project" smooth="true">
          <MenuItem>Our Project</MenuItem>
        </Scroll>
        <Scroll to="about-us" smooth="true">
          <MenuItem>About Us</MenuItem>
        </Scroll>
        <Scroll to="visa" smooth="true">
          <MenuItem>Visa 462</MenuItem>
        </Scroll>
        <Scroll to="contact-us" smooth="true">
          <MenuItem>Contact Us</MenuItem>
        </Scroll>

      </WelcomeMenu>
      <SideImage src="https://wallpaper.dog/large/635907.jpg" alt="" />
      
    </WelcomeContainer>
  );
}

export default Welcome;
