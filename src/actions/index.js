import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST ='CREATE_POST';
const BASE_URL = 'http://reduxblog.herokuapp.com/api'
const API_KEY = '?key=PAPERCLIP123';

export function fetchPosts() {
  const request = axios.get(`${BASE_URL}/posts${API_KEY}`)
  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(values) {
  const request = axios.post(`${BASE_URL}/posts/${API_KEY}`, values);
  return { 
    type: CREATE_POST,
    payload: request
  };
}