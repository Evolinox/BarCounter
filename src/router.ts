import { createRouter, createWebHistory } from 'vue-router';

const routes : any[] = [
    {
        path: '/',
        redirect: '/login',
    },
    {
        path: '/login',
        component: () => import('./views/Login.vue'),
    },
    {
        path: '/home',
        component: () => import('./views/Home.vue'),
    },
    {
        path: '/settings',
        component: () => import('./views/Settings.vue'),
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;