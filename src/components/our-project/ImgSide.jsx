import downloadImage from "../../assets/images/download-img.svg";
import dotsShape from "../../assets/images/dots-shape.svg";
function ImgSide() {
	return (
		<div className="col-xl-5 col-lg-6">
						<div className="how-work-img text-center text-lg-left">
							<img
								src={downloadImage}
								alt=""
								className="w-100 wow fadeInLeft"
								data-wow-delay=".2s"
							/>
							<img
								src={dotsShape}
								alt=""
								className="shape dots-shape wow fadeInUp"
								data-wow-delay=".3s"
							/>
						</div>
					</div>
	);
}

export default ImgSide;
