import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import _ from 'lodash';

import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class SurveyForm extends Component {

    renderFields() {
        return _.map(formFields, (({label, name}) => (
            <Field 
                key={name} 
                name={name} 
                label={label} 
                type="text" 
                component={SurveyField}
            />
        )));
    }
    
    render() {
        const { pristine, onFormSubmit } = this.props;

        return (
            <div>
                <form 
                    onSubmit={onFormSubmit}
                >
                    {this.renderFields()}
                    <Link to="/surveys" className="red btn-flat white-text">
                        Cancel 
                    </Link>
                    <button 
                        disabled={ pristine }
                        className="teal btn-flat right white-text" type="submit"
                    >
                        Next
                        <i className="material-icons right">done</i>
                    </button>
                </form>
            </div>
        );
    }
}

const validate = (values) => {
    const errors = {};
   
    errors.recipients = validateEmails(values.recipients || '');

    _.each(formFields, ({ name })=> {
        if (! values[name]) {
            errors[name] = 'You must provide a value';
        }    
    });
    
    return errors;
}

export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false 
})(SurveyForm);