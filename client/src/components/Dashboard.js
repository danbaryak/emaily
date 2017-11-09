import React, { Component } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import './Dashboard.css';
import 'draft-js-mention-plugin/lib/plugin.css';
import SimpleMentionEditor from './editor/SimpleMentionEditor';

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = { editorState: EditorState.createEmpty() };
        this.onChange = (editorState) => this.setState({ editorState });
        this.handleKeyCommand = this.handleKeyCommand.bind(this);
    }

    handleKeyCommand(command, editorState) {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            this.onChange(newState);
            return 'handled';
        }
        return 'not-handled';
    }

    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <span>This is some text</span>
                <SimpleMentionEditor />
                <SimpleMentionEditor />
            </div>
        );
    }
}

export default Dashboard;
