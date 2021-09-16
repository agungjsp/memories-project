import axios from 'axios';

const API = axios.create({ baseURL: "https://memories-project-ggaq8kwhk1.herokuapp.com" });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
});

export const fetchPosts = () => API.get('/posts');
export const createPost = (payload) => API.post('/posts', payload);
export const updatePost = (id, payload) => API.patch(`${'/posts'}/${id}`, payload);
export const likePost = (id) => API.patch(`${'/posts'}/${id}/likePost`);
export const deletePost = (id) => API.delete(`${'/posts'}/${id}`);

export const signIn = (payload) => API.post('/user/signin', payload);
export const signUp = (payload) => API.post('/user/signup', payload);
