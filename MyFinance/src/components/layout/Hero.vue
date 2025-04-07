<script setup>

    import PrimaryButton from '@/components/actions/buttons/PrimaryButton.vue'

</script>

<template>
    <div class="hero">
        <article class="hero__description">
            <h1>Controle suas finanças de forma inteligente</h1>
            <p>Organize, planeje e acompanhe suas finanças pessoais em um só lugar, Comece agora mesmo e transforme sua vida financeira.</p>
            <PrimaryButton label="Começar Gratuitamente" />
        </article>
        <aside>

        </aside class="hero__image">
            <img src="../../assets/imgs/UiDashboard.png" alt="">
    </div>
</template>

<style scoped>

    .hero {
        max-width: 100vw;
        min-height: 75vh;
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
        width: auto;
        background-color: var(--color-light);
        padding: 2em;
        border-radius: 12px;
        box-shadow: 4px 4px 18px rgba(150, 150, 150, 0.15);
    }

</style>