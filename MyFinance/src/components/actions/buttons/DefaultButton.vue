<script setup lang="ts">

    defineProps<{
        label: string
    }>()

</script>

<template>
    <button class="DefaultButton">{{ label }}</button>
</template>

<style>

    .DefaultButton {
        height: 3em;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1em;
        border: none;
        border-radius: 4px;
        background-color: transparent;
        color: #252525;
        cursor: pointer;
        font-weight: 400;
        font-size: .9rem;
    }

</style>