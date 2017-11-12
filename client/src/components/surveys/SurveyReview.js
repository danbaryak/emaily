import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import formFields from './formFields';
import { submitSurvey } from '../../actions';

const SurveyReview = ({ onCancel , formValues, submitSurvey, history }) => {
    return (
        <div>
            <h5>Please confirm</h5>
            {
                formFields.map(({name, label}) => (
                    <div key={name}>
                        <label>{label}</label>
                        <div>{formValues[name]}</div>
                    </div>
                ))
            }
            
            <button
                className="yellow darken-3 btn-flat white-text"
                onClick={onCancel}
            >
                Back
            </button>
            <button
                className="green btn-flat right white-text"
                onClick={ () => submitSurvey(formValues, history) }
            >
                Send Survey
                <i className="material-icons right">email</i>
            </button>
        </div>
    );
}

export default connect(
    ({form}) => ({ formValues: form.surveyForm.values }),
    { submitSurvey }
)(withRouter(SurveyReview));