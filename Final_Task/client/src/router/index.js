import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
    }, {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Login.vue'),
        meta: {requiresGuest: true}
    }, {
        path: '/signup',
        name: 'SignUp',
        component: () => import('../views/SignUp.vue'),
        meta: {requiresGuest: true}
    }, {
        path: '/profile',
        name: 'Profile',
        component: () => import('../views/Profile.vue'),
        meta: {requiresAuth: true}
    },
    {
        path: '/companies',
        name: 'Companies',
        component: () => import('../views/Companies.vue')
    },
    {
        path: '/company',
        name: 'Company',
        component: () => import('../views/Company.vue')
    },
    {
        path: '/add-company',
        name: 'AddCompany',
        component: () => import('../views/AddCompany.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(records => records.meta.requiresAuth)) {
        if (!store.getters.isLoggedIn) {
            //redirect to login page
            next('/login');
        } else {
            next();
        }
    } else if (to.matched.some(record => record.meta.requiresGuest)) {
        if (store.getters.isLoggedIn) {
            //redirect to profile page
            next('/profile');
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router
