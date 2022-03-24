import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';

const ContactUSContainer = styled.div`
    margin: 3vw;
    color: #000;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0.5vw 5vw;
    min-height: 80vh;
    margin-top: 5vw;
    @media (max-width: 1080px) {
    justify-content: center;
        
    }
    /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1); */
`;

const ContactUsForm = styled.form`
    display: flex;
    /* flex-direction: column; */
    align-items: flex-start;
    width: 50vw;
    flex-wrap: wrap;
    @media (max-width: 1080px) {
    width: 80%;
    }
`;
const SideImage = styled.img`
    width: 30%;
    height: 90%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
    @media (max-width: 1080px) {
        display: none;
        
    }
`;

function ContactUS() {
    return (
        <ContactUSContainer>
            <ContactUsForm action="">
                <TextField
                    id="standard-basic"
                    label="First Name"
                    variant="standard"
                    sx={{width: "15vw", margin: "3vw"}}
                />
                <TextField
                    id="standard-basic"
                    label="Last Name"
                    variant="standard"
                    sx={{width: "15vw", margin: "3vw"}}
                />
                <TextField
                    id="standard-basic"
                    label="Phone"
                    variant="standard"
                    sx={{width: "15vw", margin: "3vw"}}
                />
                <TextField
                    id="standard-basic"
                    label="Email"
                    variant="standard"
                    sx={{width: "15vw", margin: "3vw"}}
                />
                <TextField
                    id="standard-basic"
                    label="Leave a message"
                    variant="standard"
                    sx={{width: "36vw", margin: "3vw"}}
                />
                <Button variant="contained" sx={{width: "15vw", margin: "3vw", background:"#333"}}>Submit</Button>

            </ContactUsForm>
            <SideImage src={"https://wallpapers.com/images/high/sage-naruto-cell-phone-art-gbjepana241apniy.jpg"} />
            
        </ContactUSContainer>
    );
}

export default ContactUS;
