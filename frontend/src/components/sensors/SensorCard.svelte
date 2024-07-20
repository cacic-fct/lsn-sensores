<script lang="ts">
	import { getIcon, type Sensor } from './SensorService.svelte';

	export let sensorGroups: Sensor[][];

	import { getValue } from './SensorService.svelte';
</script>

{#each sensorGroups as group}
	<div class="flex m-1 each-line flex-wrap">
		{#each group as sensor}
			<button
				class="card card-side card-compact bg-base-100 shadow-xl items-center m-3 same-width min-w-60 hover:cursor-pointer text-left"
				on:click={() => console.log(sensor)}
			>
				<div class="m-3">
					<svelte:component this={getIcon(sensor.type)} class="w-8 h-8" />
				</div>
				<div class="!pl-0 card-body">
					<h2 class="card-title !m-0">{sensor.name}</h2>
					<p class="text-4xl font-semibold">{getValue(sensor)}</p>
					<p>18/07/2024 14:00</p>
				</div>
			</button>
		{/each}
	</div>
{/each}

<style>
	.each-line {
		flex: 0 0 100%;
	}
	.same-width {
		flex: 1 1 0;
	}
</style>
