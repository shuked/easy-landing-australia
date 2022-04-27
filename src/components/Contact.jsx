import SectionTitle from "./contact/SectionTitle";
import SectionContent from "./contact/SectionContent";
function Contact() {
	return (
		<section id="contact" className="contact-area pt-130">
			<div className="container">
				<SectionTitle />
				<SectionContent />
			</div>
		</section>
	);
}

export default Contact;
