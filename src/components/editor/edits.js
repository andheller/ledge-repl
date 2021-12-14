import { activeComponent, content } from '../../stores.js';
import { get } from 'svelte/store';
import Text from '../blocks/Text.svelte';

export function handleClick(section) {
	activeComponent.set(section);
}

export function handleKeyUp(e) {
	if (e.key == ' ') return spaceKey();
	if (e.altKey == true) return altKey(e.key);
	if (e.ctrlKey == false) return;
	if (e.key == 'Enter')
		//if ($activeBlock == undefined) return
		return ctrlEnter();
}

function spaceKey() {
	//check for contentEditable
	//check line for markup
	//window.getSelection().anchorNode.parentNode.isContentEditable;
}

function ctrlEnter() {
	let blockID = generateUUID();
	let newBlock = {
		component: Text,
		name: 'Text',
		componentID: '123-1234-12345-xa2',
		blockID: blockID,
		props: {
			text: '',
			class: 'bg-blue-50/50 text-blue-800 shadow-xl p-5 m-auto block max-w-xl backdrop-blur-md'
		}
	};
	const currentContent = get(content);
	currentContent.push(newBlock);
	content.set(currentContent);
	setTimeout(function () {
		document.querySelector(`[data-block-id="${blockID}"] div`).focus();
	}, 0);
}

function altKey(key) {
	//if (getSelection().anchorNode.parentNode.isContentEditable != true) return;
	console.log('test');
	if (key == 'Enter') insertDiv();
}
function insertDiv() {
	let selection = window.getSelection();
	let range = selection.getRangeAt(0);
	console.log(range);
	let node = document.createElement('div');
	node.classList.add('text');
	range.insertNode(node);
}

function generateUUID() {
	// Public Domain/MIT
	var d = new Date().getTime(); //Timestamp
	var d2 = (typeof performance !== 'undefined' && performance.now && performance.now() * 1000) || 0; //Time in microseconds since page-load or 0 if unsupported
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
		var r = Math.random() * 16; //random number between 0 and 16
		if (d > 0) {
			//Use timestamp until depleted
			r = (d + r) % 16 | 0;
			d = Math.floor(d / 16);
		} else {
			//Use microseconds since page-load if supported
			r = (d2 + r) % 16 | 0;
			d2 = Math.floor(d2 / 16);
		}
		return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
	});
}

function updateEditable() {
	if (typeof document !== 'undefined') {
		let contentEditables = document.querySelectorAll('[data-content="text"]');
		contentEditables.forEach((e) => {
			e.contentEditable = editable;
		});
	}
}
