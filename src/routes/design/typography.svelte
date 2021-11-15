<script>
	let text = 'The quick brown fox jumps over the lazy dog.';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="main p-4">
	<div class="grid xl:grid-cols-2">
		<div><h1 class="text-5xl md:text-9xl">Typography</h1></div>
		<div class="xl:text-right">
			<h2 class="text-6xl mt-12 xl:mt-0">Inter</h2>
			<h2 class="text-6xl ibm-plex-mono">IBM Plex Mono</h2>
		</div>
	</div>
	<div class="max-w-7xl m-auto">
		<div class="grid lg:grid-cols-4 gap-4 items-center">
			<div class="max-w-xs">
				<div class="text-9xl text-center">Aa</div>
				<div class="text-center">Inter</div>
			</div>
			<div class="col-span-3 text-2xl p-2 lg:p-16">
				A B C D E F G H I J K L M N O P Q R S T U V W X Y Z <br />
				a b c d e f g h i j k l m n o p q r s t u v w x y z <br />
				0 1 2 3 4 5 6 7 8 9
			</div>
		</div>
		<div class="grid lg:grid-cols-4 items-center">
			<div class="max-w-xs text-center">3XL</div>
			<div
				class="col-span-3 p-2 lg:p-4 lg:my-4 text-3xl"
				contenteditable="true"
				bind:innerHTML={text}
			>
				The quick brown fox jumps over the lazy dog.
			</div>
			<div class="max-w-xs text-center text-md">LG</div>
			<div
				class="col-span-3 p-2 lg:p-4 lg:my-4 text-xl"
				contenteditable="true"
				bind:innerHTML={text}
			>
				The quick brown fox jumps over the lazy dog.
			</div>
			<div class="max-w-xs text-center">MD</div>
			<div class="col-span-3 p-2 lg:p-4 lg:my-4" contenteditable="true" bind:innerHTML={text}>
				The quick brown fox jumps over the lazy dog.
			</div>
			<div class="max-w-xs text-center">SM</div>
			<div
				class="col-span-3 p-2 lg:p-4 lg:my-4 text-sm"
				contenteditable="true"
				bind:innerHTML={text}
			>
				The quick brown fox jumps over the lazy dog.
			</div>
		</div>

		<div class="grid lg:grid-cols-4 gap-4 items-center ibm-plex-mono">
			<div class="max-w-xs">
				<div class="text-9xl text-center">Aa</div>
				<div class="text-center">IBM Plex Mono</div>
			</div>
			<div class="col-span-3 text-2xl p-2 lg:p-16">
				A B C D E F G H I J K L M N O P Q R S T U V W X Y Z <br />
				a b c d e f g h i j k l m n o p q r s t u v w x y z <br />
				0 1 2 3 4 5 6 7 8 9
			</div>
		</div>

		<div class="grid lg:grid-cols-4 items-center ibm-plex-mono">
			<div class="max-w-xs text-center">3XL</div>
			<div
				class="col-span-3 p-2 lg:p-4 lg:my-4 text-3xl"
				contenteditable="true"
				bind:innerHTML={text}
			>
				The quick brown fox jumps over the lazy dog.
			</div>
			<div class="max-w-xs text-center text-md">LG</div>
			<div
				class="col-span-3 p-2 lg:p-4 lg:my-4 text-xl"
				contenteditable="true"
				bind:innerHTML={text}
			>
				The quick brown fox jumps over the lazy dog.
			</div>
			<div class="max-w-xs text-center">MD</div>
			<div class="col-span-3 p-2 lg:p-4 lg:my-4" contenteditable="true" bind:innerHTML={text}>
				The quick brown fox jumps over the lazy dog.
			</div>
			<div class="max-w-xs text-center">SM</div>
			<div
				class="col-span-3 p-2 lg:p-4 lg:my-4 text-sm"
				contenteditable="true"
				bind:innerHTML={text}
			>
				The quick brown fox jumps over the lazy dog.
			</div>
		</div>

		<div class="grid md:grid-cols-3 items-center gap-4">
			<div class="p-4 lg:p-12 border shadow-xl">
				<h2 class="text-3xl ibm-plex-mono">Header</h2>
				<p class="text-lg mt-2">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nulla sed ligula aliquam
					ornare.
				</p>
			</div>
			<div class="bg-gray-900 text-white p-4 lg:p-12 border shadow-xl">
				<h2 class="text-3xl ibm-plex-mono">Header</h2>
				<p class="text-lg mt-2">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nulla sed ligula aliquam
					ornare.
				</p>
			</div>
			<div class="bg-blue-700 text-white p-4 lg:p-12 border shadow-xl">
				<h2 class="text-3xl ibm-plex-mono">Header</h2>
				<p class="text-lg mt-2">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nulla sed ligula aliquam
					ornare.
				</p>
			</div>
		</div>
	</div>
</div>

<style>
	.ibm-plex-mono {
		font-family: 'IBM Plex Mono', monospace;
	}
</style>
