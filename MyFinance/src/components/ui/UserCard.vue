<script setup lang="ts">

    defineProps<{
        description: string,
        nome: sting,
        profissao: string
    }>()

</script>

<template>
    <div class="UserComment">
        <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" class="UserComment__Image">
        <p>{{ description }}</p>
        <p>{{ nome }}</p>
        <p>{{ profissao }}</p>
    </div>    
</template>

<style>

    .UserComment__Image {
        height: 5em;
        width: 5em;
        background-size: cover;
    }

</style>