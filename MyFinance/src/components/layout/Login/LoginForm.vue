<script setup lang="ts">
import DefaultField from '@/components/actions/fields/DefaultField.vue';
import PrimaryButton from '@/components/actions/buttons/PrimaryButton.vue';
</script>
<template>
    <div class="LoginForm">
        <form class="form" action="">
            <div class="form__title">
                <h3>Login</h3>
                <p>Acesse sua conta para gerenciar suas finanças</p>
            </div>
            <div class="form__fields">
                <DefaultField icon="ri-mail-fill" type="email" placeholder="Digite seu e-mail" />
                <DefaultField icon="ri-lock-fill" type="password" placeholder="Digite sua senha" />
                <div class="forgot_password">
                    <p><strong class="forgot_password--reffer">Esqueceu sua senha?</strong></p>
                </div>
                <PrimaryButton label="Entrar" />
                <div class="form__login">
                    <p>Não tem uma conta?
                        <router-link to="/cadastro">
                            <strong class="form__login--reffer">Criar conta</strong>
                        </router-link>
                    </p>
                </div>
            </div>
        </form>
    </div>
</template>

<style scoped>
.LoginForm {
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
    padding: 1em 2em;
}

.form__title {
    display: flex;
    flex-direction: column;
    gap: 1em;
}

.form__fields {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 2em;
    gap: 1em;
}

.forgot_password {
    text-align: start;
}

.forgot_password strong {
    font-weight: 500;
    font-size: 0.85rem;
    color: var(--color-dark);
}

.form__login {
    margin: 1em;
}

.form__login--reffer {
    color: var(--color-purple);
}
</style>

<style>
input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px var(--color-light) inset !important;
    transition: background-color 9999s ease-in-out 0s;
}
</style>