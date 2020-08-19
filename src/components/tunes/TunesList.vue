<template>
	<ul class="tunes-list">
		<li><TunesSong v-for="song in songs" :key="song.id" :song="song" /></li>
	</ul>
</template>

<script>
import TunesSong from '@/components/tunes/TunesSong.vue'

export default {
	components: {
		TunesSong
	},
	data() {
		return {
			songs: []
		}
	},
	mounted() {
		this.$root.$on('new-songs-arrived', data => (this.songs = data))
	}
}
</script>

<style scoped>
ul {
	margin-top: 3em;
	padding-left: 0;
	list-style: none;
}
</style>
