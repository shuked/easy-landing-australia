function SingleAccordion4() {
	return (
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
						<i className="lni lni-coin"> </i>
					</span>
					<span>עבודה</span>
				</button>
			</div>

			<div
				id="collapseFour"
				className="collapse"
				aria-labelledby="headingOne"
				data-parent="#accordionExample"
			>
				<div className="accordion-content" dir="rtl">
					בניית קורות חיים, וכרטיסי עבודה עבור המקצוע שלכם. בנוסף ניתן
					לכם את כל הטיפים וההדרכה הנכונה למציאת עבודה באוסטרליה.
				</div>
			</div>
		</div>
	);
}

export default SingleAccordion4;
