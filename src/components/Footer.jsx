import styled from 'styled-components'



const FooterContainer = styled.div`
    margin: 3vw;
    color: #000;
    display:flex;
    justify-content: center;
    align-items: center;
    height: 5vh;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
    font-family: 'Raleway', sans-serif;
    font-weight: 200;

`

function Footer() {
return (
    <FooterContainer >
        <h1>Created by Shuked</h1>
    </FooterContainer>
)
}

export default Footer;