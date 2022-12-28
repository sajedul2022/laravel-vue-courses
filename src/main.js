import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import {createRouter, createWebHistory} from 'vue-router'

const Home = () => import('./views/Home.vue');
const About = () => import('./views/About.vue');

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});


createApp(App).use(router).mount('#app');
