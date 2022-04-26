import featuresImage2 from "../../assets/images/features-image-2.png";
import featuresImage1 from "../../assets/images/features-image-1.png";


function ImgSide() {
	return (
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
	);
}

export default ImgSide;
