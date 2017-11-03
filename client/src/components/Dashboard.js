import React, { Component } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import './Dashboard.css';

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {editorState: EditorState.createEmpty()};
        this.onChange = (editorState) => this.setState({editorState});
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
            </div>
            
            // <div className="Editor">
            //     <Editor
            //         editorState={this.state.editorState}
            //         onChange={this.onChange}
            //         handleKeyCommand={this.handleKeyCommand}
            //     />
            // </div>
        );
    }
}

export default Dashboard;
