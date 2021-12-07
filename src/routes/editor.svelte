<script>
	import { content, activeBlock, activeProp, activeIndex } from '../stores.js';
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

<svelte:window
	on:mouseup={(event) => console.log(window.getSelection().anchorNode.parentNode.isContentEditable)}
/>

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
