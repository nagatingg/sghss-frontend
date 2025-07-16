# Sistema de Gestão Hospitalar e de Serviços de Saúde (SGHSS) - Front-End

[![Status do Deploy](https://api.netlify.com/api/v1/badges/e6a5f0b3-3a5b-4c0e-9d2c-9a2c3a3b5e7b/deploy-status)](https://app.netlify.com/sites/bucolic-tiramisu-e76bba/deploys)

**Demonstração Online: [https://bucolic-tiramisu-e76bba.netlify.app/](https://bucolic-tiramisu-e76bba.netlify.app/)**

---

Este repositório contém o código-fonte do front-end do projeto SGHSS, desenvolvido como parte do Projeto Multidisciplinar do curso de Análise e Desenvolvimento de Sistemas. A aplicação simula uma interface para um sistema de gestão hospitalar, com diferentes perfis de usuário e funcionalidades.

## 🚀 Sobre o Projeto

O objetivo deste projeto foi aplicar os conceitos de engenharia de software na construção de uma aplicação front-end funcional e responsiva. O sistema possui três perfis de acesso distintos:

* **Paciente:** Permite visualizar o dashboard com informações de saúde, consultar o histórico e a lista de agendamentos.
* **Médico:** Acessa um painel com dados de seus pacientes e agenda de consultas.
* **Administrador:** Possui uma visão geral do sistema para gerenciamento de usuários e outros módulos.

A aplicação foi construída com foco em uma arquitetura de componentes reutilizáveis, gerenciamento de estado e uma experiência de usuário limpa e profissional.

## 🛠️ Tecnologias Utilizadas

As seguintes ferramentas e tecnologias foram utilizadas na construção do projeto:

* **[React.js](https://react.dev/)**: Biblioteca principal para a construção da interface de usuário.
* **[TypeScript](https://www.typescriptlang.org/)**: Superset do JavaScript que adiciona tipagem estática ao código.
* **[Vite](https://vitejs.dev/)**: Ferramenta de build e servidor de desenvolvimento de alta performance.
* **[Material-UI (MUI)](https://mui.com/)**: Biblioteca de componentes React para uma estilização rápida e consistente.
* **[React Router DOM](https://reactrouter.com/)**: Para gerenciamento de rotas e navegação na aplicação.

## 📂 Estrutura de Pastas

O projeto foi organizado em uma estrutura de pastas modular para facilitar a localização e reutilização de código:

```
/src
|-- /components       # Componentes de UI reutilizáveis (Layout, etc.)
|-- /contexts         # Contextos React para estado global (AuthContext)
|-- /pages            # Componentes que representam as telas completas
|-- /routes           # Configuração das rotas da aplicação
|-- /services         # Lógica de negócio e simulação de API (api.ts)
|-- /theme            # Configurações de tema para o Material-UI
|-- App.tsx             # Componente raiz da aplicação
|-- main.tsx            # Ponto de entrada da aplicação
```

## ⚙️ Como Executar o Projeto

Para executar este projeto localmente, siga os passos abaixo. Você precisará ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/nagatingg/sghss-frontend.git](https://github.com/nagatingg/sghss-frontend.git)
    ```

2.  **Acesse a pasta do projeto:**
    ```bash
    cd sghss-frontend
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

5.  **Abra no navegador:**
    Acesse `http://localhost:5173` (ou o endereço que aparecer no seu terminal) para visualizar a aplicação.

## 🔑 Credenciais de Teste

Para navegar pela aplicação, utilize as seguintes credenciais de login. A senha para todos os perfis é `123`.

* **Perfil Paciente:** `paciente@sghss.com`
* **Perfil Médico:** `medico@sghss.com`
* **Perfil Administrador:** `admin@sghss.com`

---