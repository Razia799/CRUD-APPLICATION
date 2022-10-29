import axios from 'axios';

const API_URL = 'http://localhost:3002';



export const addUser = async (data) => {
   return await axios.post(API_URL , data);
}


export const getUsers = async () => {
   return await axios.get(API_URL);
}


export const getUser = async (data) => {
    return await axios.get(`${API_URL}/${data}`);
   }

export const editUser = async (data , id) => {
    return await axios.put(`${API_URL}/${id}` , data);
} 


export const deleteUser = async (id) => {
    return await axios.delete(`${API_URL}/${id}`);
}