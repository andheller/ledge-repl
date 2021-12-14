<script>
	import { fly } from 'svelte/transition';
	import { content, activeBlock, activeProp, activeIndex } from '../../stores.js';
	let visible = false;

	function show() {
		visible = !visible;
	}
	export function updateContent(id, key, value) {
		let index = findObjIndex(id);
		$content[index].props[key] = value;
	}
	function findObjIndex(id) {
		let index = $content.findIndex(($content) => $content.blockID === id);
		return index;
	}
	function handleKeyDown(event) {
		let key = event.key;
		if (key === 'Escape') return show();
	}
	function removeBlock(blockID) {
		$content = $content.filter((block) => block.blockID != blockID);
	}
</script>

<svelte:window on:keydown={handleKeyDown} />

<div id="settings" class="fixed top-4 right-4 z-10">
	<div
		class="bg-gray-50 hover:bg-100 p-2 shadow border border-gray-800 m-2 cursor-pointer hover:bg-gray-100 group"
		on:click={show}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6 group-hover:rotate-12 transition duration-150 inline-block"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
			/>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
			/>
		</svg>
	</div>
</div>

{#if visible}
	<div
		transition:fly={{ x: 400, duration: 350 }}
		class="fixed top-0 right-0 py-6 px-18 shadow-xl z-10 bg-blue-50/40 backdrop-blur max-h-screen max-w-full w/70 overflow-scroll"
	>
		<div class="px-4 py-2 text-xl">
			<span on:click={show} class="text-gray-700 float-right cursor-pointer"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-8 w-8"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg></span
			>
		</div>
		<div class="p-8">
			{#each $content as block (block.blockID)}
				<div class="text-2xl text-center">
					{block.name}
					<span on:click={removeBlock(block.blockID)}
						><svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-7 w-7 inline float-right hover:text-red-400 cursor-pointer"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"
							/>
						</svg></span
					>
				</div>
				{#each Object.entries(block.props) as [key, value]}
					<div class="text-md ">{key}</div>
					<input
						class="bg-white p-4 mb-4 shadow-xl shadow-blue-100 border border-gray-300 max-w-full w-96"
						on:input={(e) => updateContent(block.blockID, key, e.target.value)}
						{value}
					/>
				{/each}
			{/each}
		</div>
	</div>
{/if}
