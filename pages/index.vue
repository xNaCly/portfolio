<template>
	<div class="wave" v-bind:class="`wave_${$colorMode.value}`">
		<div class="homepage-container">
			<HomepageAbout />
			<div class="skillset-wrapper-wrapper">
				<HomepageSkillset />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "index",
};
</script>
<style></style>
