<script lang="ts">
	import { getIcon, shouldHighlightCard, type Sensor } from './SensorService.svelte';

	export let sensorGroups: Sensor[][];

	import { getValue } from './SensorService.svelte';
</script>

{#each sensorGroups as group}
	<div class="each-line m-1 flex flex-wrap">
		{#each group as sensor}
			<div
				class:glass-active={shouldHighlightCard(sensor)}
				class:glass-custom={!shouldHighlightCard(sensor)}
				class="same-width card card-side card-compact m-3 min-w-60 items-center text-left shadow-xl hover:cursor-pointer"
				on:click={() => console.log(sensor)}
				on:keypress={() => console.log(sensor)}
				role="button"
				tabindex="0"
			>
				<div class="m-3">
					<svelte:component this={getIcon(sensor.type)} class="h-8 w-8" />
				</div>
				<div class="card-body !pl-1">
					<h2 class="!m-0 text-lg font-medium">{sensor.name}</h2>
					<p class="text-4xl font-semibold">{getValue(sensor)}</p>
					<p>18/07/2024 14:00</p>
				</div>
			</div>
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

	.glass-custom {
		background-color: rgba(0%, 0%, 0%, 0.5);
		backdrop-filter: blur(10px);
		color: #fff;
	}

	.glass-active {
		background-color: rgba(100%, 100%, 100%, 0.9);
		backdrop-filter: blur(10px);
	}
</style>
