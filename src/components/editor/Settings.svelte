<script>
	import { content, activeBlock, activeProp, activeIndex } from '../../stores.js';
</script>

<div id="settings">
	<div>
		{JSON.stringify($content)}
	</div>
	<input bind:value={$content[0].props.class} />
</div>

<style>
	#settings {
		background: #f5f5f4df;
		padding: 20px;
		box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
		margin-bottom: 15px;
		position: absolute;
		max-width: 320px;
		right: 0px;
		-webkit-backdrop-filter: blur(10px);
		backdrop-filter: blur(10px);
	}
</style>
