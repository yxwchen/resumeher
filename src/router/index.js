import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
// 預留其他頁面：Blog、Contact 可之後擴充

const routes = [
    { path: '/', name: 'Home', component: Index },
    // { path: '/blog', component: () => import('@/views/Blog.vue') },
    // { path: '/contact', component: () => import ('@/views/Contact.vue') }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router