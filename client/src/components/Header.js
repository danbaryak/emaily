import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
    renderContent() {
        switch (this.props.auth.currentUser) {
            case null:
                return;
            case false:
                return (
                    <li><a href="/auth/google">Login With Google</a></li>
                );
            default:
                return [ 
                    <li key="1"><Payments /></li>,
                    <li key="2" style={{ marginRight: '10px', marginLeft: '10px' }}>Credits: { this.props.auth.currentUser.credits }</li>,
                    <li key="3"><a href="/api/logout">Log Out</a></li>
                ];
        }
    }
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link
                        to={ this.props.auth.currentUser ? '/surveys' : '/' }
                        className="brand-logo"
                    >
                        Emaily
                    </Link>
                    <ul className="right">
                        <ul>
                            {this.renderContent()}
                        </ul>
                    </ul>
                </div>
            </nav>
        );
    }
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(Header);
