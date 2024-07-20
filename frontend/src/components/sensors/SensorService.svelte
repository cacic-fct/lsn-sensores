<script lang="ts" context="module">
	import type { ComponentType } from 'svelte';
	import type { Icon } from 'lucide-svelte';

	export type Sensor = {
		name: string;
		value: number;
		type:
			| 'temperature'
			| 'humidity'
			| 'voltage'
			| 'current'
			| 'power'
			| 'motion'
			| 'smoke'
			| 'light';
	};

	export type SensorGroup = {
		name: string;
		description: string;
		sensors: Sensor[][];
	};

	export function getValue(sensor: Sensor) {
		switch (sensor.type) {
			case 'temperature':
				return `${sensor.value.toFixed(0)}°`;
			case 'humidity':
				return `${sensor.value.toFixed(0)}%`;
			case 'light':
				return sensor.value ? 'Ligada' : 'Desligada';
			case 'motion':
				return sensor.value ? 'Detectado' : 'Não detectado';
			case 'voltage':
				return `${sensor.value.toFixed(0)}V`;

			case 'current':
				return `${sensor.value.toFixed(2)}A`;
			case 'power':
				return `${sensor.value.toFixed(0)}VA`;
			case 'smoke':
				return sensor.value ? 'Detectada' : 'Não detectada';

			default:
				return sensor.value.toFixed(0);
		}
	}

	export function getUnit(type: string): string {
		switch (type) {
			case 'temperature':
				return '°C';
			case 'humidity':
				return '%';
			default:
				return '';
		}
	}

	import {
		Thermometer,
		Droplet,
		CircleHelp,
		Zap,
		UserRound,
		Flame,
		Lightbulb
	} from 'lucide-svelte';
	export function getIcon(type: string): ComponentType<Icon> {
		switch (type) {
			case 'temperature':
				return Thermometer;
			case 'humidity':
				return Droplet;
			case 'voltage':
			case 'current':
			case 'power':
				return Zap;
			case 'motion':
				return UserRound;
			case 'smoke':
				return Flame;
			case 'light':
				return Lightbulb;
			default:
				return CircleHelp;
		}
	}

	export function createSlug(name: string): string {
		const slug = name
			.normalize('NFD')
			.replace(/\p{Diacritic}/gu, '')
			.toLowerCase()
			.replace(/ /g, '-');
		return slug;
	}

	export function shouldHighlightCard(sensor: Sensor): boolean {
		switch (sensor.type) {
			case 'temperature':
				return sensor.value > 30;
			case 'humidity':
				return sensor.value > 70;
			case 'light':
				return sensor.value === 1;
			case 'motion':
				return sensor.value === 1;
			case 'smoke':
				return sensor.value === 1;
			default:
				return false;
		}
	}
</script>
