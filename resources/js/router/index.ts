import { createRouter, createWebHistory } from "vue-router";

const Home = () => import(/* webpackChunkName: "Welcome" */ "../views/Home.vue")
const Articles = () => import(/* webpackChunkName: "Articles" */ "../views/Articles.vue")

const PathNotFound = () => import(/* webpackChunkName: "notFound" */ "../views/errors/404.vue")

export default createRouter({
    history: createWebHistory(),

    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/articles",
            name: "articles",
            component: Articles
        },
        {
            path: '/:pathMatch(.*)*',
            name: "not_found",
            component: PathNotFound
        },
    ],
});