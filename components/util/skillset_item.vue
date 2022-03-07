<template>
	<div class="skillset" data-aos="fade-left">
		<div class="skillset-title">
			{{ capitalise(title) }}
			<span class="skillset-experience">{{ formatTime(date) }}</span>
		</div>
		<div class="badge skillset-badge" :class="`skillset-badge-${level}`">{{ capitalise(level) }}</div>
	</div>
</template>

<script>
export default {
	name: "SkillsetItem",
	methods: {
		capitalise: function (string) {
			string = string?.toLowerCase();
			let fc = string?.charAt(0).toUpperCase();
			return fc + string?.slice(1);
		},
		formatTime: function (timestamp) {
			let string = "";
			let days = (Date.now() - new Date(timestamp)) / (1000 * 3600 * 24);

			if (days > 360) {
				string = `${(days / 360).toFixed(1)} years`;
			} else if (days > 30 && days < 360) {
				string = `${Math.round(days / 30)} months`;
			} else {
				string = `${Math.round(days)} days`;
			}

			return string;
		},
	},
	props: ["title", "level", "date"],
};
</script>
