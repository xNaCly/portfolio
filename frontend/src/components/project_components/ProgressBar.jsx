function ProgressBar({ text, progress }) {
	let color = "";
	let progress_text = "";
	if (progress <= 24) {
		color = "var(--danger)";
		progress_text = "Beginner";
	} else if (25 <= progress && progress <= 49) {
		color = "var(--warning)";
		progress_text = "Intermediate";
	} else if (50 <= progress) {
		color = "var(--success)";
		progress_text = "Advanced";
	}

	return (
		<div className="progress_container_main">
			<h3 className="progress_name">{text}:</h3>
			<div className="progress_bar_container">
				<div
					className="progress_bar_color"
					style={{
						width: "100%" /*`${progress}%`*/,
						backgroundColor: color,
					}}>
					{progress_text}
				</div>
			</div>
		</div>
	);
}

export default ProgressBar;
