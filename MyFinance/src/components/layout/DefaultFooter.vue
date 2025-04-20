<script setup lang="ts">
</script>

<template>

    <footer class="DefaultFooter">
        <p>© 2025 MyFinance. Todos os direitos reservados.</p>
        <p><strong>Precisa de ajuda?</strong></p>
    </footer>

</template>

<style scoped>
.DefaultFooter {
    height: 8vh;
    max-width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2em;
    gap: 2em;
    box-shadow: 1px 0px 18px rgba(150, 150, 150, 0.25);
}

strong {
    font-weight: 500;
    color: var(--color-dark);
    cursor: pointer;
}
</style>