function YearlyPlans() {
	return (
		<div
			className="tab-pane fade price-tab"
			id="pills-year"
			role="tabpanel"
			aria-labelledby="pills-year-tab"
		>
			<div className="row">
				<div className="col-xl-4 col-lg-4 col-md-6">
					<div className="single-price text-center">
						<div className="price-icon icon-style mx-auto gradient-1">
							<i className="lni lni-user"> </i>
						</div>
						<h4 className="package-name mb-20">Personal</h4>
						<h4 className="package-price mb-20">$25.00</h4>
						<ul className="package-details">
							<li>5 Cards</li>
							<li>50GB Disk Space</li>
							<li>50GB Monthly Bandwidth</li>
							<li>10 Subdomains</li>
							<li>15 Domains</li>
							<li>Unlimited Support</li>
						</ul>
						<a href="#" className="btn-hover price-btn main-btn">
							Buy Now
						</a>
					</div>
				</div>
				<div className="col-xl-4 col-lg-4 col-md-6">
					<div className="single-price text-center active">
						<div className="price-icon icon-style mx-auto gradient-2">
							<i className="lni lni-users"> </i>
						</div>
						<h4 className="package-name mb-20">Standard</h4>
						<h4 className="package-price mb-20">$50.00</h4>
						<ul className="package-details">
							<li>15 Cards</li>
							<li>90GB Disk Space</li>
							<li>70GB Monthly Bandwidth</li>
							<li>20 Subdomains</li>
							<li>25 Domains</li>
							<li>Unlimited Support</li>
						</ul>
						<a href="#" className="btn-hover price-btn main-btn">
							Buy Now
						</a>
					</div>
				</div>
				<div className="col-xl-4 col-lg-4 col-md-6">
					<div className="single-price text-center">
						<div className="price-icon icon-style mx-auto gradient-3">
							<i className="lni lni-diamond"> </i>
						</div>
						<h4 className="package-name mb-20">Premium</h4>
						<h4 className="package-price mb-20">$125.00</h4>
						<ul className="package-details">
							<li>Unlimited Cards</li>
							<li>100GB Disk Space</li>
							<li>100GB Monthly Bandwidth</li>
							<li>50 Subdomains</li>
							<li>75 Domains</li>
							<li>Unlimited Support</li>
						</ul>
						<a href="#" className="btn-hover price-btn main-btn">
							Buy Now
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default YearlyPlans;
