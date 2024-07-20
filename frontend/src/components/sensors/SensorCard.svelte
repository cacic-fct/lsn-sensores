<script lang="ts">
	import { getIcon, type Sensor } from './SensorService.svelte';

	export let sensorGroups: Sensor[][];

	import { getValue } from './SensorService.svelte';
</script>

{#each sensorGroups as group}
	<div class="each-line m-1 flex flex-wrap">
		{#each group as sensor}
			<button
				class="same-width card card-side card-compact m-3 min-w-60 items-center bg-base-100 text-left shadow-xl hover:cursor-pointer"
				on:click={() => console.log(sensor)}
			>
				<div class="m-3">
					<svelte:component this={getIcon(sensor.type)} class="h-8 w-8" />
				</div>
				<div class="card-body !pl-0">
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
