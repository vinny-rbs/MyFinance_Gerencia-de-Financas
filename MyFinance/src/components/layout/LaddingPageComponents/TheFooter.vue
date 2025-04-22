<script>

import DefaultModal from '@/components/ui/DefaultModal.vue';
import FlatField from '@/components/actions/fields/FlatField.vue';
import PrimaryButton from '@/components/actions/buttons/PrimaryButton.vue';

export default {
    components: { DefaultModal, FlatField, PrimaryButton },
    data() {
        return {
            modalAtivo: null
        }
    }
}

</script>

<template>

    <footer>
        <div class="footer__grid">
            <div class="footer__block">
                <img class="footer__image" src="../../../assets/imgs/PigFinance.png" alt="">
                <p>A plataforma completa para você controlar suas finanças com facilidade e eficiência.</p>
            </div>
            <div class="footer__block">
                <p class="footer__title--reffer">Links Uteis</p>
                <nav>
                    <ul class="footer__list">
                        <li>
                            <p @click="modalAtivo = 'sobre'">Sobre nós</p>
                            <teleport to="body">
                                <DefaultModal v-if="modalAtivo === 'sobre'" titulo="Sobre nós"
                                    @fechar="modalAtivo = null">
                                    <template #descricao>
                                        <div class="modal__info">
                                            <p>A MyFinance nasceu em 2025 com o propósito de transformar a forma como as
                                                pessoas lidam com seu dinheiro. Criada por dois empreendedores com
                                                experiência em startups e uma paixão em comum por tecnologia e
                                                organização financeira, a MyFinance surgiu da necessidade real de
                                                simplificar o controle financeiro pessoal e empresarial.</p>
                                            <p>Nosso sistema foi desenvolvido com foco em usabilidade, segurança e
                                                praticidade, permitindo que qualquer pessoa — independentemente do nível
                                                de conhecimento em finanças — possa organizar sua vida financeira de
                                                forma eficiente e intuitiva.</p>
                                            <p>Aqui na MyFinance, acreditamos que controle financeiro é liberdade, e por
                                                isso colocamos a tecnologia a serviço de quem quer tomar decisões mais
                                                conscientes e alcançar seus objetivos com tranquilidade.
                                                Seja para gerenciar suas despesas diárias, acompanhar metas ou tomar
                                                decisões com base em dados, a MyFinance está ao seu lado nessa jornada.
                                            </p>
                                        </div>
                                    </template>
                                </DefaultModal>
                            </teleport>
                        </li>
                        <li>
                            <p @click="modalAtivo = 'contato'">Contato</p>
                            <Teleport to="body">
                                <DefaultModal v-if="modalAtivo === 'contato'" titulo="Contatos"
                                    @fechar="modalAtivo = null">
                                    <template #descricao>
                                        <div class="modal__info">
                                            <FlatField tag="input" info="Nome" type="text"
                                                placeholder="Seu nome completo" />
                                            <FlatField tag="input" info="Email" type="email"
                                                placeholder="seu.email@examplo.com" />
                                            <FlatField tag="select" info="Assunto">
                                                <template #adicional>
                                                    <option value="" selected disabled>Selecione um assunto</option>
                                                    <option value="suporte">Suporte técnico</option>
                                                    <option value="vendas">Informações de vendas</option>
                                                    <option value="parceria">Proposta de parceria</option>
                                                    <option value="outro">Outro assunto</option>
                                                </template>
                                            </FlatField>
                                            <FlatField tag="textarea" info="Mensagem"
                                                placeholder="Digite sua mensagem aqui..." />
                                            <PrimaryButton label="Enviar" />
                                        </div>
                                    </template>
                                </DefaultModal>
                            </Teleport>
                        </li>
                        <li>
                            <p @click="modalAtivo = 'blog'">Blog</p>
                            <Teleport to="body">
                                <DefaultModal v-if="modalAtivo === 'blog'" titulo="Blog" @fechar="modalAtivo = null">
                                    <template #descricao>
                                        <div class="modal__info">
                                            <h3>Em Breve...</h3>
                                        </div>
                                    </template>
                                </DefaultModal>
                            </Teleport>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="footer__block">
                <p class="footer__title--reffer">Legal</p>
                <nav>
                    <ul class="footer__list">
                        <li>
                            <p @click="modalAtivo = 'termo'">Termos de Uso</p>
                            <teleport to="body">
                                <DefaultModal v-if="modalAtivo === 'termo'" titulo="Termos de Uso"
                                    @fechar="modalAtivo = null">
                                    <template #descricao>
                                        <div class="modal__info">
                                            <h3>1. Aceitação dos Termos</h3>
                                            <p>Ao acessar e usar os serviços da MyFinance, você concorda com estes
                                                Termos de
                                                Uso. Se você não concordar com qualquer parte destes termos, não poderá
                                                acessar ou usar nossos serviços.</p>
                                            <h3>2. Descrição dos Serviços</h3>
                                            <p>A MyFinance oferece ferramentas de gerenciamento financeiro pessoal e
                                                empresarial, incluindo controle de gastos, planejamento financeiro e
                                                relatórios detalhados.</p>
                                            <h3>3. Cadastro e Conta</h3>
                                            <p>Para utilizar nossos serviços, você precisa criar uma conta fornecendo
                                                informações precisas e completas. Você é responsável por manter a
                                                confidencialidade de sua senha e por todas as atividades realizadas em
                                                sua conta.</p>
                                            <h3>4. Uso dos Serviços</h3>
                                            <p>Você concorda em usar nossos serviços apenas para fins legais e de acordo
                                                com estes Termos. Você não deve usar nossos serviços para qualquer
                                                atividade fraudulenta ou ilegal.</p>
                                            <h3>5. Propriedade Intelectual</h3>
                                            <p>Todo o conteúdo disponibilizado em nossos serviços, incluindo textos,
                                                gráficos, logos, tipos, ícones e imagens, é de propriedade da
                                                MyFinance ou de
                                                seus licenciadores e está protegido por leis de direitos autorais.</p>
                                            <h3>6. Limitação de Responsabilidade</h3>
                                            <p>A MyFinance não será responsável por quaisquer danos indiretos,
                                                incidentais,
                                                especiais, consequenciais ou punitivos decorrentes do uso ou
                                                incapacidade de usar nossos serviços.</p>
                                            <h3>7. Alterações nos Termos</h3>
                                            <p>Reservamo-nos o direito de modificar estes Termos a qualquer momento. As
                                                alterações entrarão em vigor imediatamente após a publicação dos Termos
                                                atualizados em nosso site.</p>
                                            <h3>8. Lei Aplicável</h3>
                                            <p>Estes Termos serão regidos e interpretados de acordo com as leis do
                                                Brasil, independentemente de conflitos de princípios legais.</p>
                                        </div>
                                    </template>
                                </DefaultModal>
                            </teleport>
                        </li>
                        <li>
                            <p @click="modalAtivo = 'privacidade'">Privacidade</p>
                            <teleport to="body">
                                <DefaultModal v-if="modalAtivo === 'privacidade'" titulo="Política de Privacidade"
                                    @fechar="modalAtivo = null">
                                    <template #descricao>
                                        <div class="modal__info">
                                            <h3>1. Informações Coletadas</h3>
                                            <p>Coletamos informações pessoais como nome, endereço de e-mail, informações
                                                de contato e dados financeiros quando você se registra e usa nossos
                                                serviços. Também coletamos informações técnicas como endereço IP, tipo
                                                de navegador e dispositivo.</p>
                                            <h3>2. Uso das Informações</h3>
                                            <p>Utilizamos suas informações para fornecer, manter e melhorar nossos
                                                serviços, processar transações, enviar comunicações relacionadas ao
                                                serviço, e para fins de segurança e prevenção de fraudes.</p>
                                            <h3>3. Compartilhamento de Informações</h3>
                                            <p>Não vendemos suas informações pessoais a terceiros. Podemos compartilhar
                                                suas informações com prestadores de serviços que nos ajudam a operar
                                                nossos serviços, quando exigido por lei, ou com seu consentimento.</p>
                                            <h3>4. Segurança dos Dados</h3>
                                            <p>Implementamos medidas de segurança técnicas e organizacionais para
                                                proteger suas informações contra acesso não autorizado, alteração,
                                                divulgação ou destruição.</p>
                                            <h3>5. Seus Direitos</h3>
                                            <p>Você tem o direito de acessar, corrigir, atualizar ou solicitar a
                                                exclusão de suas informações pessoais. Você também pode se opor ao
                                                processamento de suas informações ou solicitar a portabilidade de seus
                                                dados.</p>
                                            <h3>6. Retenção de Dados</h3>
                                            <p>Mantemos suas informações pessoais pelo tempo necessário para fornecer
                                                nossos serviços e cumprir nossas obrigações legais. Quando não
                                                precisarmos mais de suas informações, excluiremos ou anonimizaremos de
                                                forma segura.</p>
                                            <h3>7. Alterações na Política</h3>
                                            <p>Podemos atualizar esta Política de Privacidade periodicamente.
                                                Notificaremos você sobre quaisquer alterações significativas publicando
                                                a nova Política de Privacidade em nosso site.</p>
                                            <h3>8. Contato</h3>
                                            <p>Se você tiver dúvidas sobre esta Política de Privacidade, entre em
                                                contato conosco pelo e-mail: privacidade@MyFinance.com.br</p>
                                        </div>
                                    </template>
                                </DefaultModal>
                            </teleport>
                        </li>
                        <li>
                            <p @click="modalAtivo = 'cookies'">Cookies</p>
                            <teleport to="body">
                                <DefaultModal v-if="modalAtivo === 'cookies'" titulo="Política de Cookies"
                                    @fechar="modalAtivo = null">
                                    <template #descricao>
                                        <div class="modal__info">
                                            <h3>1. O que são Cookies?</h3>
                                            <p>Cookies são pequenos arquivos de texto que são armazenados no seu
                                                dispositivo quando você visita nosso site. Eles são amplamente
                                                utilizados para fazer os sites funcionarem de maneira mais eficiente e
                                                fornecer informações aos proprietários do site.</p>
                                            <h3>2. Tipos de Cookies que Utilizamos</h3>
                                            <p><strong>Cookies Essenciais</strong>: Necessários para o funcionamento
                                                básico do site e para garantir a segurança.</p>
                                            <p><strong>Cookies de Desempenho</strong>: Coletam informações anônimas
                                                sobre como os visitantes usam nosso site.</p>
                                            <p><strong>Cookies de Funcionalidade</strong>: Permitem que o site lembre de
                                                escolhas que você faz para fornecer uma experiência mais personalizada.
                                            </p>
                                            <p><strong>Cookies de Publicidade</strong>: Usados para entregar anúncios
                                                mais relevantes com base em seus interesses.</p>
                                            <h3>3. Como Gerenciar Cookies</h3>
                                            <p>Você pode controlar e gerenciar cookies de várias maneiras. A maioria dos
                                                navegadores permite que você gerencie suas preferências de cookies
                                                através das configurações do navegador. Você pode:</p>
                                            <p>Excluir cookies existentes, Impedir que cookies sejam aceitos, Configurar
                                                notificações para quando cookies forem enviados.</p>
                                            <h3>4. Suas Escolhas</h3>
                                            <p>Ao continuar a usar nosso site sem alterar suas configurações de cookies,
                                                você concorda com nosso uso de cookies. No entanto, você pode alterar
                                                suas configurações a qualquer momento.</p>
                                        </div>
                                    </template>
                                </DefaultModal>
                            </teleport>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="footer__block">
                <p class="footer__title--reffer">Redes Sociais</p>
                <nav>
                    <ul class="footer__list">
                        <li>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <i class="ri-instagram-fill"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.whatsapp.com/?lang=pt_BR" target="_blank" rel="noopener noreferrer">
                                <i class="ri-whatsapp-fill"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/vinicius-rbs/" target="_blank"
                                rel="noopener noreferrer">
                                <i class="ri-linkedin-box-fill"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="footer__block">
                <p>© 2025 MyFinance. Todos os direitos reservados.</p>
            </div>
        </div>
    </footer>

