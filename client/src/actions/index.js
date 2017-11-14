import { FETCH_USER } from './types';
import { post, get } from './requestHelpers';

export const fetchUser = () => get({
    uri: '/api/current_user', 
    action: FETCH_USER
});

export const handleToken = token => post({
    uri: '/api/credits', 
    value: token, 
    action: FETCH_USER
});

export const initCredits = () => post({
    uri: '/api/credits/init', 
    action: FETCH_USER
});

export const submitSurvey = (values, history) => post({
    uri: '/api/surveys', 
    value: values, 
    action: FETCH_USER,
    then: () => history.push('/surveys')
});