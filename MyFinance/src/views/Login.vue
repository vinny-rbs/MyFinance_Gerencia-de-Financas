<script setup lang="ts">
import TheHeader from '@/components/layout/TheHeader.vue';
import PrimaryButton from '@/components/actions/buttons/PrimaryButton.vue';
import LoginForm from '@/components/layout/Login/LoginForm.vue';
import DefaultFooter from '@/components/layout/DefaultFooter.vue';
import DefaultModal from '@/components/ui/DefaultModal.vue';
import { ref } from 'vue';

const modalAtivo = ref<string | null>(null);
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
    <DefaultFooter>
        <template #info>
            <p><strong @click="modalAtivo = 'ajuda'" class="info--reffer">Precisa de ajuda?</strong></p>
            <teleport to="body">
                <DefaultModal v-if="modalAtivo === 'ajuda'" titulo="Fazer Login" @fechar="modalAtivo = null">
                    <template #descricao>
                        <div class="modal__info">
                            <h3>1. Digite seu e-mail</h3>
                            <p><strong>O que fazer</strong>: Digite seu e-mail completo (exemplo: maria@gmail.com).</p>
                            <p><strong>Dica</strong>: Use o mesmo e-mail que você usou ao criar a conta.</p>
                            <h3>2. Digite sua senha</h3>
                            <p><strong>O que fazer</strong>: Use a mesma senha que você usou ao criar a conta.
                                (exemplo:Senha123!).</p>
                            <p><strong>Dica</strong>: Use letras maiúsculas, minúsculas, números e símbolos
                            </p>
                            <p><strong>Importante</strong>: Nunca compartilhe sua senha com ninguém.</p>
                            <h3>3. Esqueceu sua senha?</h3>
                            <p><strong>Objetivo</strong>: Clique aqui se você não lembra sua senha.</p>
                            <p><strong>O que vai acontecer</strong>: Você será redirecionado para um processo de
                                recuperação (como redefinir sua senha por
                                e-mail).</p>
                            <h3>4. Botão “Entrar”</h3>
                            <p><strong>O que fazer</strong>: Clique neste botão para fazer login.</p>
                            <p><strong>Dica</strong>: Certifique-se de que o e-mail e a senha estão corretos antes de
                                clicar.</p>
                            <h3>5. Criar conta</h3>
                            <p><strong>O que fazer</strong>: Se você ainda não tem uma conta, clique em “Criar conta”.
                            </p>
                            <p><strong>O que vai acontecer</strong>: Você será levado para a tela de cadastro para criar
                                seu acesso.</p>
                        </div>
                    </template>
                </DefaultModal>
            </teleport>
        </template>
    </DefaultFooter>
</template>

<style scoped>
.modal__info {
    display: flex;
    flex-direction: column;
    gap: 1em;

    & h3 {
        color: var(--color-gray);
        font-size: 1.25rem;
    }
}

.info--reffer {
    font-weight: 500;
    color: var(--color-dark);
    cursor: pointer;
}
</style>