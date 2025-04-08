<script setup lang="ts">

    defineProps<{
        icon: string,
        name: string,
        description: string
    }>()

</script>

<template>
    <div class="BenefitsCard">
        <i :class="icon"></i>
        <p class="BenefitsCard--reffer">{{ name }}</p>
        <p>{{ description }}</p>
    </div>    
</template>

<style>

    i {
        height: 1.5em;
        width: 1.5em;
        scale: 1.5;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--color-light-gray);
        border-radius: 50%;
        padding: 1em;
    }

    .BenefitsCard {
        width: 100%;
        display: flex;
        flex-direction: column;
        height: 15em;
        background-color: var(--color-light);
        border-radius: 24px;
        padding: 2em;
        gap: 1em;
        box-shadow: 4px 4px 18px rgba(150, 150, 150, 0.15);
    }

    .BenefitsCard--reffer {
        font-weight: 700;
        color: var(--color-dark);
        font-size: 1.25rem;
    }

</style>