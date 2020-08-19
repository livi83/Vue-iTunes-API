<template>
	<div id="app">
		<header>
			<TheNavigation />
		</header>
		<main class="content"><router-view /></main>
	</div>
</template>

<script>
import TheNavigation from '@/components/TheNavigation.vue'
export default {
	components: {
		TheNavigation
	}
}
</script>

<style lang="scss">
@import url('./assets/scss/main.scss');
</style>
