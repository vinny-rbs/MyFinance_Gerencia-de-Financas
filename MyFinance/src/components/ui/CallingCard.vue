<script setup lang="ts">



</script>

<template>
    <div class="callingCard">
        <div class="desc">
            <h3>Bem-vindo, Fulano!</h3>
            <p>Acompanhe suas finanças e mantenha seus gastos sob controle.</p>
        </div>
        <div class="cash">
            <h3>2450,20</h3>
            <p>Saldo Atual</p>
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
    gap: 2em;
    border-radius: 12px;
    box-shadow: 4px 4px 18px rgba(150, 150, 150, 0.15);
}

.desc {
    display: flex;
    flex-direction: column;
    gap: 1em;
}

img {
    width: 10em;
    border-radius: 8px;
    box-shadow: 4px 4px 18px rgba(150, 150, 150, 0.15);
}

.cash h3 {
    color: var(--color-blue);
}

@media (max-width: 500px) and (max-height: 1000px) {
    .callingCard {
        text-align: center;
        flex-direction: column;
    }
}
</style>