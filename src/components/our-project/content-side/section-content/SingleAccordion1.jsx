function SingleAccordion1() {
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
					data-bs-target="#collapseOne"
					aria-expanded="true"
					aria-controls="collapseOne"
				>
					<span className="d-inline-flex mb-0 icon-style gradient-1 ">
						<i className="lni lni-control-panel"> </i>
					</span>
					<span>הוצאת ויזה</span>
				</button>
			</div>

			<div
				id="collapseOne"
				className="collapse"
				aria-labelledby="headingOne"
				data-parent="#accordionExample"
			>
				<div className="accordion-content" dir="rtl">
					איסוף המסמכים לבקשה ושליחתם למתרגמת שלנו. זמן התירגום לוקח
					בין 24-72 שעות.
					<br />
					<br />
					 *התשלום עבור התירגום ובקשת הויזה אינו כלול
					בתהליך הליווי.
				</div>
			</div>
		</div>
	);
}

export default SingleAccordion1;
