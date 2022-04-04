import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import { PageContainer , SideImage , MainContent } from "./global/Page"




const ContactUsForm = styled.form`
    display: flex;
    /* flex-direction: column; */
    /* align-items: flex-start; */
    width: 50vw;
    flex-wrap: wrap;
    @media (max-width: 1080px) {
        width: 90%;
    }
`;


function ContactUS() {
    return (
        <PageContainer>
           <MainContent>
               <h1>CONTACT US</h1>
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
           </MainContent>
            
            <SideImage src={"https://wallpapers.com/images/high/sage-naruto-cell-phone-art-gbjepana241apniy.jpg"} />
            
        </PageContainer>
    );
}

export default ContactUS;
