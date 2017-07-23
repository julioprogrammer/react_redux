import axios from 'axios';

const URL = 'http://localhost:3003/api/todos';

const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
});

const search = () => {
    const request = axios.get(`${URL}?sort=-createdAt`);
    return {
        type: 'TODO_SEARCHED',
        payload: request
    }
}

const add = description => {
    const request = axios.post(URL, { description });
    return {
        type: 'TODO_ADDED',
        payload: request
    }
}

export { add, changeDescription, search };