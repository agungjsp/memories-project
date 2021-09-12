import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/' });

export const fetchPosts = () => API.get('/posts');
export const createPost = (payload) => API.post('/posts', payload);
export const updatePost = (id, payload) => API.patch(`${'/posts'}/${id}`, payload);
export const likePost = (id) => API.patch(`${'/posts'}/${id}/likePost`);
export const deletePost = (id) => API.delete(`${'/posts'}/${id}`);

export const signIn = (payload) => API.post('/user/signin', payload);
export const signUp = (payload) => API.post('/user/signup', payload);
