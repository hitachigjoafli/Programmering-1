<script>
		import Fastfact from './Fastfact.svelte';
	export let Fact;
		export let Smileys;
		export let Parameters;
	
	Parameters.push(100000)
</script>

<div>
	<h2>
		{#each Parameters as Parameter, index}
<!-- 		{Fact} -->
		{#if (Parameters[index]< Fact && Parameters[index+1]> Fact )}
		{Smileys[index]}{Fact}
		{/if}
    {/each}
	
	</h2>
</div>
	
<style>
	div{
		margin-right: 30px;
	}
	</style>