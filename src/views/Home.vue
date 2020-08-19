<template>
	<section class="home">
		<img class="logo-img" alt="Vue logo" src="../assets/vuelogo.png" />
		<HelloWorld msg="Welcome to Your Vue.js App" />
	</section>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/home/HelloWorld.vue'

export default {
	name: 'home',
	components: {
		HelloWorld
	}
}
</script>

<style scoped lang="scss">
.logo-img {
	width: 45%;
	margin: 0 auto;
	display: block;
}
</style>
