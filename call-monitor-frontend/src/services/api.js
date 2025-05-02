import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/calls';

export const fetchAllCalls = () => axios.get(BASE_URL);
export const fetchActiveCalls = () => axios.get(`${BASE_URL}/active`);
export const saveCall = (callData) => axios.post(BASE_URL, callData);
