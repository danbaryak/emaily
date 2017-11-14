import React from 'react';

import {
	RichUtils,
	KeyBindingUtil,
	EditorState
} from 'draft-js';

export const linkStrategy = (contentBlock, callback, contentState) => {
	contentBlock.findEntityRanges(
		(character) => {
			const entityKey = character.getEntity();
			return (
				entityKey !== null &&
				contentState.getEntity(entityKey).getType() === 'LINK'
			);
		},
		callback
	);
};


export const Link = ({contentState, entityKey, children}) => {
	const { url } = contentState.getEntity(entityKey).getData();
	return (
		<a
			className="link"
			href={url}
			rel="noopener noreferrer"
			target="_blank"
			aria-label={url}
		>
			{children}
		</a>
	);
};

const addLinkPluginPlugin = {
	keyBindingFn(event, { getEditorState }) {
		// Don't do anything if no text is selected.
		// if (selection.isCollapsed()) {
		// 	return;
		// }
		if (KeyBindingUtil.hasCommandModifier(event) && event.which === 75) {
			return 'add-link'
		}
	},
	
	handleKeyCommand(command, editorState, { getEditorState, setEditorState}) {
		if (command !== 'add-link') {
			return 'not-handled';
		}
		let link = window.prompt('Paste the link -');
		const selection = editorState.getSelection();
		if (!link) {
			setEditorState(RichUtils.toggleLink(editorState, selection, null));
			return 'handled';
		}
		const content = editorState.getCurrentContent();
		const contentWithEntity = content.createEntity('LINK', 'MUTABLE', { url: link });
		const newEditorState = EditorState.push(editorState, contentWithEntity, 'create-entity');
		const entityKey = contentWithEntity.getLastCreatedEntityKey();
		setEditorState(RichUtils.toggleLink(newEditorState, selection, entityKey))
		return 'handled';
	},
	
	decorators: [{
		strategy: linkStrategy,
		component: Link,
	}],
};

export default addLinkPluginPlugin;