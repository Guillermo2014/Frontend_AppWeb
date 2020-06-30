// router.js

// Routes definitions for Application

import Vue from 'vue';
import Router from 'vue-router';
import Home from "@/views/Home";
import Login from "@/views/Login";
import Register from "@/views/Register";
import Profile from "@/views/Profile";
import UsersList from "@/views/UsersList";

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        { path: '/', alias: '/home', name: 'home', component: Home},
        { path: '/login', name: 'login', component: Login},
        { path: '/register', name: 'register', component: Register},
        { path: '/profile', name: 'profile', component: Profile},
        { path: '/users', name: 'users', component: UsersList}
    ]
});

export default router;