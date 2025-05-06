<script setup lang="ts">



</script>

<template>
    <div class="callingCard">
        <div class="desc">
            <h3>Bem-vindo, Fulano!</h3>
            <p>Acompanhe suas finanças e mantenha seus gastos sob controle.</p>
        </div>
        <div class="image">
            <img src='../../../public/favicontest.png' alt="">
        </div>
    </div>
</template>

<style scoped>
.callingCard {
    width: 100%;
    max-width: 100vw;
    min-height: 10em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-light);
    padding: 2em;
    border-radius: 12px;
    box-shadow: 4px 4px 18px rgba(150, 150, 150, 0.15);
}

.desc {
    display: flex;
    flex-direction: column;
    gap: 1em;
}

img {
    height: 4em;
}
</style>