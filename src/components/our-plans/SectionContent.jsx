import NavPills from "./NavPills";
import MonthlyPlans from "./MonthlyPlans";
import YearlyPlans from "./YearlyPlans";

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
