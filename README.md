# Financial System

Este é um sistema financeiro desenvolvido com **React** e **TypeScript**, utilizando **Vite** para um ambiente de desenvolvimento rápido e eficiente. O projeto inclui um servidor local simulado com **JSON Server** para facilitar testes e desenvolvimento.

## 📋 Funcionalidades

- Cadastro de transações financeiras
- Listagem e filtragem de transações
- Cálculo automático de balanço financeiro
- Interface responsiva e intuitiva
- Backend local para testes com **JSON Server**

## 🛠️ Tecnologias Utilizadas

- **React** - Biblioteca JavaScript para construção de interfaces dinâmicas e reativas.
- **Vite** - Ferramenta de build moderna e rápida para projetos front-end.
- **TypeScript** - Para tipagem estática e segurança do código.
- **Styled Components** - Biblioteca para estilização de componentes no React, permitindo CSS-in-JS.
- **JSON Server** - Simula um backend RESTful para testes e desenvolvimento sem necessidade de um servidor real.
- **ESLint e Prettier** - Ferramentas para garantir padronização e qualidade do código.

## 📚 Bibliotecas Utilizadas

- **Axios** - Utilizado para realizar requisições HTTP de forma simples e eficiente.
- **React Hook Form** - Facilita a manipulação e validação de formulários no React.
- **Zod** - Biblioteca para validação de dados fortemente tipada, usada em conjunto com o React Hook Form.
- **@hookform/resolvers** - Integração entre React Hook Form e Zod
- **Radix UI** - Biblioteca de componentes React acessíveis e personalizáveis.
- **Phosphor React** - Conjunto de ícones para React, com ícones de alta qualidade e personalizáveis, ideais para interfaces modernas.

## 📦 Instalação e Execução

### 1️⃣ Clone o repositório
```bash
 git clone https://github.com/igorportellasz/financial-system.git
 cd financial-system
```

### 2️⃣ Instale as dependências
```bash
 npm install
```

### 3️⃣ Execute o servidor local (JSON Server)
O projeto inclui um arquivo `server.json` que contém dados padrões para testes. Para iniciar o servidor localmente, utilize:
```bash
 npx json-server --watch server.json --port 3000
```
Isso iniciará uma API local no `http://localhost:3000`.

### 4️⃣ Inicie o projeto React
Em outra aba do terminal, rode:
```bash
 npm run dev
```
Isso iniciará o projeto em modo de desenvolvimento. Acesse no navegador:
```
 http://localhost:port
```

## 🏗️ Como funciona o `server.json`?

O `server.json` é um arquivo que simula uma API para testes. Ele contém dados padrões como:
```json
{
  "transactions": [
    {
      "id": 1,
      "description": "Desenvolvimento de Aplicativo",
      "price": 14000,
      "type": "income",
      "category": "Venda",  
      "createdAt": "2025-03-05T18:12:12.212Z"
    },
    {
      "id": 2,
      "description": "Compra no supermercado",
      "price": 200,
      "type": "outcome",
      "category": "Alimentação",
      "createdAt": "2025-03-09T01:55:21.135Z"
    }
  ]
}
```

## 📂 Estrutura do Projeto

```
financial-system/
│-- public/
│-- src/
│   │── components/       # Componentes reutilizáveis
│   │── contexts/         # Context API para gerenciamento de estado
│   │── hooks/            # Hooks personalizados
│   │── lib/              # Configuração da API Axios
│   │── pages/            # Páginas principais do app
│   │── reducers/         # Gerenciamento de estado com reducers
│   │── styles/           # Estilos globais
│   │── utils/            # Arquivos de utilidade geral
│-- App.tsx               # Componente principal da aplicação
│-- main.tsx              # Ponto de entrada do React
│-- server.json           # Servidor local para testes
│-- package.json          # Dependências e scripts do projeto
│-- vite.config.ts        # Configuração do Vite
│-- tsconfig.json         # Configuração do TypeScript
│-- README.md             # Documentação do projeto
```
---
📌 Este projeto foi desenvolvido baseado no curso da Rocketseat ministrado por Diego Fernandes.

