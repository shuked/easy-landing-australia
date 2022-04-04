import styled from "styled-components";

const AboutUSContainer = styled.div`
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

function AboutUS() {
    return (
        <AboutUSContainer>
            <MainContent>
                <h1>ABOUT US </h1>
                <p>
                אחרי המון מחשבה כיצד אנחנו יכולים לעזור לכם לעשות נחיתה רכה במדינה הכי מטורפת על הכדור!
        <br />
החלטנו להקים מיזם שבו נלווה אתכם בכל הקשור לאוסטרליה.
                </p>
                <p>
                להעביר את החיים שלך למדינה חדשה ושונה יכול להתקיל ולהלחיץ, תפקידנו להפיג את החשש ולהיות איתך 24/7 לכל שאלה. 
                </p>
                <p>
                המטרה שלנו לחסוך לכם, את ההתעסקות, את הכסף והכי חשוב את הזמן ששווה פה הרבה כסף! 

התהליך הוא ליווי ויעוץ בכל הקשור בנושאים שחשובים עם הנחיתה באוסטרליה.                </p>
                <p>
                וכולל הגשת בקשה לויזה, כיצד מוצאים טיסות במחירים משתלמים, כל הקשור לביטוחים במדינה זרה.
                </p>
                <p>
                כיצד להתחיל את החיים כאן אם זה במציאת בנק מתאים וחברת סלולר. 

מה חשוב לדעת לפני שקונים רכב? ואיך עושים את זה.
                </p>

                <p>
                גם בפאן המקצועי! איך למצוא עבודה ואיזה כרטיסי עבודה צריך לכל מקצוע,ואיך אנחנו כותבים קורות חיים לעבודה באוסטרליה.


                </p>
                
                <p>
                    {" "}
                    <b>               
                    לכל השאלות שעולות לכם לראש אנחנו כאן בשביל לענות עליהן,  כדי שלכם יהיה ראש שקט. 
                    </b>
                </p>
            </MainContent>
            <SideImage
                src={
                    "https://wallpapers.com/images/high/sage-naruto-cell-phone-art-gbjepana241apniy.jpg"
                }
            />
        </AboutUSContainer>
    );
}

export default AboutUS;
