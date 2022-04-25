import downloadImage from "../assets/images/download-img.svg";
import dotsShape from "../assets/images/dots-shape.svg";

function OurProject() {
	return (
		<section id="how-work" className="how-work-area pt-130">
			<div className="container">
				<div className="row">
					<div className="col-xl-5 col-lg-6">
						<div className="how-work-img text-center text-lg-left">
							<img
								src={downloadImage}
								alt=""
								className="w-100 wow fadeInLeft"
								data-wow-delay=".2s"
							/>
							<img
								src={dotsShape}
								alt=""
								className="shape dots-shape wow fadeInUp"
								data-wow-delay=".3s"
							/>
						</div>
					</div>
					<div className="col-xl-6 offset-xl-1 col-lg-6">
						<div className="how-work-content-wrapper">
							<div className="section-title ">
								<h2
									className="mb-45 wow fadeInUp text-center"
									data-wow-delay=".2s"
									
								>
									Our Project
								</h2>
								<p
									className="mb-35 wow fadeInUp"
									data-wow-delay=".3s"
									dir="rtl"
								>
									המטרה שלנו ללוות אתכם כדי שתבואו הכי מוכנים
									לחוויה באוסטרליה!
								</p>
							</div>
							<h4 dir="rtl">תהליך הליווי מחולק ל4 חלקים:</h4>
							<div className="how-work-accordion accordion-style">
								<div
									className="accordion"
									id="accordionExample"
								>
									<div
										className="single-accordion mb-30 wow fadeInUp"
										data-wow-delay=".2s"
									>
										<div className="accordion-btn">
											<button
												className="btn-block text-start collapsed"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#collapseOne"
												aria-expanded="true"
												aria-controls="collapseOne"
											>
												<span className="d-inline-flex mb-0 icon-style gradient-1 ">
													<i className="lni lni-control-panel">
														{" "}
													</i>
												</span>
												<span >הוצאת ויזה</span>
											</button>
										</div>

										<div
											id="collapseOne"
											className="collapse"
											aria-labelledby="headingOne"
											data-parent="#accordionExample"
										>
											<div className="accordion-content" dir="rtl">
												איסוף המסמכים לבקשה ושליחתם
												למתרגמת שלנו. זמן התירגום לוקח
												בין 24-72 שעות. *התשלום עבור
												התירגום ובקשת הויזה אינו כלול
												בתהליך הליווי.
											</div>
										</div>
									</div>

									<div
										className="single-accordion mb-30 wow fadeInUp"
										data-wow-delay=".3s"
									>
										<div className="accordion-btn">
											<button
												className="btn-block text-start collapsed"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#collapseTwo"
												aria-expanded="true"
												aria-controls="collapseTwo"
											>
												<span className="d-inline-flex mb-0 icon-style gradient-3">
													<i className="lni lni-plane">
														{" "}
													</i>
												</span>
												<span >מציאת טיסות וביטוח</span>
											</button>
										</div>

										<div
											id="collapseTwo"
											className="collapse"
											aria-labelledby="headingTwo"
											data-parent="#accordionExample"
										>
											<div className="accordion-content" dir="rtl">
												תקבלו מאיתנו השוואה של כל
												הביטוחים השונים, בנוסף נקודות
												שחשוב לזכור לפני בחירת פוליסת
												ביטוח. עבור הטיסות נבנה את
												המסלול שמתאים לציפיות ולמחירים
												שאתם מחפשים כמובן בהתחשבות
												בתאריך וביעד.
											</div>
										</div>
									</div>
									<div
										className="single-accordion mb-30 wow fadeInUp"
										data-wow-delay=".4s"
									>
										<div className="accordion-btn">
											<button
												className="btn-block text-start collapsed"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#collapseThree"
												aria-expanded="true"
												aria-controls="collapseThree"
											>
												<span className="d-inline-flex mb-0 icon-style gradient-4">
													<i className="lni lni-phone">
														{" "}
													</i>
												</span>
												<span>בנק, טלפון ורכב</span>
											</button>
										</div>

										<div
											id="collapseThree"
											className="collapse"
											aria-labelledby="headingThree"
											data-parent="#accordionExample"
										>
											<div className="accordion-content" dir="rtl">
												כל הדברים שנעשה עם הנחיתה שלכם
												ביבשת. יש המון טיפים שכדאי לדעת
												בשלבים אלו ולכן איתנו בתהליך אתם
												תהיו עירניים להכל!
											</div>
										</div>
									</div>
									<div
										className="single-accordion mb-30 wow fadeInUp"
										data-wow-delay=".2s"
									>
										<div className="accordion-btn">
											<button
												className="btn-block text-start collapsed"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#collapseFour"
												aria-expanded="true"
												aria-controls="collapseFour"
											>
												<span className="d-inline-flex mb-0 icon-style gradient-1">
													<i className="lni lni-coin">
														{" "}
													</i>
												</span>
												<span >עבודה</span>
											</button>
										</div>

										<div
											id="collapseFour"
											className="collapse"
											aria-labelledby="headingOne"
											data-parent="#accordionExample"
										>
											<div className="accordion-content" dir="rtl">
												בניית קורות חיים, וכרטיסי עבודה
												עבור המקצוע שלכם. בנוסף ניתן לכם
												את כל הטיפים וההדרכה הנכונה
												למציאת עבודה באוסטרליה.
											</div>
										</div>
									</div>
								</div>
							</div>
							<div
								className="download-btn wow fadeInUp"
								data-wow-delay=".5s"
							>
								<a
									href="#pricing"
									className="main-btn btn-hover wow fadeInUp"
									data-wow-delay=".45s"
								>
									Purcahse Now
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default OurProject;
