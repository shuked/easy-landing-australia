import styled from "styled-components";

const PageContainer = styled.div`
    margin: 3vw;
    color: #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5vw 5vw;
    min-height: 80vh;
    margin-top: 5vw;
    @media (max-width: 1080px) {
        justify-content: center;
    }
    /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1); */
`;

const SideImage = styled.img`
    width: 30%;
    height: 90%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
    @media (max-width: 1080px) {
        display: none;
    }
`;
const MainContent = styled.div`
    width: 60%;
    direction: rtl;
    margin: 1vw;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 1080px) {
        width: 100%;
        margin: 0vw;
        font-size: 15px;
    }
`;

function Page() {
    return (
        <PageContainer>
            <MainContent>
                
            </MainContent>
            <SideImage/>
        </PageContainer>
    );
}

export {PageContainer, SideImage , MainContent}
