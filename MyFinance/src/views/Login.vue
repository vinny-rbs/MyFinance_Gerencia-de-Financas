<script setup lang="ts">
import TheHeader from '@/components/layout/TheHeader.vue';
import PrimaryButton from '@/components/actions/buttons/PrimaryButton.vue';
import LoginForm from '@/components/layout/Login/LoginForm.vue';
import DefaultFooter from '@/components/layout/DefaultFooter.vue';
</script>
<template>
    <TheHeader>
        <template #botoes>
            <router-link to="/">
                <PrimaryButton label="Página Inicial" />
            </router-link>
        </template>
    </TheHeader>
    <LoginForm />
    <DefaultFooter />
</template>