<script setup lang="ts">
import DefaultField from '@/components/actions/fields/DefaultField.vue';
import TermField from '@/components/actions/fields/TermField.vue';
import PrimaryButton from '@/components/actions/buttons/PrimaryButton.vue';

</script>
<template>
    <div class="RegisterForm">
        <form class="form" action="">
            <div class="form__title">
                <h3>Criar Conta</h3>
                <p>Comece a controlar suas finanças hoje mesmo</p>
            </div>
            <div class="form__fields">
                <DefaultField icon="ri-user-fill" type="text" placeholder="Digite seu nome completo" />
                <DefaultField icon="ri-mail-fill" type="email" placeholder="Digite seu e-mail" />
                <DefaultField icon="ri-lock-fill" type="password" placeholder="Digite sua senha" />
                <DefaultField icon="ri-lock-fill" type="password" placeholder="Confirme sua senha" />
                <TermField />
                <PrimaryButton label="Registrar-se" />
            </div>
        </form>
    </div>

</template>

<style scoped>
.RegisterForm {
    height: 100%;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.form__title {
    display: flex;
    flex-direction: column;
    gap: 1em;
}

.form__fields {
    display: flex;
    flex-direction: column;
    padding-top: 2em;
    gap: 1em;
}
</style>