import React, { Component } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import 'draft-js-mention-plugin/lib/plugin.css';
import SimpleMentionEditor from './editor/SimpleMentionEditor';
import { Link } from 'react-router-dom';

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
                <SimpleMentionEditor />
                <div className="fixed-action-btn">
                    <Link to="/surveys/new" className="btn-floating btn-large red">
                        <i className="material-icons">add</i>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Dashboard;
