<script lang="ts">
	import BrandIcon from './BrandIcon.svelte';
</script>

<footer class="footer footer-center bg-neutral text-neutral-content p-10">
	<aside>
		<p class="font-bold">
			<a
				href="https://www.fct.unesp.br/#!/pesquisa/analise-numerica-e-simulacao-computacional/portugues/apresentacao/"
				class="hover:underline">Laboratório de Simulação Numérica</a
			>
		</p>
		<p>Grupo de Análise Numérica e Simulação Computacional</p>
		<p>FCT-Unesp - Câmpus de Presidente Prudente</p>
	</aside>
	<nav>
		<div class="grid grid-flow-col gap-4">
			<a href="https://github.com/cacic-fct/lsn-sensores">
				<BrandIcon
					name="github"
					width="24"
					height="24"
					class="fill-current transition hover:opacity-50"
					tabindex="0"
				/>
			</a>
		</div>
	</nav>
</footer>
