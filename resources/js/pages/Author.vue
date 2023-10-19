<template>

    <div class="overflow-x-auto px-20">
        <table class="table">
            <thead>
                <tr>
                    <th>Author</th>
                    <th>Books written</th>
                </tr>
            </thead>
            <tbody>
                <!-- row 1 -->
                <tr v-for="author in authors">
                    <th>{{ author.name }}</th>
                    <th>
                        <div v-for="book in author.books">
                            <p>{{ book.title }}</p>
                        </div>
                    </th>
                   
                </tr>
          
            </tbody>
        </table>
    </div>
</template>

<script setup>
import useTags from '../composables/useAuthors';
const { authors, error, loading } = useTags()

</script>