import styled from "styled-components";
import {
	PageContainer,
	SideImage,
	MainContent,
	PageTitle,
	Paragraph,
} from "./global/Page";

function AboutUS() {
	return (
		<PageContainer>
			<MainContent>
				<PageTitle>ABOUT US </PageTitle>
				<Paragraph>
					אחרי המון מחשבה כיצד אנחנו יכולים לעזור לכם לעשות נחיתה רכה
					במדינה הכי מטורפת על הכדור!
					<br />
					החלטנו להקים מיזם שבו נלווה אתכם בכל הקשור לאוסטרליה.
				</Paragraph>
				<Paragraph>
					להעביר את החיים שלך למדינה חדשה ושונה יכול להתקיל ולהלחיץ,
					תפקידנו להפיג את החשש ולהיות איתך 24/7 לכל שאלה.
				</Paragraph>
				<Paragraph>
					המטרה שלנו לחסוך לכם, את ההתעסקות, את הכסף והכי חשוב את הזמן
					ששווה פה הרבה כסף! התהליך הוא ליווי ויעוץ בכל הקשור בנושאים
					שחשובים עם הנחיתה באוסטרליה.{" "}
				</Paragraph>
				<Paragraph>
					וכולל הגשת בקשה לויזה, כיצד מוצאים טיסות במחירים משתלמים, 
					 ולביטוחים במדינה זרה.
				</Paragraph >
                <Paragraph>
					כיצד להתחיל את החיים כאן אם זה במציאת בנק מתאים וחברת סלולר.
					מה חשוב לדעת לפני שקונים רכב? ואיך עושים את זה.
				</Paragraph>

				<Paragraph>
					גם בפאן המקצועי! איך למצוא עבודה ואיזה כרטיסי עבודה צריך לכל
					מקצוע,ואיך אנחנו כותבים קורות חיים לעבודה באוסטרליה.
				</Paragraph>

				<Paragraph>
					{" "}
					<b>
						לכל השאלות שעולות לכם לראש אנחנו כאן בשביל לענות עליהן,
						כדי שלכם יהיה ראש שקט.
					</b>
				</Paragraph>
			</MainContent>
			<SideImage
				src={
					"https://wallpapers.com/images/high/sage-naruto-cell-phone-art-gbjepana241apniy.jpg"
				}
			/>
		</PageContainer>
	);
}

export default AboutUS;
