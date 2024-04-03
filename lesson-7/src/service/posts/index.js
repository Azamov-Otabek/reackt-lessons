"use strict";
import {req} from '../axios';


export const Posts = {
    GET:async ()=> req.get('/users'),
    Post: async (data)=> req.post('/users', data),
    Put: async (id, data)=> req.put(`/users/${id}`, data),
    Delete: async (id)=> req.delete(`/users/${id}`),
}