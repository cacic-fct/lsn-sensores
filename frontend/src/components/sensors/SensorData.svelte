<script lang="ts" context="module">
	import type { SensorGroup } from './SensorService.svelte';

	export const data: SensorGroup[] = [
		{
			name: 'Laboratório 4B',
			description: 'Central de laboratórios',
			sensors: [
				[
					{
						name: 'Temperatura',
						value: 25,
						type: 'temperature'
					},
					{
						name: 'Umidade',
						value: 50,
						type: 'humidity'
					}
				],
				[
					{
						name: 'Luz',
						value: 0,
						type: 'light'
					},
					{
						name: 'Movimento',
						value: 0,
						type: 'motion'
					},
					{
						name: 'Fumaça',
						value: 0,
						type: 'smoke'
					}
				],
				[
					{
						name: 'Tensão',
						value: 220,
						type: 'voltage'
					},
					{
						name: 'Corrente',
						value: 1.5,
						type: 'current'
					},
					{
						name: 'Potência',
						value: 330,
						type: 'power'
					}
				]
			]
		},
		{
			name: 'LSN',
			description: 'Laboratório de Simulação Numérica - Sala 13',
			sensors: [
				[
					{
						name: 'Temperatura',
						value: 25,
						type: 'temperature'
					},
					{
						name: 'Umidade',
						value: 50,
						type: 'humidity'
					}
				]
			]
		}
	];
</script>
