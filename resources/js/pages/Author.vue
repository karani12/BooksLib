<template>
    <h1>Authors</h1>
    <pre>{{ authors }}</pre>
</template>

<script setup>
import useTags from '../composables/useAuthors';
const { authors, error, loading } = useTags()

</script>