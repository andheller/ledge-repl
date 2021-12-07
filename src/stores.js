import { writable } from 'svelte/store';
import Text from './components/blocks/Text.svelte';
import { browser } from '$app/env';

export const activeSettings = writable('123');

export const activeComponent = writable('123');

export const componentList = [{ componentID: '123-1234-12345-xa2', name: 'Text', component: Text }];

export const activeBlock = writable();
export const activeProp = writable();
export const activeIndex = writable();

export const content = writable([
	{
		componentID: '123-1234-12345-xa2',
		blockID: '123',
		name: 'First Component',
		props: {
			text: "I'm # 1",
			class: 'bg-blue-50'
		}
	}
]);

if (browser) {
	if (localStorage.content) {
		content.update(() =>
			JSON.parse(localStorage.content).map((v) => ({
				...v,
				component: findComponent(v.componentID)
			}))
		);
	}
	content.subscribe((value) => (localStorage.content = JSON.stringify(value)));
}

function findComponent(id) {
	var index = componentList
		.map(function (x) {
			return x.componentID;
		})
		.indexOf(id);
	if (browser) {
		return componentList[index].component;
	}
}
