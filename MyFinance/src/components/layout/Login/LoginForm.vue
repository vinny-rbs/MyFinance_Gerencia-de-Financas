<script setup lang="ts">
import { reactive, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useAuth } from '@/composables/useAuth'
import DefaultField from '@/components/actions/fields/DefaultField.vue';
import PrimaryButton from '@/components/actions/buttons/PrimaryButton.vue';
import DefaultNotification from '@/components/ui/DefaultNotification.vue';

const { setUser } = useAuth();

const router = useRouter();

const formData = reactive({
    email: '',
    password: ''
});

watch(() => formData.email, (novoValor) => {
    formData.email = novoValor.toLowerCase();
});

async function login() {
    if (!formData.email.trim() || !formData.password.trim()) {
        console.log("Por favor, preencha todos os campos.");
        window.dispatchEvent(new CustomEvent('notify', {
            detail: 'Por favor, preencha todos os campos.'
        }))
        return;
    }

    console.log("Dados enviados:", formData);

    try {
        const resposta = await fetch('http://localhost:8081/api/v1/users/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (!resposta.ok) throw new Error('Credenciais inválidas.');

        const resultado = await resposta.json();

        // Salva o usuário no estado global e localStorage
        setUser({
            id: resultado.user.id,
            nome: resultado.user.name,
            email: resultado.user.email
        });

        console.log('Login bem-sucedido:', resultado.user);

        router.push('/');
    } catch (erro) {
        console.error('Erro ao fazer login:', erro);
        window.dispatchEvent(new CustomEvent('notify', {
            detail: 'Erro ao fazer login. Verifique se está correto o email ou a senha.'
        }))
    }
}
</script>

<template>
    <div class="LoginForm">
        <form class="form" @submit.prevent="login">
            <div class="form__title">
                <h3>Login</h3>
                <p>Acesse sua conta para gerenciar suas finanças</p>
            </div>
            <div class="form__fields">
                <DefaultField v-model="formData.email" icon="ri-mail-fill" type="email"
                    placeholder="Digite seu e-mail" />
                <DefaultField v-model="formData.password" icon="ri-lock-fill" type="password"
                    placeholder="Digite sua senha" />
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
        <DefaultNotification />
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
