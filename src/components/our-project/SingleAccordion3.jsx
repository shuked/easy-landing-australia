function SingleAccordion3() {
	return (
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
	);
}

export default SingleAccordion3;
