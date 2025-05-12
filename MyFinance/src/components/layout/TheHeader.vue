<script setup>
</script>

<template>
    <header>
        <RouterLink to="/">
            <img class="header__logo" src="../../assets/imgs/PigFinance.png" alt="">
        </RouterLink>
        <div class="header__control">
            <slot name="botoes" />
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
    max-width: 3em;
    width: clamp(2.5em, 10vw, 3em);
}

.header__control {
    display: flex;
    gap: 1em;
}
</style>