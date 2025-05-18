# 💻 PigFinance - Interface Web para Controle Financeiro com Vue.js

Sistema de controle de finanças pessoais. Ele permite visualizar, adicionar, editar e remover transações financeiras de forma intuitiva e responsiva, utilizando uma API REST para persistência dos dados.

---

## 🚀 Tecnologias Utilizadas

- **Vue 3** — framework  modernos para aplicações frontend.
- **TypeScript** — Linguagem de programação poderosa para interações do usuário.
- **Css** — Linguagem de estilização para interfaces mais agradáveis.
- **Html** — Linguagem de marcação para definir caixas de conteúdos e elementos nas paginas web.

---

## 📸 Capturas de Tela

Em breve — envie prints da interface para exibir aqui as telas principais da aplicação.

---

## ✨ Demonstração/Deploy

Dá uma olhada no projeto!
https://pigfinance.vercel.app

---

## 📂 Estrutura do Projeto

````
financontrol-ui/
├── public/ # Arquivos estáticos
├── src/
│ ├── assets/ # Imagens, ícones e Css base
│ ├── components/ # Componentes reutilizáveis da UI
│ ├── router/ # Rotas da aplicação (Vue Router)
│ ├── view/ # Páginas principais da aplicação
│ ├── diretivas/ # diretivas vue, comportamentos que um elemento deve ter.
│ ├── App.vue # Componente raiz
│ └── main.ts # Ponto de entrada da aplicação
├── .gitignore # Arquivos ignorados pelo Git
├── package.json # Metadados e dependências do projeto
└── README.md # Documentação do projeto
````


---

## 🔌 Integração com a API

A interface consome os dados da API [Finance API (Go)](https://github.com/mth-ribeiro-dev/finance-api-go/tree/master), que fornece os endpoints REST para:

- Listar transações
- Adicionar e excluir receitas/despesas
- Calcular saldo total
- (Futuramente) autenticação de usuários

A base da API está configurada em:  
`src/cmd/server/main.go`

---

## ▶️ Como Executar o Projeto

```bash
# Clone o repositório
git clone https://github.com/vinny-rbs/MyFinance_Gerencia-de-Financas.git

# Acesse a pasta do projeto
cd Gerencia-de-Finan-as---MyFinance

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
A aplicação estará disponível em http://localhost:5173.
```
## 📱 Funcionalidades

✅ Cadastro de receitas e despesas

✅ Visualização de saldo e lista de transações

✅ Filtros por data e tipo de transação

✅ Layout responsivo (mobile e desktop)

🔜 Gráficos interativos com Chart.js (em breve)

🔜 Exportação de relatórios em PDF (em breve)

## 🧱 Boas Práticas Adotadas

Componentização com foco em reutilização e manutenção

Organização modular em pastas claras e separadas

Consumo de API externas

Responsividade e acessibilidade básica aplicada

## ✍️ Autores

Desenvolvido por:

Matheus Ribeiro – [mth-ribeiro-dev](https://github.com/mth-ribeiro-dev)

Vinicius Ribeiro – [vinny-rbs](https://github.com/vinny-rbs)

Contato: matheus.junio159@gmail.com | viniciusjunioribeiro05@gmail.com
