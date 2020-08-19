<template>
	<div class="contact">
		<h1>iTunes</h1>
		<TunesSearchForm />
		<TunesList />
	</div>
</template>

<script>
import TunesSearchForm from '@/components/tunes/TunesSearchForm.vue'
import TunesList from '@/components/tunes/TunesList.vue'
export default {
	components: {
		TunesSearchForm,
		TunesList
	}
}
</script>
