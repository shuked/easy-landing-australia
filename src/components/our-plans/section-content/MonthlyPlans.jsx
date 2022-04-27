import PlanVisa from './PlanVisa'
import PlanFull from './PlanFull'
import PlanTax from './PlanTax'

function MonthlyPlans() {
	return (
		<div
			className="tab-pane fade price-tab show active"
			id="pills-month"
			role="tabpanel"
			aria-labelledby="pills-month-tab"
		>
			<div className="row">
				<PlanVisa />
				<PlanFull />
				<PlanTax />
			</div>
		</div>
	);
}

export default MonthlyPlans;
