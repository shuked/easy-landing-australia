
import SectionTitle from "./content-side/SectionTitle";
import SectionContent from "./content-side/SectionContent";
import SectionButton from "./content-side/SectionButton";
function ContentSide() {
	return (
		<div className="col-xl-6 offset-xl-1 col-lg-6">
			<div className="how-work-content-wrapper">
				<SectionTitle />
				<SectionContent />
				<SectionButton />
			</div>
		</div>
	);
}

export default ContentSide;
