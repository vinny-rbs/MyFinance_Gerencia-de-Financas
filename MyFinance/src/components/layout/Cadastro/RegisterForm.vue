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
                <div class="form__login">
                    <p>Já possui conta?
                        <router-link to="/login">
                            <strong class="form__login--reffer">Faça login</strong>
                        </router-link>
                    </p>
                </div>
            </div>
        </form>
    </div>
</template>

<style scoped>
.RegisterForm {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0.5em;
}

.form {
    min-height: 82vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0em 2em;
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

.form__login {
    margin: 1em;
}

.form__login--reffer {
    color: var(--color-purple);
}
</style>