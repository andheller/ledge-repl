<script>
	import { subscribe } from 'svelte/internal';

	let colors = [
		{
			name: 'Primary',
			color: [
				{ colorName: '50', hex: '#EFF6FF' },
				{ colorName: '100', hex: '#DBEAFE' },
				{ colorName: '200', hex: '#BFDBFE' },
				{ colorName: '300', hex: '#93C5FD' },
				{ colorName: '400', hex: '#60A5FA' },
				{ colorName: '500', hex: '#3B82F6' },
				{ colorName: '600', hex: '#2563EB' },
				{ colorName: '700', hex: '#1D4ED8' },
				{ colorName: '800', hex: '#1E40AF' },
				{ colorName: '900', hex: '#1E3A8A' }
			]
		},
		{
			name: 'Secondary',
			color: [
				{ colorName: '50', hex: '#ECFDF5' },
				{ colorName: '100', hex: '#D1FAE5' },
				{ colorName: '200', hex: '#A7F3D0' },
				{ colorName: '300', hex: '#6EE7B7' },
				{ colorName: '400', hex: '#34D399' },
				{ colorName: '500', hex: '#10B981' },
				{ colorName: '600', hex: '#059669' },
				{ colorName: '700', hex: '#047857' },
				{ colorName: '800', hex: '#065F46' },
				{ colorName: '900', hex: '#064E3B' }
			]
		},

		{
			name: 'Gray',
			color: [
				{ colorName: '50', hex: '#F9FAFB' },
				{ colorName: '100', hex: '#F3F4F6' },
				{ colorName: '200', hex: '#E5E7EB' },
				{ colorName: '300', hex: '#D1D5DB' },
				{ colorName: '400', hex: '#9CA3AF' },
				{ colorName: '500', hex: '#6B7280' },
				{ colorName: '600', hex: '#4B5563' },
				{ colorName: '700', hex: '#374151' },
				{ colorName: '800', hex: '#1F2937' },
				{ colorName: '900', hex: '#111827' }
			]
		}
	];
</script>

<div class="p-16">
	<h1 class="text-4xl sm:text-6xl md:text-8xl">Design System</h1>
	<h2 class="text-xl sm:text-2xl md:text-3xl mt-16">Colors</h2>
	{#each colors as color}
		<div class="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
			<span class="text-xl mt-7">{color.name}</span>
		</div>
		<div class="min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
			{#each color.color as sub}
				<div class="space-y-1.5">
					<div
						on:click={() => navigator.clipboard.writeText(sub.hex)}
						class="h-10 lg:h-16 w-full rounded ring-1 ring-inset ring-black ring-opacity-0 cursor-pointer"
						style="background:{sub.hex}"
					/>
					<span>{sub.colorName}</span><br />
					<span class="text-gray-600 text-sm">{sub.hex}</span>
				</div>
			{/each}
		</div>
	{/each}
	<h2 class="text-xl sm:text-2xl md:text-3xl mt-16">Typography</h2>
	<div class="flex flex-cols-2 flex-wrap items-center">
		<div>
			<div class="text-9xl">Aa</div>
			<div class="text-center">Inter</div>
		</div>
		<div class="text-2xl p-16">
			A B C D E F G H I J K L M N O P Q R S T U V W X Y Z <br />
			a b c d e f g h i j k l m n o p q r s t u v w x y z <br />
			0 1 2 3 4 5 6 7 8 9
		</div>
	</div>

	<h2 class="text-xl sm:text-2xl md:text-3xl mt-16">Image Assets</h2>
	<ul class="text-xl pl-3">
		<li>Icons</li>
		<li>Logos</li>
		<li>Images</li>
	</ul>
	<h2 class="text-xl sm:text-2xl md:text-3xl mt-16">Blocks</h2>
</div>
