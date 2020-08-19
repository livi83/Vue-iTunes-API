<template>
	<transition name="fade">
		<article v-cloak class="tunes-song">
			<div class="inside">
				<h2>
					{{ song.artist }} -
					<span class="song-name">{{ song.name }}</span>
				</h2>

				<div class="player-wrapper">
					<img
						v-if="song.cover"
						:src="song.cover"
						alt="cover image"
					/>
					<audio controls :src="song.audioFile" />
				</div>
			</div>
		</article>
	</transition>
</template>

<script>
export default {
	props: {
		song: {
			type: Object
		}
	},
	filters: {
		songify(song) {
			return song.artist + ' - ' + song.name
		}
	}
}
</script>

<style lang="scss" scoped>
.tunes-song {
	color: #fff;
	text-align: left;
	max-width: 24em;
	margin: 0 auto 2em;

	box-sizing: border-box;
	background-color: #e4405f;
	background-color: #262626;
	border-radius: 0.75em;

	position: relative;
	transition: 0.1s;

	display: flex;
	justify-content: center;
	align-items: center;
}
.song-name {
	color: $song-name-color;
}

.inside {
	padding: 1.35em 1.75em 1.75em;
}

h2 {
	font-size: inherit;
	line-height: 1.5em;
	margin: 0;
}

.player-wrapper {
	display: flex;
	align-items: center;
	flex-direction: row;
	justify-content: space-between;
	margin-top: 1.5em;
}

img {
	width: 5em;
	border: 3px solid white;
	border-radius: 0.5em;
}

audio {
	outline: none;
	max-width: 14em;
}

audio::-webkit-media-controls-panel {
	background: #fff;
}

@media screen and (max-width: 520px) {
	.player-wrapper {
		flex-direction: column;

		audio {
			margin-top: 1.5em;
		}
	}
}
</style>
