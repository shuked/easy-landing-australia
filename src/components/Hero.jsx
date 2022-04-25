import heroBackground from "../assets/images/hero-bg.png";
import featuresImage2 from "../assets/images/features-image-2.png";
import featuresImage1 from "../assets/images/features-image-1.png";

function Hero() {
	return (
		<section
			id="home"
			className="hero-area bg_cover"
			style={{ background: `url(${heroBackground})` }}
		>
			<div className="container">
				<div className="row align-items-center">
					<div className="col-xl-6 col-lg-6">
						<div className="hero-content">
							<h2
								className="wow fadeInUp text-center"
								data-wow-delay=".2s"
							>
								Easy Landing Australia
							</h2>
							<p
								dir="rtl"
								className="wow fadeInUp"
								data-wow-delay=".4s"
							>
								אחרי המון מחשבה כיצד אנחנו יכולים לעזור לכם
								לעשות נחיתה רכה במדינה הכי מטורפת על הכדור!
								החלטנו להקים מיזם שבו נלווה אתכם בכל הקשור
								לאוסטרליה.
								<br />
								להעביר את החיים שלך למדינה חדשה ושונה יכול
								להתקיל ולהלחיץ, תפקידנו להפיג את החשש ולהיות
								איתך 24/7 לכל שאלה.{" "}
							</p>

							<p
								dir="rtl"
								className="wow fadeInUp"
								data-wow-delay=".4s"
							>
								וכולל הגשת בקשה לויזה, כיצד מוצאים טיסות במחירים
								משתלמים, ולביטוחים במדינה זרה.
								<br />
								כיצד להתחיל את החיים כאן אם זה במציאת בנק מתאים
								וחברת סלולר. מה חשוב לדעת לפני שקונים רכב? ואיך
								עושים את זה.
								<br />
								גם בפאן המקצועי! איך למצוא עבודה ואיזה כרטיסי
								עבודה צריך לכל מקצוע,ואיך אנחנו כותבים קורות
								חיים לעבודה באוסטרליה.
							</p>

							<p
								dir="rtl"
								className="wow fadeInUp"
								data-wow-delay=".4s"
							>
								המטרה שלנו לחסוך לכם, את ההתעסקות, את הכסף והכי
								חשוב את הזמן ששווה פה הרבה כסף! התהליך הוא ליווי
								ויעוץ בכל הקשור בנושאים שחשובים עם הנחיתה
								באוסטרליה.
							</p>

							<div className="hero-btns">
								<a
									href="#pricing"
									className="main-btn btn-hover wow fadeInUp"
									data-wow-delay=".45s"
								>
									Purcahse Now
								</a>
								<a
									href="https://www.instagram.com/easy_landing_australia/"
									className="watch-btn glightbox wow fadeInUp"
									data-wow-delay=".5s"
								>
									<i className="lni lni-instagram-filled">
										{" "}
									</i>
									<span></span>
								</a>
								<a
									href="https://wa.me/62468917354"
									className="watch-btn glightbox wow fadeInUp"
									data-wow-delay=".5s"
								>
									<i class="lni lni-whatsapp"></i>
								</a>
							</div>
						</div>
						<div className="counter-up">
							<div
								className="single-counter wow fadeInUp"
								data-wow-delay=".2s"
							>
								<span
									id="secondo"
									className="countup"
									cup-end="120"
								>
									{" "}
									60+{" "}
								</span>
								<span>מסלולי טראק</span>
							</div>
							<div
								className="single-counter wow fadeInUp"
								data-wow-delay=".3s"
							>
								<span
									id="secondo"
									className="countup"
									cup-end="35"
								>
									{" "}
									100+
								</span>
								<span>מקומות בילוי</span>
							</div>
							<div
								className="single-counter wow fadeInUp"
								data-wow-delay=".4s"
							>
								<span
									id="secondo"
									className="countup"
									cup-end="7"
									cup-append="K"
								>
									50+
								</span>
								<span>מקומות עבודה</span>
							</div>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6">
						<div className="hero-img">
							<img
								src={featuresImage2}
								alt=""
								className="wow fadeInRight"
								data-wow-delay=".2s"
							/>
							<img
								src={featuresImage1}
								alt=""
								className="img-screen screen-1 wow fadeInUp"
								data-wow-delay=".25s"
							/>
							<img
								src={featuresImage2}
								alt=""
								className="img-screen screen-2 wow fadeInUp"
								data-wow-delay=".3s"
							/>
							<img
								src={featuresImage2}
								alt=""
								className="img-screen screen-3 wow fadeInUp"
								data-wow-delay=".35s"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
