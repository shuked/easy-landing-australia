import styled from 'styled-components'



const VisaContainer = styled.div`
    margin: 3vw;
    background-color: rgba(0,0,0,0.3);
    color: #ffffff;
    display:flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);

`

function Visa() {
return (
    <VisaContainer id="visa">
        <h1>Visa Page</h1>
    </VisaContainer>
)
}

export default Visa