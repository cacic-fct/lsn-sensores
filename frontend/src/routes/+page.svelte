<script lang="ts">
	import Footer from '../components/shared/Footer.svelte';
	import Navbar from '../components/shared/Navbar.svelte';
	import Sections from '../components/sensors/Sections.svelte';
</script>

<div class="flex h-full flex-col bg-slate-100">
	<Navbar />

	<main class="m-auto w-full max-w-screen-2xl flex-1 p-4">
		<Sections />
	</main>

	<Footer />
</div>
