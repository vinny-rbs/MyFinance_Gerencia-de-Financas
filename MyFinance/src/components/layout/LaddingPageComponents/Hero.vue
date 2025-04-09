<script setup>

    import PrimaryButton from '@/components/actions/buttons/PrimaryButton.vue'

</script>

<template>
    <div class="hero">
        <article class="hero__description">
            <h1>Assuma o controle da sua vida financeira</h1>
            <p>Gerencie seus <strong class="--reffer">gastos</strong>, defina metas, acompanhe seus rendimentos e visualize sua evolução <strong class="--reffer">financeira</strong> em um único lugar. Com a <strong class="--reffer">MyFinance</strong>, você planeja melhor o presente e constrói um futuro mais seguro. Comece agora e transforme sua relação com o <strong class="--reffer">dinheiro</strong> — simples, rápido e inteligente.</p>
            <PrimaryButton label="Começar Gratuitamente" />
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
        padding: 3em;
    }

    .hero__description,.hero__image {
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
    }
    
    .image__card {
        width: 48em;
        background-color: var(--color-light);
        padding: 2em;
        border-radius: 24px;
        box-shadow: 4px 4px 18px rgba(150, 150, 150, 0.15);
        transition: 700ms all ease-in-out;
        position: relative;

        &:hover {
            transform: scale(1.05) translate(-50%, 10%);
            z-index: 3;


        }

        &::before {
                content: "";
                position: absolute;
                inset: 0;
                background-color: var(--color-dark);
                opacity: 0;
                z-index: 0;
                transition: opacity 0.7s ease-in-out;
        }
    }

    .--reffer {
        color: var(--color-purple);
    }

</style>