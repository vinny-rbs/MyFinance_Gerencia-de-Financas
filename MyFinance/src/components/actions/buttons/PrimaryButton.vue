<script setup lang="ts">

    defineProps<{
        label: string
    }>()

</script>

<template>
    <button class="PrimaryButton--reffer">{{ label }}</button>
</template>

<style>

    .PrimaryButton--reffer {
        height: 3em;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1em;
        border: none;
        border-radius: 4px;
        background-color: var(--color-dark);
        color: #FFFFFF;
        cursor: pointer;
        font-weight: 400;
        font-size: .9rem;
        transition: 300ms all ease-in-out;

        &:hover {
            background-color: #282828;
        }
    }

</style>