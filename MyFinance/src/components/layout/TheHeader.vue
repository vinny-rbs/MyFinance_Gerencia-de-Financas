<script setup>
    import PrimaryButton from '@/components/actions/buttons/PrimaryButton.vue'
    import DefaultButton from '@/components/actions/buttons/DefaultButton.vue'
</script>

<template>
    <header>
        <img class="header__logo" src="../../assets/logo.svg" alt="">
        <div class="header__control">
            <DefaultButton label="Entrar" />
            <PrimaryButton label="Registrar" />
        </div>
    </header>
</template>

<style>

    header {
        min-height: 8vh;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #fff;
        box-shadow: 1px 0px 18px rgba(150, 150, 150, 0.25);
        padding: 1em 2em;
    }

    .header__logo {
        max-width: 2.5em;
    }

    .header__control {
        display: flex;
        gap: 1em;
    }

</style>