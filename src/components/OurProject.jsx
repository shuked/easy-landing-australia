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
        margin: 1vw 0.5vw;
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
					המטרה שלנו משותפת והיא ללוות אתכם כדי שאתם תבואו הכי מוכנים
					לחוויה באוסטרליה!
				</p>

				<b>תהליך הליווי מחולק ל4 חלקים:</b>
				<ol>
                    <li>הוצאת ויזה - איסוף המסמכים לבקשה ושליחתם למתרגמת שלנו. זמן התירגום לוקח בין 24-72 שעות.  <br />
                    *התשלום עבור התירגום ובקשת הויזה אינו כלול בתהליך הליווי. 
                    </li>
                    <li>
                    מציאת טיסות וביטוח - תקבלו מאיתנו השוואה של כל הביטוחים השונים עם הסבר על כל אחד, בנוסף נקודות שחשוב לזכור לפני בחירת פוליסת ביטוח. בסוף אתם הם אלו שבוחרים ביטוח!   <br />
                    עבור טיסות נבנה את המסלול שמתאים לציפיות ולמחירים שאתם מחפשים כמובן בהתחשבות בתאריך שתרצו להגיע.
                    </li>
                    <li>
                  
בנק, טלפון ורכב - כל הדברים שנעשה עם הנחיתה שלכם ביבשת. יש המון טיפים שכדאי לדעת בשלבים אלו ולכן איתנו בתהליך אתם תהיו עירניים להכל!
                    </li>
                    <li>
                    עבודה - במידה ותרצו לעבוד בהתחלה נבנה לכם קורות חיים שמתאימים למקצוע שבחרתם. בנוסף נמצא עבורכם את המקומות הכי טובים וזולים עבור הכרטיסי עבודה שאתם תזדקקו בשביל המקצוע שלכם.                     ובסוף ניתן לכם את כל הטיפים וההדרכה הנכונה למציאת עבודה באוסטרליה, המטרה שלנו היא לשלב אתכם הכי מהר בשוק העבודה. 
                    </li>
                </ol>
				
				<p> <b>

					לקבלת מידע ומחיר עבור תהליך הליווי מוזמנים ליצור איתנו קשר
					בוואטספ או באינסטגרם.
				
                </b></p>
			</MainContent>
		</OurProjectContainer>
	);
}

export default OurProject;
