import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SearchView from '../views/SearchView.vue'
import PropertyDetailsView from '../views/PropertyDetails.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/search',
        name: 'Search',
        component: SearchView
    },
    {
        path: '/property/:id',
        name: 'PropertyDetails',
        component: PropertyDetailsView,
        props: true
    },

    {
        path: '/contact',
        name: 'Contact',
        component: () => import('@/views/ContactView.vue')
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        // Siempre comenzar desde arriba al navegar
        return { top: 0 }
    }
})

export default router
