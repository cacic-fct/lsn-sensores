<script lang="ts">
	import SensorCard from './SensorCard.svelte';
	import { data } from './SensorData.svelte';
	import { createSlug } from './SensorService.svelte';
</script>

{#each data as section}
	<section class="mb-10" id={createSlug(section.name)}>
		<div class="mx-4">
			<h2 class="text-3xl font-bold">{section.name}</h2>
			<p>{section.description}</p>
		</div>

		<SensorCard sensorGroups={section.sensors} />
	</section>
{/each}

<style>
	section {
		scroll-margin-top: 4.3rem;
	}
</style>
