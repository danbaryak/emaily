import React, { Component } from 'react';
import 'draft-js-mention-plugin/lib/plugin.css';
import SimpleMentionEditor from './editor/SimpleMentionEditor';
import { Link } from 'react-router-dom';

class Dashboard extends Component {

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
