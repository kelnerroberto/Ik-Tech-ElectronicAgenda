import api from "./api";

export const GET_ALL_COMMITMENTS = () => api.get('/commitments/all');

export const POST_NEW_COMMITMENT = (body) => api.post('/commitments/add', body);
