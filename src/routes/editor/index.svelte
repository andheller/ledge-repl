<script>
	import { content, activeBlock, activeProp, activeIndex } from '../../stores.js';
	import { handleKeyUp } from '../../components/editor/edits.js';
	import Settings from '../components/editor/Settings.svelte';

	function findBlockIndex(id) {
		let index = $content.findIndex((item) => item.blockID == id);
		return index;
	}
	$: $activeIndex = findBlockIndex($activeProp);

	function handleClick(blockID, propKeys, id) {
		$activeBlock = blockID;
	}
	function updateCurrent(blockID, props, e) {
		($activeBlock = blockID), ($activeProp = e.target.dataset.prop);
		$content[findBlockIndex(blockID)].props[$activeProp] = e.target.innerHTML;
	}
</script>

<svelte:head>
	<script src="https://cdn-tailwindcss.vercel.app/"></script>
</svelte:head>

<svelte:window on:keyup={handleKeyUp} />
<Settings />

{#each $content as { component, blockID, props } (blockID)}
	<div
		data-block-id={blockID}
		on:click={() => handleClick(blockID)}
		on:input|capture={(event) => updateCurrent(blockID, props, event)}
	>
		<svelte:component this={component} bind:props />
	</div>
{/each}
