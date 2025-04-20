<script setup lang="ts">



</script>

<template>
    <div class="TermField">
        <input type="checkbox">
        <p>Eu aceito os <strong>Termos de Uso</strong> e a <strong>Política de Privacidade</strong></p>
    </div>
</template>

<style scoped>
.TermField {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
}

.TermField input {
    width: 16px;
    height: 16px;
    appearance: none;
    -webkit-appearance: none;
    background-color: var(--color-light);
    border: 2px solid var(--color-gray);
    border-radius: 4px;
    cursor: pointer;
}

.TermField p strong {
    color: var(--color-dark);
    font-weight: 500;
    cursor: pointer;
}
</style>