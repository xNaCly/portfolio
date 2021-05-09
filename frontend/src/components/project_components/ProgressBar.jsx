function ProgressBar({ text, progress }) {
	let color = "";
	if (progress <= 24) {
		color = "var(--danger)";
	} else if (25 <= progress && progress <= 49) {
		color = "var(--warning)";
	} else if (50 <= progress) {
		color = "var(--success)";
	}

	return (
		<div className="progress_container_main">
			<h3 className="progress_name">{text}:</h3>
			<div className="progress_bar_container">
				<div className="progress_bar_color" style={{ width: `${progress}%`, backgroundColor: color }}>
					{progress}/100
				</div>
			</div>
		</div>
	);
}

export default ProgressBar;
