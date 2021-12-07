import { activeComponent } from '../../stores.js';

export let editingElement;

export function handleClick(section) {
	activeComponent.set(section);
}
