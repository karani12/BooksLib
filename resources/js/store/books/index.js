import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";

export const useBooksStore = defineStore("books", () => {
    const books = ref([]);
    const loading = ref(false);
    const error = ref(null);

    const loadBooks = async () => {
        loading.value = true;
        try {
            const response = await axios.get("/api/books", {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            });
            console.log(response.data);
            books.value = response.data;
        } catch (err) {
            error.value = err;
        } finally {
            loading.value = false;
        }
    };

    return {
        books,
        loading,
        error,
        loadBooks,
    };
});
