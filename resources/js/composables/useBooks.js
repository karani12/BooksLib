import {useBooksStore} from '../store/books/index'
import {ref, onMounted, watchEffect} from "vue"

export default function useBooks() {
    const booksStore = useBooksStore()

    const books = ref([])

    const loading = ref(false)

    const error = ref(null)

    onMounted(booksStore.loadBooks)

    watchEffect(() => {
        books.value = booksStore.books
        loading.value = booksStore.loading
        error.value = booksStore.error
    })

    return {
        books,
        loading,
        error,
    }

    
}