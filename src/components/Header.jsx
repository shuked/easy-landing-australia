import { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
// import Menu from './Menu'
import { Link as Scroll } from 'react-scroll'



const HeaderContainer = styled.header`
    background-color: rgba(0,0,0,0.5);
    color: #ffffff;
    position: sticky;
    top: 0;
    display:flex;
    justify-content:space-between;
    align-items: center;
    padding: 20px;
    height: 5vh;
`
const Logo = styled.h1`
    flex-grow: 5;
    cursor: pointer;
`

const Menu = styled.menu`
    display: flex;
    justify-content: space-between;
    flex-grow: 2;

`

function Header() {

  return (
    <HeaderContainer >
        <Logo>
            <Scroll to="welcome" smooth= "true">
                Easy Landing Australia
            </Scroll>
        </Logo>
        {/* <Menu /> */}
        <Menu>
            <Scroll to="about-us">
                About Us
            </Scroll>
            <Scroll to="our-project">
                Our Project
            </Scroll>
            <Scroll to="visa">
                Visa
            </Scroll>
            <Scroll to="contact-us">
                Contact Us
            </Scroll>
        </Menu>
        
    </HeaderContainer>
  )
}

export default Header