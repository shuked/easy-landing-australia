import downloadImage from "../assets/images/download-img.svg";
import dotsShape from "../assets/images/dots-shape.svg";
import SingleAccordion1 from './our-project/SingleAccordion1'
import SingleAccordion2 from './our-project/SingleAccordion2'
import SingleAccordion3 from './our-project/SingleAccordion3'
import SingleAccordion4 from './our-project/SingleAccordion4'
import SectionTitle from "./our-project/SectionTitle";


function OurProject() {
	return (
		<section id="how-work" className="how-work-area pt-130">
			<div className="container">
				<div className="row">
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
					<div className="col-xl-6 offset-xl-1 col-lg-6">
						<div className="how-work-content-wrapper">
							<SectionTitle />
							<div className="how-work-accordion accordion-style">
							<h4 dir="rtl">תהליך הליווי מחולק ל4 חלקים:</h4>
								<div
									className="accordion"
									id="accordionExample"
								>
									<SingleAccordion1 />
									<SingleAccordion2 />
									<SingleAccordion3 />
									<SingleAccordion4 />	
								</div>
							</div>
							<div
								className="download-btn wow fadeInUp"
								data-wow-delay=".5s"
							>
								<a
									href="#pricing"
									className="main-btn btn-hover wow fadeInUp"
									data-wow-delay=".45s"
								>
									Purcahse Now
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default OurProject;
