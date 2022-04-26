import SectionTitle from './content-side/SectionTitle'
import SectionContent from './content-side/SectionContent';

function ContentSide() {
	return (
		<div className="col-xl-6 col-lg-6">
						<div className="hero-content">
							<SectionTitle />
							<SectionContent />

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
	);
}

export default ContentSide;
