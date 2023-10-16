import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";

export const useTagsStore = defineStore("tags", () => {
    const tags = ref([]);
    const loading = ref(false);
    const error = ref(null);

    const loadTags = async () => {
        loading.value = true;
        try {
            const response = await axios.get("/api/tags", {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            });
            console.log(response.data);
            tags.value = response.data;
        } catch (err) {
            error.value = err;
        } finally {
            loading.value = false;
        }
    };

    return {
        tags,
        loading,
        error,
        loadTags,
    };
});
