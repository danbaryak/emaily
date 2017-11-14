import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
    paymentsClicked() {
        console.log('payments clicked');
    }
    render() {
        return (
            <div>
                <button
                    style={{ marginRight: '10px' }} 
                    className="btn" 
                    onClick={ () => this.props.initCredits() }
                >
                    Init Credits
                </button>
                <button 
                    style={{ marginRight: '10px' }}
                    className="btn" 
                    onClick={ () => this.props.handleToken({ credits: 5 }) }
                >
                    Add Credit
                </button>
            </div>
        );        
    }
}


export default connect(null, actions)(Payments);