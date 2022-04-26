function SingleAccordion2() {
	return (
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
						<i className="lni lni-plane"> </i>
					</span>
					<span>מציאת טיסות וביטוח</span>
				</button>
			</div>

			<div
				id="collapseTwo"
				className="collapse"
				aria-labelledby="headingTwo"
				data-parent="#accordionExample"
			>
				<div className="accordion-content" dir="rtl">
					תקבלו מאיתנו השוואה של כל הביטוחים השונים, בנוסף נקודות
					שחשוב לזכור לפני בחירת פוליסת ביטוח. עבור הטיסות נבנה את
					המסלול שמתאים לציפיות ולמחירים שאתם מחפשים כמובן בהתחשבות
					בתאריך וביעד.
				</div>
			</div>
		</div>
	);
}

export default SingleAccordion2;
