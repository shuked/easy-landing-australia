import styled from "styled-components";

const OurProjectContainer = styled.div`
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

function OurProject() {
    return (
        <OurProjectContainer>
            <SideImage
                src={
                    "https://wallpapers.com/images/high/sage-naruto-cell-phone-art-gbjepana241apniy.jpg"
                }
            />
            <MainContent>
                <h1>OUR PROJECT</h1>
                <p>
                    המטרה שלנו לפני הנחיתה באוסטרליה שתקבלו את כל הטיפים והדברים
                    החשובים,כך שאתם תבואו מוכנים 100% לפני העלייה למטוס!
                </p>

                <b>תהליך הליווי מחולק ל4 חלקים:</b>
                <p>
                הוצאת ויזה- איסוף המסמכים לבקשה ושליחתם למתרגמת שלנו שמוכרת ע״י הממשלה האוסטרלית. זמן התירגום לוקח בין 24-72 שעות.    *התשלום עבור התירגום ובקשת הויזה אינו כלול בתהליך הליווי.
מציאת טיסות וביטוח- תקבלו מאיתנו השוואה של כל הביטוחים השונים עם הסבר על כל אחד, בנוסף נקודות שחשוב לזכור לפני בחירתפוליסת ביטוח. בסוף אתם הם אלו שבוחרים ביטוח!      עבור טיסות נבנה את המסלול שמתאים לציפיות ולמחירים שאתם מחפשים כמובןבהתחשבות בתאריך שתרצו להגיע.
בנק,טלפון ורכב- כל הדברים שנעשה עם הנחיתה שלכם ביבשת. יש המון טיפים שכדאי לדעת בשלבים אלו ולכן איתנו בתהליך תהיו עירנייםלהכל!
עבודה- במידה ותרצו לעבוד בהתחלה נבנה לכם קורות חיים שמתאימים למקצוע המעניין אתכם, ולפי הדרך שבא נעשים קורות חייםבאוסטרליה. בנוסף נמצא עבורכם את המקומות הכי טובים וזולים עבור הכרטיסי עבודה שאתם תזדקקו עבור המקצוע שלכם.  ובסוף ניתן לכםאת כל הטיפים וההדרכה הנכונה למציאת עבודה באוסטרליה, המטרה שלנו היא לשלב אתכם היא מהר שאתם תרצו בשוק העבודה. 

                </p>
                <p>
                המטרה שלנו משותפת והיא ללוות אתכם הכי נכון ולשלב אתכם כמה שיותר טוב באוסטרליה!
                </p>
                <p>
                לקבלת מידע ומחיר עבור תהליך הליווי מוזמנים ליצור איתנו קשר בוואטספ או באינסטגרם. 
                </p>
                
            </MainContent>
        </OurProjectContainer>
    );
}

export default OurProject;
