import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import _ from 'lodash';

import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';

const FIELDS = [
    { label: 'Survey Title', name: 'title' },
    { label: 'Subject Line', name: 'subject' },
    { label: 'Email Body', name: 'body' },
    { label: 'Recipient List', name: 'emails' }
];

class SurveyForm extends Component {

    renderFields() {
        return _.map(FIELDS, (({label, name}) => (
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
        const { pristine } = this.props;

        return (
            <div>
                <form 
                    onSubmit={this.props.handleSubmit(values => console.log(values))}
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
   
    errors.emails = validateEmails(values.emails || '');

    _.each(FIELDS, ({ name })=> {
        if (! values[name]) {
            errors[name] = 'You must provide a value';
        }    
    });
    
    return errors;
}

export default reduxForm({
    validate,
    form: 'surveyForm'
})(SurveyForm);