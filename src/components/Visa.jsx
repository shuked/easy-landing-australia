import styled from "styled-components";
import * as React from 'react';
import { styled as styles } from '@mui/material/styles';
import { PageContainer , SideImage , MainContent } from "./global/Page"

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Title2 = styled.h2`
	margin: 1vw;
`;
const ListAlignRight = styled.ol`
	text-align: right;
	padding: 1vw 3vw;
`;

const ExpandMore = styles((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

function Visa() {

    const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

	return (
		<PageContainer>
			<SideImage
				src={
					"https://wallpapers.com/images/high/sage-naruto-cell-phone-art-gbjepana241apniy.jpg"
				}
			/>

			<MainContent>
				<h1>WORKING HOLIDAY VISA </h1>
				<p>
					אוסטרליה מאפשרת לנו בעלי דרכון ישראלי לקבל ויזת עבודה וחופשה
					לשנה שלמה, ויזה שמאפשרת לנו לטייל ולעבוד חוקית במדינה!
				</p>

				<p>
					הויזה נכנסת לתוקף מרגע הכניסה שלנו ליבשת! ניתן להאריך את
					הויזה לשנתיים נוספות תחת עבודות ספציפיות באזורי מסויימים.
				</p>

				<p>
					תהליך הוצאת הויזה לוקח בין שלושה עד חמישה שבועות והויזה
					אצלכם ביד, עלות הויזה היא 495$. מרגע אישור הבקשה יש לנו שנה
					להיכנס ליבשת.
				</p>

				<Title2>מסמכים הדרושים לבקשת הויזה:  <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore></Title2>
               
				<Collapse in={expanded} timeout="auto" unmountOnExit>
					<CardContent>
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
					</CardContent>
				</Collapse>

				
				<p>
					{" "}
					אנו מציעים כחלק מתהליך הליווי בדיקה חינמית להגשת הבקשה
					לויזה.
				</p>
				<p>
					{" "}
					<b>
						שלחו לנו הודעה בוואטסאפ או אינסטגרם ותקבלו את כל הפרטים
						המלאים.
					</b>
				</p>
			</MainContent>
		</PageContainer>
	);
}

export default Visa;
