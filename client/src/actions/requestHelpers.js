import axios from 'axios';

export const post = ({uri, value, action, then}) => async dispatch => {
    const res = await axios.post(uri, value);
    then && then();
    dispatch({ type: action, payload: res.data });
}

export const get = ({uri, action}) => async dispatch => {
    const res = await axios.get(uri);
    dispatch({ type: action, payload: res.data });
}