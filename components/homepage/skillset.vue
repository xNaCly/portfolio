<template>
	<div class="skillset-wrapper">
		<h2 class="navigator_header">Skillset:</h2>
		<div class="skillset-container skillsets-languages" data-aos="fade-left">
			<SkillsetItem
				v-for="skill in skills"
				:title="skill.title"
				:key="skill.date"
				:date="skill.date"
				:level="skill.level"
			/>
		</div>
	</div>
</template>
<script>
import SkillsetItem from "../util/skillset_item.vue";
import { skills as skills_ } from "../../content/skills.json";
skills_.sort((a, b) => {
	// if (a.level < b.level) return -1;
	// if (a.level > b.level) return 1;
	// return 0;
	return new Date(a.date) - new Date(b.date);
});

export default {
	name: "Skillset",
	data() {
		return {
			skills: skills_,
		};
	},
	components: {
		SkillsetItem,
	},
};
</script>
