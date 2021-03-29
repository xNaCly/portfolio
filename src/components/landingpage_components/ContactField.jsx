function ContactField({ Class, href, icon, alt }) {
	return (
		<a href={href} className="hide_underscore">
			<span className={`${Class} contact_icon`}>{icon}</span>
		</a>
	);
}
export default ContactField;
