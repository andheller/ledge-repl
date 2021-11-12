<script lang="ts">
	import Tabs from './Tabs.svelte';
	import type { Component } from '../types';
	import CodeMirror from './CodeMirror.svelte';
	import { validate_each_argument } from 'svelte/internal';
	export let components: Component[] = [];
	export let current: number = 0;
	export let errorLoc;
	let textarea: HTMLTextAreaElement;
	let editor;
	function get_max(_components: Component[]): number {
		const ids = _components.map(({ id }) => id);
		return Math.max(...ids);
	}
	function new_component() {
		const id = get_max(components) + 1;
		components = components.concat({
			id,
			name: `Component${id}`,
			type: 'svelte',
			source: ''
		});
		current = id;
		current_component = components.findIndex(({ id }) => id === current);
		editor.set('');
		editor.focus();
	}
	$: current_component = components.findIndex(({ id }) => id === current);
	$: tabs = components.map(({ id, name, type }) => ({ id, name, type }));

	function updateTextarea(value) {
		components[current_component].source = value.detail.value;
	}
</script>

<section>
	<Tabs
		{tabs}
		{current}
		on:select={({ detail }) => {
			current = detail;
			current_component = components.findIndex(({ id }) => id === current);
			editor.set(components[current_component].source);
		}}
		on:new={new_component}
	/>

	<div class="h-screen">
		<CodeMirror
			bind:this={editor}
			{errorLoc}
			bind:code={components[current_component].source}
			on:change={updateTextarea}
		/>
	</div>
	<textarea bind:value={components[current_component].source} bind:this={textarea} hidden />
</section>

<style>
	textarea {
		width: 100%;
		height: 100vh;
		border: none;
		outline: none;
		font-family: monospace;
		font-size: 14px;
		padding: 10px;
		resize: none;
		background: #1f2937;
		color: #fff;
	}
</style>
