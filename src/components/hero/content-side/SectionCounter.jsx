function SectionCounter() {
	return (
		<div className="counter-up">
			<div className="single-counter wow fadeInUp" data-wow-delay=".2s">
				<span id="secondo" className="countup" cup-end="120">
					{" "}
					60+{" "}
				</span>
				<span>מסלולי טראק</span>
			</div>
			<div className="single-counter wow fadeInUp" data-wow-delay=".3s">
				<span id="secondo" className="countup" cup-end="35">
					{" "}
					100+
				</span>
				<span>מקומות בילוי</span>
			</div>
			<div className="single-counter wow fadeInUp" data-wow-delay=".4s">
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
	);
}

export default SectionCounter;
