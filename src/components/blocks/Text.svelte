<script>
	export let props = {
		text: 'Hello',
		class: 'bg-blue-200'
	};
</script>

<div
	onselect={(event) => alert('hi')}
	contenteditable="true"
	bind:innerHTML={props.text}
	data-prop="text"
	class={props.class}
>
	{#if props.title}{props.text}{/if}
</div>

<style>
	div {
		outline: none;
		margin-bottom: 20px;
	}

	div:empty::before {
		content: 'type something...';
		color: #9ca3af;
	}
	div {
		outline: none;
		display: inline-block;
	}
</style>
