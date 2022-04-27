import SectionTitle from "./section-content/SectionTitle";
import AboutUs from "./section-content/AboutUs";
import SectionButtons from "./section-content/SectionButtons";

function SectionContent() {
	return (
		<div className="hero-content">
			<SectionTitle />
			<AboutUs />
			<SectionButtons />
		</div>
	);
}

export default SectionContent;
