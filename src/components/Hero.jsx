import heroBackground from "../assets/images/hero-bg.png";

import ContentSide from "./hero/ContentSide";
import ImgSide from "./hero/ImgSide";

function Hero() {
	return (
		<section
			id="home"
			className="hero-area bg_cover"
			style={{ background: `url(${heroBackground})` }}
		>
			<div className="container">
				<div className="row align-items-center">
					<ContentSide />
					<ImgSide />
				</div>
			</div>
		</section>
	);
}

export default Hero;
