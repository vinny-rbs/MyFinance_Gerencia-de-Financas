<script setup lang="ts">

import { defineProps, defineEmits } from 'vue'

const props = defineProps<{
    modelValue: string | number,
    info: string,
    tag: string,
    type: string,
    placeholder: string
}>();

const emit = defineEmits(['update:modelValue'])

function atualizarValor(event: Event) {
    const target = event.target as HTMLInputElement
    const valor = props.type === 'number' ? Number(target.value) : target.value
    emit('update:modelValue', valor)
}

</script>
<template>
    <div class="FlatField">
        <label>{{ info }}</label>
        <component :is="tag" :type="type" :placeholder="placeholder" :value="modelValue" @input="atualizarValor">
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

    & input[type="radio"] {
        min-height: 1.5em;
    }

    & textarea {
        min-height: 9em;
    }

    & input[type="number"] {
        -moz-appearance: textfield;
    }

    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
}
</style>