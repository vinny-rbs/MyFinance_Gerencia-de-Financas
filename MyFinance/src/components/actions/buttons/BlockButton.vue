<script setup lang="ts">

defineProps<{
    icon: string
}>()

</script>

<template>

    <button>
        <i :class="icon"></i>
    </button>

</template>

<style scoped>
button {
    height: 3.5em;
    width: 3.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    background-color: var(--color-blue);
    color: var(--color-light);
    border: none;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);

    & i {
        font-size: 1.5rem;
        padding: 0em;
    }
}
</style>