import { useState } from 'react'
import styled from 'styled-components'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link as Scroll } from 'react-scroll'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';



const WelcomeContainer = styled.div`
    margin: 3vw;
    background-color: rgba(0,0,0,0.3);
    color: #ffffff;
    display:flex;
    height: 80vh;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
`
const WelcomeContent = styled.h1`
    font-size: 3rem;
    text-align: center;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow:8;

`
const WelcomeMenu = styled.div`
    padding: 5vw;
    /* flex-grow:1; */
`
const MenuItem = styled.h1`
    cursor: pointer;
    &:hover {
        color: #3dd2ff;
    }
`
const WelcomeSocial = styled.aside`
flex-grow: 1;
display: flex;
flex-direction: column;
justify-content: space-around;

`
function Welcome() {
return (
    <WelcomeContainer id="welcome">
        <WelcomeMenu>
            <Scroll to='about-us' smooth='true' >
                <MenuItem>About Us</MenuItem>
            </Scroll>
            <Scroll to='our-project' smooth='true' >
                <MenuItem>Our Project</MenuItem>
            </Scroll>
            <Scroll to='visa' smooth='true' >
                <MenuItem>Visa</MenuItem>
            </Scroll>
            <Scroll to='contact-us' smooth='true' >
                <MenuItem>Contact Us</MenuItem>
            </Scroll>
       </WelcomeMenu>
       
        <WelcomeContent>
            <h1>
                Welcome to <br />
                Easy<br />
                Landing<br />
                Australia
            </h1>
            <Scroll to='about-us' smooth='true' >
            <KeyboardArrowDownIcon sx={{fontSize: '7rem', cursor: 'pointer'}}/>
            </Scroll>
        </WelcomeContent>
        <WelcomeSocial>
            <a href="https://wa.me/614688917354">
                <WhatsAppIcon sx={{fontSize: '6vw'}} />
            </a>
            <a href="https://www.instagram.com/easy_landing_australia/">
                <InstagramIcon sx={{fontSize: '6vw'}} />
            </a>
            <a href="">
                <AlternateEmailIcon sx={{fontSize: '6vw'}} />
            </a>
        </WelcomeSocial>
        

    </WelcomeContainer>
)
}

export default Welcome