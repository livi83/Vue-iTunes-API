<template>
	<div class="navigation">
		<router-link to="/">My iTunes App</router-link>
	</div>
</template>

<style scoped lang="scss">
.navigation {
	margin: 2em auto 2.5em;
	padding: 0 1.25em;
	display: inline-block;
	background: transparent;
	white-space: nowrap;

	border: 3px solid white;
	border-radius: 2.5em;

	a {
		color: white;
		font-size: 1.1em;
		font-weight: 800;
		text-decoration: none;

		cursor: pointer;
		padding: 0.575em 0.65em;
		display: inline-block;
		text-align: center;

		&.router-link-exact-active {
			color: #fffa0d;
		}
	}
}
</style>
