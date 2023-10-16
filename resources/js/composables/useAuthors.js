import {useAuthorsStore } from '../store/books/author'
import {ref, onMounted, watchEffect} from "vue"

export default function useAuthors() {
    const authorStore = useAuthorsStore()

    const authors = ref([])

    const loading = ref(false)

    const error = ref(null)

    onMounted(authorStore.loadAuthors)

    watchEffect(() => {
       authors.value = authorStore.authors
        loading.value = authorStore.loading
        error.value = authorStore.error
    })

    return {
        authors,
        loading,
        error,
    }

    
}