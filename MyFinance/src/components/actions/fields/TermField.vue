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
    text-align: start;
    gap: 1em;
}

.TermField input {
    min-width: 16px;
    min-height: 16px;
    appearance: none;
    -webkit-appearance: none;
    background-color: var(--color-light);
    border: 2px solid var(--color-gray);
    border-radius: 4px;
    cursor: pointer;
    position: relative;
    transition: 200ms all ease-in-out;
}

.TermField input:checked {
    background-color: var(--color-primary);
    border-color: var(--color-primary);
}

.TermField input:checked::after {
    height: 10px;
    content: "⨯";
    color: var(--color-dark);
    font-size: 1rem;
    position: absolute;
    top: -4px;
    left: 0.5px;
}

.TermField p strong {
    color: var(--color-dark);
    font-weight: 500;
    cursor: pointer;
}
</style>