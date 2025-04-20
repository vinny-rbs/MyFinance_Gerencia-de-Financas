<script setup type="ts">
import TheHeader from '../components/layout/TheHeader.vue';
import PrimaryButton from '@/components/actions/buttons/PrimaryButton.vue';
import RegisterForm from '@/components/layout/Cadastro/RegisterForm.vue';
import DefaultFooter from '@/components/layout/DefaultFooter.vue';
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
    <DefaultFooter />
</template>

<style></style>
