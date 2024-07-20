<script>
	import { CalendarSearch, Menu } from 'lucide-svelte';
</script>

<div class="navbar bg-base-100">
	<div class="navbar-start">
		<div class="dropdown">
			<div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
				<Menu />
			</div>
			<ul class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
				<li><a href="#lab-4b">Laboratório 4B</a></li>
				<li><a href="#lsn">LSN</a></li>
			</ul>
		</div>
		<a class="text-xl">Sensores LSN</a>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal px-1">
			<li><a href="#lab-4b">Laboratório 4B</a></li>
			<li><a href="#lab-4b">LSN</a></li>
		</ul>
	</div>
	<div class="navbar-end">
		<a class="btn"><CalendarSearch /></a>
	</div>
</div>
