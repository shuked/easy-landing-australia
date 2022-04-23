import styled from "styled-components";
import { PageContainer , SideImage , MainContent, PageTitle } from "./global/Page"

const OrderedList = styled.ol`
	text-align: right;
`
const ListItem = styled.li`
	margin: 0.5vh;
`


function OurProject() {
	return (
		<PageContainer>
			<SideImage
				src={
					"https://wallpapers.com/images/high/sage-naruto-cell-phone-art-gbjepana241apniy.jpg"
				}
			/>
			<MainContent>
				<PageTitle>OUR PROJECT</PageTitle>
				<p>
					המטרה שלנו ללוות אתכם כדי שתבואו הכי מוכנים
					לחוויה באוסטרליה!
				</p>

				<b>תהליך הליווי מחולק ל4 חלקים:</b>
				<OrderedList>
                    <ListItem>הוצאת ויזה - איסוף המסמכים לבקשה ושליחתם למתרגמת שלנו. זמן התירגום לוקח בין 24-72 שעות.  <br />
                    *התשלום עבור התירגום ובקשת הויזה אינו כלול בתהליך הליווי. 
                    </ListItem>
                    <ListItem>
                    מציאת טיסות וביטוח - תקבלו מאיתנו השוואה של כל הביטוחים השונים עם הסבר על כל אחד, בנוסף נקודות שחשוב לזכור לפני בחירת פוליסת ביטוח. בסוף אתם הם אלו שבוחרים ביטוח!   <br />
                    עבור טיסות נבנה את המסלול שמתאים לציפיות ולמחירים שאתם מחפשים כמובן בהתחשבות בתאריך שתרצו להגיע.
                    </ListItem>
                    <ListItem>
                  
בנק, טלפון ורכב - כל הדברים שנעשה עם הנחיתה שלכם ביבשת. יש המון טיפים שכדאי לדעת בשלבים אלו ולכן איתנו בתהליך אתם תהיו עירניים להכל!
                    </ListItem>
                    <ListItem>
                    עבודה - במידה ותרצו לעבוד בהתחלה נבנה לכם קורות חיים שמתאימים למקצוע שבחרתם. בנוסף נמצא עבורכם את המקומות הכי טובים וזולים עבור הכרטיסי עבודה שאתם תזדקקו בשביל המקצוע שלכם.         <br />            ובסוף ניתן לכם את כל הטיפים וההדרכה הנכונה למציאת עבודה באוסטרליה, המטרה שלנו היא לשלב אתכם הכי מהר בשוק העבודה. 
                    </ListItem>
                </OrderedList>
				
				<p> <b>

					לקבלת מידע ומחיר עבור תהליך הליווי מוזמנים ליצור איתנו קשר
					בוואטספ או באינסטגרם.
				
                </b></p>
			</MainContent>
		</PageContainer>
	);
}

export default OurProject;
