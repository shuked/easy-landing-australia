import SingleAccordion1 from "./section-content/SingleAccordion1";
import SingleAccordion2 from "./section-content/SingleAccordion2";
import SingleAccordion3 from "./section-content/SingleAccordion3";
import SingleAccordion4 from "./section-content/SingleAccordion4";

function SectionContent() {
	return (
		<div className="how-work-accordion accordion-style">
			<h4 dir="rtl">תהליך הליווי מחולק ל4 חלקים:</h4>
			<div className="accordion" id="accordionExample">
				<SingleAccordion1 />
				<SingleAccordion2 />
				<SingleAccordion3 />
				<SingleAccordion4 />
			</div>
		</div>
	);
}

export default SectionContent;
