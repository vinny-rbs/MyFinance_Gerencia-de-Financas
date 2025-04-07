<script setup>

    import UserCard from '@/components/ui/UserCard.vue'

</script>

<template>
    <div class="user__content">
        <h1 class="user__title">O que nossos usuários dizem</h1>
        <UserCard description="Olá" nome="Vinicius" />
        <UserCard />
        <UserCard />
    </div>
</template>

<style>

    .user__content {
        min-height: 50vh;
        display: flex;
        justify-content: center;
        background-color: var(--color-light);
        margin: 4em;
        padding: 2em;
    }

</style>