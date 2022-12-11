require('./bootstrap');

import { createApp } from "vue";
import router from './router'

import BlogsIndex from './components/blogs/BlogsIndex'


createApp({
    components: {
        BlogsIndex
    }
}).use(router).mount('#app')

