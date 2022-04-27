import NavPills from "./our-plans/NavPills";
import SectionTitle from "./our-plans/SectionTitle";
import MonthlyPlans from "./our-plans/section-content/MonthlyPlans";
import YearlyPlans from "./our-plans/YearlyPlans";
import SectionContent from "./our-plans/SectionContent";

function OurPlans() {
	return (
		<section id="pricing" className="pricing-area pt-120">
			<div className="container">
				<SectionTitle />
				<SectionContent />
			</div>
		</section>
	);
}

export default OurPlans;
