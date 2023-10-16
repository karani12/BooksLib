<template>
    <h1>Books </h1>
    <pre>
    </pre>
    <p v-if="error">{{ error }}</p>
    <p v-else-if="books.length === 0">No books found</p>
    <div v-else>
        <table>
            <tr>
                <th>Book</th>
                <th>Author</th>
                <th>Tags</th>
            </tr>

            <div v-for="book in books" :key="book.id">
                <tr>
                    <td>
                        <h2 class="">{{ book.title }}</h2>
                    </td>
                    <td>
                        <h2 class=""> {{ book.author.name }}</h2>
                    </td>
                    <td>
                        <h2 class=""> {{ book.tags[0].name }}</h2>
                    </td>
                </tr>


            </div>
        </table>

    </div>
</template>

<script setup>

import useBooks from '../composables/useBooks';
const { books, error, loading } = useBooks()

</script>

<style>
.p {
    margin: 0 10px;
}

.tag {
    border: solid black 1px;
    margin: 3px 5px;
    width: fit-content;
}
tr, th, td{
    border: 1px solid black;
    padding: 20px;
    gap: 3;
}
</style>