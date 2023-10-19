import { createRouter, createWebHistory } from 'vue-router'
import Book from '../pages/Books.vue'
import Tags from '../pages/Tags.vue'
import Author from '../pages/Author.vue'
export const router = createRouter({
    history: createWebHistory(),

    routes: [
        {
            path: '/',
            component: Book
        },
        {
            path: '/tags',
            component: Tags
        },
        {
            path: '/author',
            component: Author
        },

    ]
})