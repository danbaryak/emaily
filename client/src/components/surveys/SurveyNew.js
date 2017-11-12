import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyReview from './SurveyReview';

/**
 * Shows the SurveyForm and SurveyFormReview.
 */
class SurveyNew extends Component {
    
    state = { showReview: false };

    render() {
        return (
            <div>
                { 
                    this.state.showReview ? 
                        <SurveyReview onCancel={() => this.setState({ showReview: false })}/> 
                        : 
                        <SurveyForm onFormSubmit={() => this.setState({ showReview: true })}/> 
                }
            </div>
        );
    }

}

export default reduxForm({
    form: 'surveyForm'
})(SurveyNew);