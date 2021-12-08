<script>
	export let props = {
		text: 'Hello',
		class: 'bg-blue-50/50 text-blue-800 shadow-xl p-5 m-auto block max-w-xl backdrop-blur-md'
	};
</script>

<div contenteditable="true" bind:innerHTML={props.text} data-prop="text" class={props.class}>
	{props.text}
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
	}
</style>
