import styled from "styled-components";

const VisaContainer = styled.div`
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
        width: 90%;
    }
`;

const ListAlignRight = styled.ol`
    text-align: right;
    padding: 1vw 3vw;
`;
function Visa() {
    return (
        <VisaContainer>
            <SideImage
                src={
                    "https://wallpapers.com/images/high/sage-naruto-cell-phone-art-gbjepana241apniy.jpg"
                }
            />

            <MainContent>
                <h1>WORKING HOLIDAY VISA </h1>
                <p>
                    אוסטרליה מאפשרת לנו הישראלים לקבל ויזת עבודה וחופשה לשנה
                    שלמה, ויזה שמאפשרת לנו לטייל או לעבוד חוקית במדינה! הויזה
                    נכנסת לתוקף מרגע הכניסה שלנו ליבשת! יש אפשרות להאריך את
                    הויזה פעמיים במידה ואתם עובדים בעבודות או איזורים ספציפיים.
                </p>

                <p>
                    חשוב לזכור שמרגע אישור הבקשה יש לנו שנה להיכנס ליבשת. עלות
                    הויזה היא 495$, ויש לתרגם מסמכים אצל NAATI מוסמך ע״י ממשלת
                    אוסטרליה.{" "}
                </p>

                <p>התהליך לוקח בין שלושה עד חמישה שבועות והויזה אצלכם ביד</p>

                <h2>מסמכים הדרושים לבקשת הויזה:</h2>
                <ListAlignRight>
                    <li>תעודת לידה (באנגלית).</li>
                    <li>
                        תעודת בגרות מלאה (כל הדפים), או 12 שנות לימודים עם לפחות
                        3 יח״ל באנגלית.{" "}
                    </li>
                    <li>צילום תעודת זהות</li>
                    <li>
                        צילום דרכון (בתוקף של שנה לפחות) ודרכונים זרים אם יש!
                    </li>
                    <li>
                        תעודת שחרור (טופס ההערכה/אישור שחרור משירות סדיר) או
                        צילום הפטור משירות.
                    </li>
                    <li>
                        פירוט חשבון בנק (באנגלית) מסמך ריכוז יתרות - עם לפחות
                        18,000 + מסמך בעלות חשבון באנגלית (שמקשר בין השם שלך
                        באנגלית למספר החשבון)
                    </li>
                    <li>.תמונת פספורט עדכנית בסריקה איכותית</li>
                </ListAlignRight>
                <p>
                    {" "}
                    <b>
                        אנו מציעים כחלק מתהליך הליווי לבצע בדיקה חינמית והגשת
                        הבקשה לויזה. שלחו לנו הודעה בוואטסאפ או אינסטגרם ותקבלו
                        את כל הפרטים המלאים.
                    </b>
                </p>
            </MainContent>
        </VisaContainer>
    );
}

export default Visa;
