<script lang="ts" context="module">
	import type { SensorGroup } from './SensorService.svelte';

	import { db } from '../../firebase';
	import { child, get, ref } from 'firebase/database';

	const dbRef = ref(db);

	get(child(dbRef, `/`)).then((snapshot) => {
		if (snapshot.exists()) {
			console.log(snapshot.val());
		} else {
			console.log('No data available');
		}
	});

	interface SensorLastReading {
		valor: string;
		data: string;
	}

	async function fetchSensorData(): Promise<
		| {
				[key: string]: SensorLastReading | null;
		  }
		| undefined
	> {
		try {
			const lastTemperature = await get(child(dbRef, 'DadosSensores/Temperatura/atual'));
			const lastHumidity = await get(child(dbRef, 'DadosSensores/Umidade/atual'));
			const lastLight = await get(child(dbRef, 'DadosSensores/Luz/atual'));
			const lastMotion = await get(child(dbRef, 'DadosSensores/Presenca/atual'));
			const lastSmoke = await get(child(dbRef, 'DadosSensores/Chamas/atual'));
			const lastVoltage = await get(child(dbRef, 'DadosSensores/Tensao/atual'));
			const lastCurrent = await get(child(dbRef, 'DadosSensores/Corrente/atual'));
			const lastPower = await get(child(dbRef, 'DadosSensores/Potencia/atual'));

			return {
				temperature: lastTemperature.val() as SensorLastReading | null,
				humidity: lastHumidity.val() as SensorLastReading | null,
				light: lastLight.val() as SensorLastReading | null,
				motion: lastMotion.val() as SensorLastReading | null,
				smoke: lastSmoke.val() as SensorLastReading | null,
				voltage: lastVoltage.val() as SensorLastReading | null,
				current: lastCurrent.val() as SensorLastReading | null,
				power: lastPower.val() as SensorLastReading | null
			};
		} catch (error) {
			console.error('Error fetching sensor data:', error);

			return undefined;
		}
	}

	async function parseData(): Promise<SensorGroup[]> {
		const data = await fetchSensorData();
		if (!data) {
			return [];
		}

		const sensorValue = {
			temperature: data.temperature?.valor || null,
			humidity: data.humidity?.valor || null,
			light: data.light?.valor || null,
			motion: data.motion?.valor || null,
			smoke: data.smoke?.valor || null,
			voltage: data.voltage?.valor || null,
			current: data.current?.valor || null,
			power: data.power?.valor
		};

		const sensorTimestamp = {
			temperature: data.temperature?.data || null,
			humidity: data.humidity?.data || null,
			light: data.light?.data || null,
			motion: data.motion?.data || null,
			smoke: data.smoke?.data || null,
			voltage: data.voltage?.data || null,
			current: data.current?.data || null,
			power: data.power?.data || null
		};

		let parsedLight: boolean = false;
		let parsedMotion: boolean = false;
		let parsedSmoke: boolean = false;

		if (sensorValue.light === 'Acesa') {
			parsedLight = true;
		}

		if (sensorValue.motion === 'Com movimento') {
			parsedMotion = true;
		}

		if (sensorValue.smoke === 'Fogo') {
			parsedSmoke = true;
		}

		return [
			{
				name: 'Laboratório 4B',
				description: 'Central de laboratórios',
				sensors: [
					[
						{
							name: 'Temperatura',
							value: Number(sensorValue.temperature),
							type: 'temperature',
							lastReading: sensorTimestamp.temperature
						},
						{
							name: 'Umidade',
							value: Number(sensorValue.humidity),
							type: 'humidity',
							lastReading: sensorTimestamp.humidity
						}
					],
					// [
					// 	{
					// 		name: 'Luz',
					// 		value: parsedLight,
					// 		type: 'light',
					// 		lastReading: sensorTimestamp.light
					// 	},
					// 	{
					// 		name: 'Movimento',
					// 		value: parsedMotion,
					// 		type: 'motion',
					// 		lastReading: sensorTimestamp.motion
					// 	},
					// 	{
					// 		name: 'Fumaça',
					// 		value: parsedSmoke,
					// 		type: 'smoke',
					// 		lastReading: sensorTimestamp.smoke
					// 	}
					// ],

					[
						{
							name: 'Tensão',
							value: Number(sensorValue.voltage),
							type: 'voltage',
							lastReading: sensorTimestamp.voltage
						},
						{
							name: 'Corrente',
							value: Number(sensorValue.current),
							type: 'current',
							lastReading: sensorTimestamp.current
						},
						{
							name: 'Potência',
							value: Number(sensorValue.power),
							type: 'power',
							lastReading: sensorTimestamp.power
						}
					]
				]
			}
		];
	}

	export const data: SensorGroup[] = await parseData();
</script>
