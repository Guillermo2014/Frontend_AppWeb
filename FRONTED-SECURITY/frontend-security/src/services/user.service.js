// user.service.js

// User Service

import axios from 'axios'
import authHeader from "@/services/auth-header";

const API_URL = 'https://localhost:44327/user'

class UserService {
    getAll(){
        return axios.get(API_URL, {headers: authHeader()});
    }
}

export default new UserService();//es un middleware (intermediario)