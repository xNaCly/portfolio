<template>
	<div class="skillset-wrapper">
		<h2>Skillset:</h2>
		<h3 class="navigator_header">Operating systems:</h3>
		<div class="skillset-container">
			<SkillsetItem
				v-for="skill in os"
				:title="skill.title"
				:key="skill.date"
				:date="skill.date"
				:level="skill.level"
				:img="skill.img"
				:img_pre="skill.img_pre"
			/>
		</div>
		<h3 class="navigator_header">Frameworks and build systems:</h3>
		<div class="skillset-container">
			<SkillsetItem
				v-for="skill in other"
				:title="skill.title"
				:key="skill.date"
				:date="skill.date"
				:level="skill.level"
				:img="skill.img"
				:img_pre="skill.img_pre"
			/>
		</div>
		<h3 class="navigator_header">Tools:</h3>
		<div class="skillset-container">
			<SkillsetItem
				v-for="skill in skills"
				:title="skill.title"
				:key="skill.date"
				:date="skill.date"
				:level="skill.level"
				:img="skill.img"
				:img_pre="skill.img_pre"
			/>
		</div>
		<h3 class="navigator_header">Programming-, markup and query languages:</h3>
		<div class="skillset-container">
			<SkillsetItem
				v-for="skill in languages"
				:title="skill.title"
				:key="skill.date"
				:date="skill.date"
				:level="skill.level"
				:img="skill.img"
				:img_pre="skill.img_pre"
			/>
		</div>
		<h3 class="navigator_header">Databases:</h3>
		<div class="skillset-container">
			<SkillsetItem
				v-for="skill in db"
				:title="skill.title"
				:key="skill.date"
				:date="skill.date"
				:level="skill.level"
				:img="skill.img"
				:img_pre="skill.img_pre"
			/>
		</div>
	</div>
</template>
<script>
import SkillsetItem from "../util/skillset_item.vue";
import { skills, languages, other, os, db } from "../../content/skills.json";

function sort(a, b) {
	return new Date(a.date) - new Date(b.date);
}

export default {
	name: "Skillset",
	data() {
		return {
			skills: skills.sort(sort),
			languages: languages.sort(sort),
			other: other.sort(sort),
			os: os.sort(sort),
			db: db.sort(sort),
		};
	},
	components: {
		SkillsetItem,
	},
};
</script>
