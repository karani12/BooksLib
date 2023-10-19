import {useTagsStore} from '../store/books/tags'
import {ref, onMounted, watchEffect} from "vue"

export default function useTags() {
    const tagsStore = useTagsStore()

    const tags = ref([])

    const loading = ref(false)

    const error = ref(null)

    onMounted(tagsStore.loadTags)

    watchEffect(() => {
        tags.value = tagsStore.tags
        loading.value = tagsStore.loading
        error.value = tagsStore.error
    })

    return {
        tags,  
        loading,
        error,
    }
    
}