<script lang="ts">
	import Footer from '../components/shared/Footer.svelte';
	import Navbar from '../components/shared/Navbar.svelte';
	import Sections from '../components/sensors/Sections.svelte';
</script>

<div class="flex flex-col h-screen">
	<Navbar />

	<main class="p-4 flex-1">
		<Sections />
	</main>

	<Footer />
</div>
