<script setup lang="ts">

defineProps<{
    icon: string,
    type: string,
    placeholder: string
}>()

</script>
<template>
    <div class="DefaultField">
        <div class="DefaultField__icon">
            <i :class="icon"></i>
        </div>
        <div class="DefaultField__input">
            <input :type="type" :placeholder="placeholder">
        </div>
    </div>
</template>

<style scoped>
.DefaultField {
    display: flex;
    justify-content: start;
    align-items: center;
    height: 2.5em;
    width: 100%;
    border: 2px solid var(--color-gray);
    background-color: var(--color-light);
}

.DefaultField__icon {
    min-width: 1em;
}

.DefaultField__input {
    width: 100%;
}

.DefaultField input {
    height: 100%;
    width: 100%;
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