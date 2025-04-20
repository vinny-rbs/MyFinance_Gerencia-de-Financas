<script setup lang="ts">

defineProps<{
    icon: string,
    type: string,
    placeholder: string
}>()

</script>
<template>
    <div class="DefaultField">
        <i :class="icon"></i>
        <input :type="type" :placeholder="placeholder">
    </div>
</template>

<style scoped>
.DefaultField {
    height: 2.5em;
    width: 100%;
    border: 2px solid var(--color-gray);
    background-color: var(--color-light);
}

.DefaultField input {
    height: 100%;
    width: 90%;
    background-color: transparent;
    border: none;
}

i {
    padding: 0.5em;
}

.DefaultField input {
    padding: 1em 0.5em;
}
</style>