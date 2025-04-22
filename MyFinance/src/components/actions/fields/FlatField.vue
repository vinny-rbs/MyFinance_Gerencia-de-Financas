<script setup lang="ts">

defineProps<{
    info: string,
    tag: string,
    type: string,
    placeholder: string
}>();

</script>
<template>
    <div class="FlatField">
        <label>{{ info }}</label>
        <component :is="tag" :type="type" :placeholder="placeholder">
            <slot name="adicional" />
        </component>
    </div>
</template>

<style scoped>
.FlatField {
    display: flex;
    flex-direction: column;
    gap: 0.5em;

    & label {
        color: var(--color-dark);
        font-size: 0.9rem;
    }

    & input,
    textarea,
    select {
        min-height: 3em;
        border-radius: 8px;
        border: 2px solid rgb(215, 220, 225);
        padding: 1em;
        font-size: 0.9rem;
        resize: vertical;
    }

    & textarea {
        min-height: 9em;
    }
}
</style>