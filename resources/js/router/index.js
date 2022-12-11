import { createRouter, createWebHistory } from "vue-router";

import BlogsIndex from '../components/blogs/BlogsIndex'
import BlogsContact from '../components/blogs/BlogsContact'



const routes = [
    {
        path: '/home',
        name: 'blogs.index',
        component: BlogsIndex
    },
    {
        path: '/categories/index',
        name: 'blogs.contact',
        component: BlogsContact
    },
   
   
]

export default createRouter({
    history: createWebHistory(),
    routes
})
