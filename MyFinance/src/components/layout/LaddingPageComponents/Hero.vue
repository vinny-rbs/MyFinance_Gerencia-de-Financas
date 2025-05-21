<script setup>

import PrimaryButton from '@/components/actions/buttons/PrimaryButton.vue';

</script>

<template>
    <div class="hero">
        <article class="hero__description">
            <h1>Assuma o controle da sua vida financeira</h1>
            <p>Gerencie seus <strong class="--reffer">gastos</strong>, defina metas, acompanhe seus rendimentos e
                visualize sua evolução <strong class="--reffer">financeira</strong> em um único lugar. Com a <strong
                    class="--reffer">MyFinance</strong>, você planeja melhor o presente e constrói um futuro mais
                seguro. Comece agora e transforme sua relação com o <strong class="--reffer">dinheiro</strong> —
                simples, rápido e inteligente.</p>
            <router-link to="/dashboard">
                <PrimaryButton label="Começar Gratuitamente" />
            </router-link>
        </article>
        <img class="image__card" src="../../../assets/imgs/UiDashboard.png" alt="">
    </div>
</template>

<style scoped>
.hero {
    max-width: 100vw;
    min-height: 50vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: clamp(1em, 5vw, 4em);
}

.hero__description,
.hero__image {
    height: 100%;
    width: 50%;
    padding: 1em;
}

.hero__description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 1.5em;
    padding: 1em;
}

.image__card {
    width: clamp(40em, 40vw, 48em);
    background-color: var(--color-light);
    padding: 2em;
    border-radius: 24px;
    box-shadow: 4px 4px 18px rgba(150, 150, 150, 0.15);
    transition: 700ms all ease-in-out;
}

.--reffer {
    color: var(--color-purple);
}

@media (max-width: 884px) and (max-height: 1280px) {
    .hero {
        flex-direction: column;
        gap: 2em;
    }

    .hero__description,
    .hero__image,
    .image__card {
        width: 100%;
    }
}
</style>