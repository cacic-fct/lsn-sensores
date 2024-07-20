<script>
	import { CalendarSearch, Menu } from 'lucide-svelte';

	import { data } from '../sensors/SensorData.svelte';
	import { createSlug } from '../sensors/SensorService.svelte';
	const list = data.map((item) => {
		return {
			name: item.name,
			slug: createSlug(item.name)
		};
	});
</script>

<div class="navbar sticky top-0 z-10 bg-base-100">
	<div class="navbar-start">
		<div class="dropdown">
			<div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
				<Menu />
			</div>
			<ul class="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow">
				{#each list as { name, slug }}
					<li><a class="h-12 pt-3.5" href="#{slug}">{name}</a></li>
				{/each}
			</ul>
		</div>
		<h1 class="text-xl">Sensores LSN</h1>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal px-1">
			{#each list as { name, slug }}
				<li><a href="#{slug}">{name}</a></li>
			{/each}
		</ul>
	</div>
	<div class="navbar-end">
		<button class="btn"><CalendarSearch /></button>
	</div>
</div>
