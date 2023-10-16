import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";

export const useAuthorsStore = defineStore("authors", () => {
    const authors = ref([]);
    const loading = ref(false);
    const error = ref(null);

    const loadAuthors = async () => {
        loading.value = true;
        try {
            const response = await axios.get("/api/authors", {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            });
            authors.value = response.data;
        } catch (err) {
            error.value = err;
        } finally {
            loading.value = false;
        }
    };

    return {
        authors,
        loading,
        error,
        loadAuthors,
    };
});
