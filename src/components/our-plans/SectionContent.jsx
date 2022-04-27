import NavPills from "./section-content/NavPills";
import MonthlyPlans from "./section-content/MonthlyPlans";
import YearlyPlans from "./section-content/YearlyPlans";

function SectionContent() {
	return (
		<div className="row">
					<div className="col-12 mx-auto">
						<div className="pricing-nav">
							{/* <NavPills /> */}

							<div className="tab-content" id="pills-tabContent">
								<MonthlyPlans />
								<YearlyPlans />
							</div>
						</div>
					</div>
				</div>
	);
}

export default SectionContent;
