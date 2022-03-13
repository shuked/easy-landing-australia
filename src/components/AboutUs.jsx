import styled from 'styled-components'



const AboutUSContainer = styled.div`
    margin: 3vw;
    background-color: rgba(0,0,0,0.3);
    color: #ffffff;
    display:flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
    margin-top: 5vw;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);

`

function AboutUS() {
return (
    <AboutUSContainer id="about-us">
        <h1>About Us Page</h1>
    </AboutUSContainer>
)
}

export default AboutUS