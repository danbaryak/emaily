import React, { Component } from 'react';
import { EditorState } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import createMentionPlugin, { defaultSuggestionsFilter } from 'draft-js-mention-plugin';
import createLinkifyPlugin from 'draft-js-linkify-plugin';
import editorStyles from './editorStyles.css';
import mentions from './mentions';

export default class SimpleMentionEditor extends Component {

	constructor(props) {
		super(props);
		this.mentionPlugin = createMentionPlugin();
		this.linkifyPlugin = createLinkifyPlugin();
	}

	state = {
		editorState: EditorState.createEmpty(),
		suggestions: mentions,
	};

	onChange = (editorState) => {
		this.setState({
			editorState,
		});
	};

	onSearchChange = ({ value }) => {
		this.setState({
			suggestions: defaultSuggestionsFilter(value, mentions),
		});
	};

	onAddMention = () => {
		// get the mention object selected
	}

	focus = () => {
		this.editor.focus();
	};

	render() {
		const { MentionSuggestions } = this.mentionPlugin;
		const plugins = [ this.mentionPlugin, this.linkifyPlugin ];

		return (
			<div className="editor" onClick={this.focus}>
				<div style={{ margin: '10px 0 10px 0' }}>
					<button className="btn">Entity</button>
				</div>
				<Editor
					editorState={this.state.editorState}
					onChange={this.onChange}
					plugins={plugins}
					ref={(element) => { this.editor = element; }}
				/>
				<MentionSuggestions
					onSearchChange={this.onSearchChange}
					suggestions={this.state.suggestions}
					onAddMention={this.onAddMention}
				/>
				<span>{this.state.editorState.getCurrentContent().text}</span>
			</div>
		);
	}
}