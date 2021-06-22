import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });


API.interceptors.request.use((req) => {
    if(localStorage.getItem('token')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('token'))}`
    }
})

export const getNotes = () => API.get('/notes');
export const createNote = (formData) => API.post('/notes', formData);
