<script setup lang="ts">

    defineProps<{
        image: string,
        description: string,
        name: string,
        occupation: string
    }>()

</script>

<template>
    <div class="UserComment">
        <img :src="image" alt="" class="UserComment__Image">
        <p>{{ description }}</p>
        <p class="UserComment--reffer">{{ name }}</p>
        <p>{{ occupation }}</p>
    </div>    
</template>

<style scoped>

    .UserComment {
        width: 25%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        gap: 1em;
    }

    .UserComment__Image {
        height: 6em;
        width: 6em;
        background-size: cover;
        border-radius: 50%;
        object-fit: cover;
    }

    .UserComment--reffer {
        font-weight: 700;
        color: var(--color-dark);
    }

</style>