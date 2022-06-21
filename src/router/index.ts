import Vue from 'vue';
import VueRouter from 'vue-router';
// import App from '@/App.vue';

Vue.use(VueRouter);

const routes: Array<any> = [
    {
        path: '/',
        alias: '/list',
        name: 'home',
        redirect: { name: 'list', params: { entityType: 'people' } },
        component: () => import(/* webpackChunkName: "details" */ '@/pages/AppList.vue'),
    },
    {
        path: '*',
        redirect: { name: 'home' },
    },
    {
        path: '/list/:entityType',
        name: 'list',
        component: () => import(/* webpackChunkName: "details" */ '@/pages/AppList.vue'),
    },
    {
        path: '/:entityType/:id',
        name: 'details',
        component: () => import(/* webpackChunkName: "details" */ '@/pages/Details.vue'),
    },
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;
