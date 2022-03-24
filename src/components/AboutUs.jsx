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
  display:flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 1080px) {
        width: 80%;
        
    }
`;


function AboutUS() {
  return (
    <AboutUSContainer >
      
    
      <MainContent>
        <h1>About us </h1>
        <p>
          אחרי המון מחשבה כיצד אנחנו יכולים לעזור לכם לעשות נחיתה רכה במדינה הכי
          מטורפת על הכדור! החלטנו להקים מיזם שבו נלווה אתכם בכל הקשור לאוסטרליה.
        </p>
        <p>
          עברנו המון חוויות ולמדנו כל-כך הרבה שאנחנו מרגישים שאנחנו יכולים לעשות
          לכם את החוויה אחרת, לפחות ההתחלה שלה.
        </p>
        <p>
          להעביר את החיים שלך למדינה חדשה ושונה ממה שהתרגלנו יכול להתקיל או
          להלחיץ המון אנשים, תפקידנו להפיג את החשש.
        </p>
        <p>
          אנחנו פה כדי לחסוך לכם , את ההתעסקות , את הכסף והכי חשוב את הזמן ששווה
          פה הרבה כסף!
        </p>
        <p>
          חשוב להגיד כי אנחנו לא מחפשים להחליט בשבילכם, אנחנו פה כדי לשמוע מה
          חשוב לכם ומה מעניין אתכם וביחד נעשה לכם התחלה לא פחות ממושלמת.
        </p>
        <p>
          התהליך הוא ליווי ויעוץ בכל הקשור בנושאים שחשובים עם הנחיתה באוסטרליה.
          הגשת בקשה לויזה, איך מוצאים טיסות במחירים טובים, כל הקשור לביטוחים
          במדינה זרה ולתקופה ארוכה. כיצד להתחיל את החיים כאן אם זה במציאת בנק
          מתאים וחברת סלולר. מה חשוב לדעת לפני שקונים רכב? ואיך עושים את זה. גם
          בפאן המקצועי! איך למצוא עבודה ואיזה כרטיסים צריך לכל עבודה, וגם איך
          אנחנו כותבים קורות חיים שמתאימים לפה.
        </p>
        <p> <b>
        כל השאלות שעולות לכם לראש אנחנו כאן לענות עליהן, ואם נתקלנו אנחנו פה
          לעשות את הכי טוב ולחקור כדי שלכם יהיה ראש שקט.
        </b>
        </p>
      </MainContent>
      <SideImage src={"https://wallpapers.com/images/high/sage-naruto-cell-phone-art-gbjepana241apniy.jpg"} />
    </AboutUSContainer>
  );
}

export default AboutUS;
