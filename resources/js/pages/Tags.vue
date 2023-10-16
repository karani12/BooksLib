<template>
    <h1>Tags go here</h1>
    <pre>{{ tags }}</pre>
</template>

<script setup>
import useTags from '../composables/useTags';
const { tags, error, loading } = useTags()

</script>