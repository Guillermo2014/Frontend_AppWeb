// auth.service.js

// Authentication Service

import axios from 'axios'

const API_URL = 'https://localhost:44327/user/authenticate';

class AuthService {
    login(user) {
        return axios.post(API_URL, {
            username: user.username,
            password: user.password
        })
            .then(response => {
                if (response.data.token){
                    localStorage.setItem('user', JSON.stringify(response.data));
                }
                return response.data;
            });
    }

    logout(){
        localStorage.removeItem('user');
    }

    register(user){
        return axios.post(API_URL+'sign-up',{
            username: user.username,
            email: user.email,
            password: user.password
        });
    }
}

export default new AuthService();