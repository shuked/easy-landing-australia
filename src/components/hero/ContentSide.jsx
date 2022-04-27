import SectionContent from "./content-side/SectionContent";
import SectionCounter from "./content-side/SectionCounter";

function ContentSide() {
	return (
		<div className="col-xl-6 col-lg-6">
			<SectionContent />
			<SectionCounter />
		</div>
	);
}

export default ContentSide;
