<template>
    <div class="overflow-x-auto px-20">
        <table class="table">
            <thead>
                <tr>
                    <th>Tag</th>
                    <th>Books under Tag</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="tag in tags">
                    <th>{{ tag.name }}</th>
                    <th>
                        <div v-for="book in tag.books">
                            <p>{{ book.title }}</p>
                        </div>
                    </th>

                </tr>

            </tbody>
        </table>
    </div>
</template>
<script setup>
import useTags from '../composables/useTags';
const { tags, error, loading } = useTags()

</script>