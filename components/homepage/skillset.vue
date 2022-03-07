<template>
	<div class="skillset-wrapper" data-aos="fade-down">
		<h2 class="navigator_header">Skillset:</h2>
		<div class="skillset-seperator">
			<div class="skillset-container skillsets-languages">
				<SkillsetItem
					v-for="skill in skills1"
					:title="skill.title"
					:key="skill.date"
					:date="skill.date"
					:level="skill.level"
					:class="'skillset-left'"
				/>
			</div>
			<div class="skillset-container skillsets-languages">
				<SkillsetItem
					v-for="skill in skills2"
					:title="skill.title"
					:key="skill.date"
					:date="skill.date"
					:level="skill.level"
					:class="'skillset-right'"
				/>
			</div>
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
			skills1: [skills_[0], skills_[1], skills_[2]],
			skills2: [skills_[3], skills_[4], skills_[5]],
		};
	},
	components: {
		SkillsetItem,
	},
};
</script>
