function skillSetField({ name, image }) {
	if (!image) return <></>;
	return <img className="skill_set_image" src={image} alt={name} />;
}

export default skillSetField;
