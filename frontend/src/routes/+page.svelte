<script lang="ts">
	import Footer from '../components/shared/Footer.svelte';
	import Navbar from '../components/shared/Navbar.svelte';
	import Sections from '../components/sensors/Sections.svelte';
</script>

<div class="flex h-screen flex-col">
	<Navbar />

	<main class="flex-1 p-4">
		<Sections />
	</main>

	<Footer />
</div>
