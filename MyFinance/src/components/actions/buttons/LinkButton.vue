<script setup lang="ts">

defineProps<{
    icon: string,
    text: string
}>();

</script>
<template>
    <div class="menu__link">
        <div class="link__icon">
            <i :class="icon"></i>
        </div>
        <div class="link__text">
            <p>{{ text }}</p>
        </div>
    </div>
</template>

<style scoped>
.menu__link {
    height: 3em;
    min-width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 1em;
    border-radius: 12px;
    cursor: pointer;
    transition: 300ms all ease-in-out;

    &:hover {
        background-color: var(--color-light-gray);
    }
}

.router-link-active {
    color: var(--color-purple);
}

.link__icon {
    height: 2em;
    width: 2em;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    color: var(--color-dark);

    border-radius: 50%;
    padding: 0.5em;
}

p {
    color: var(--color-dark);
}
</style>