</template>

<style scoped>
footer {
    background-color: var(--color-dark);
    padding: 0em clamp(2em, 1vw, 3em);
}

.footer__image {
    filter: invert(1);
}

li,
i {
    cursor: pointer;
    width: fit-content;
    padding: 0.5em;

    &:hover {
        filter: brightness(150%);
    }
}


i {
    font-size: 1.5rem;
    color: var(--color-gray);
}

.footer__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 1em;
}

.footer__block {
    display: flex;
    flex-direction: column;
    padding: 2em clamp(0em, 1vw, 2em);
    gap: 2em;
    grid-row: span 2 / span 2;

    & img {
        width: 2.5em;
    }
}

.footer__block:nth-child(5) {
    border-top: 2px solid rgb(55, 55, 55);
    justify-content: center;
    align-items: center;
    text-align: center;
    grid-column: span 4 / span 4;
    padding: 2em clamp(0em, 1vw, 3em);
}

.footer__list:has(i) {
    justify-content: start;
    flex-direction: row;
    gap: 1em;
}

.footer__title--reffer {
    color: var(--color-light);
    font-weight: 700;
    font-size: var(--size-paragraph);
}

.footer__list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: .5em;

    & i {
        background-color: var(--color-dark-purble);
        border-radius: 50%;
    }
}

.modal__info {
    display: flex;
    flex-direction: column;
    gap: 1em;

    & h3 {
        color: var(--color-gray);
        font-size: 1.25rem;
    }
}

@media (max-width: 884px) and (max-height: 1280px) {
    .footer__grid {
        display: flex;
        flex-direction: column;
    }
}
</style>