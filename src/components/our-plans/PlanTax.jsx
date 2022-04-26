import LogoImg from "../../assets/images/logo.svg";

function PlanTax() {
	return (
		<div className="col-xl-4 col-lg-4 col-md-6">
			<div className="single-price text-center active">
				<div className="price-icon icon-style mx-auto gradient-2">
					<i className="lni lni-users"> </i>
				</div>
				<h4 className="package-name mb-20">החזר מיסים</h4>
				<h4 className="package-price mb-20">299₪</h4>
				<ul className="package-details">
					<li>איסוף תלושי שכר</li>
					<li>איסוף הוצאות מוכרות המ"ס</li>
					<li>הגשת הטפסים לרשויות המ"ס</li>
				</ul>
				<a href="#" className="btn-hover price-btn main-btn">
					Buy Now
				</a>
			</div>
		</div>
	);
}

export default PlanTax;
