<script setup type="ts">
import TheHeader from '../components/layout/TheHeader.vue';
import PrimaryButton from '@/components/actions/buttons/PrimaryButton.vue'
import RegisterForm from '@/components/layout/Cadastro/RegisterForm.vue'
</script>

<template>
    <TheHeader>
        <template #botoes>
            <router-link to="/">
                <PrimaryButton label="Voltar" />
            </router-link>
        </template>
    </TheHeader>
    <RegisterForm />
</template>

<style></style>
