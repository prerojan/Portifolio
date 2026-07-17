# Carlos Renan - Portfolio Profissional 🚀

Este repositório contém o código-fonte do portfólio profissional de **Carlos Renan**, um profissional com perfil analítico e híbrido que atua na interseção estratégica entre a **tecnologia** e os **processos de negócio (Controladoria)**.

O objetivo principal deste projeto é apresentar suas competências técnicas, sua trajetória profissional e seus casos reais de sucesso de forma elegante, moderna e de alto desempenho.

---

## 🎨 Demonstração Visual e Funcionalidades

O portfólio foi projetado com foco em **design de alta fidelidade (Craftsmanship)**, utilizando uma paleta refinada de cores, tipografia moderna e interações fluidas:

*   **Tema Dinâmico (Light & Dark Mode):** Alternância instantânea e suave de cores adaptando-se à preferência do usuário, utilizando variáveis nativas do Tailwind CSS v4.
*   **Apresentação de Casos Reais (Engenharia de Valor):** Demonstração estruturada de problemas de negócio, as soluções técnicas criadas e seus respectivos resultados estimados.
*   **Linha do Tempo de Experiência:** Trajetória profissional detalhada e atualizada.
*   **Painel Acadêmico Dinâmico:** Seção dedicada para formação acadêmica (IFNMG).
*   **Matriz de Competências:** Segmentação inteligente entre habilidades em controladoria/processos, tecnologia/sistemas e competências comportamentais.
*   **Ações Rápidas de Contato:** Integração para cópia direta do e-mail com feedback visual e botão para conversa instantânea via WhatsApp.
*   **Animações de Alto Desempenho:** Transições e efeitos de hover suaves desenvolvidos com `motion` (antigo Framer Motion).

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando o ecossistema mais moderno do ecossistema front-end:

*   **React 19:** Biblioteca principal para estruturação dos componentes baseada em hooks e estados.
*   **TypeScript:** Garantia de tipagem estática e maior manutenibilidade do código.
*   **Vite:** Bundler de altíssima velocidade para desenvolvimento local e otimização de build em produção.
*   **Tailwind CSS v4:** A versão mais recente do framework CSS utilitário, com arquitetura CSS nativa, alta velocidade e facilidade para temas e variáveis.
*   **Motion (for React):** Biblioteca robusta e performática para animações fluidas no React.
*   **Lucide React:** Pacote de ícones minimalistas e modernos de vetor.

---

## 📁 Estrutura de Diretórios

O projeto segue um padrão modular altamente organizado que separa as responsabilidades de visualização, dados e estilos:

```bash
/
├── src/
│   ├── components/       # Componentes visuais do portfólio
│   │   ├── About.tsx      # Seção "Diferencial" (Negócio + Código)
│   │   ├── Contact.tsx    # Seção "Contato Direto" com formulário/ações
│   │   ├── Experience.tsx # Timeline profissional e formação acadêmica
│   │   ├── Header.tsx     # Cabeçalho flutuante responsivo com seletor de tema
│   │   ├── Hero.tsx       # Landing page inicial com indicador de status
│   │   ├── Projects.tsx   # Casos de sucesso e engenharia de valor
│   │   └── Skills.tsx     # Matriz de habilidades
│   ├── App.tsx           # Componente raiz que coordena as seções e o tema
│   ├── data.ts           # Centralizador de todos os dados textuais (fácil de editar!)
│   ├── index.css         # Configurações de tema do Tailwind CSS v4
│   ├── main.tsx          # Ponto de entrada do React
│   └── types.ts          # Definição de contratos e tipos TypeScript
├── package.json          # Manifest do projeto e dependências
└── vite.config.ts        # Configuração do Vite
```

---

## 🚀 Como Executar o Projeto Localmente

Siga o passo a passo abaixo para rodar a aplicação em seu ambiente local:

### Pré-requisitos
Certifique-se de possuir o [Node.js](https://nodejs.org/) instalado em sua máquina.

### 1. Clonar o Repositório
```bash
git clone https://github.com/prerojan/Portifolio.git
cd Portifolio
```

### 2. Instalar Dependências
```bash
npm install
```

### 3. Executar o Servidor de Desenvolvimento
```bash
npm run dev
```
O servidor será iniciado. Abra o navegador em `http://localhost:3000` para visualizar o portfólio.

### 4. Compilar para Produção (Build)
Para gerar os arquivos otimizados e prontos para deploy:
```bash
npm run build
```
Os arquivos finais estáticos serão gerados na pasta `dist/`.

---

## ✏️ Como Atualizar Suas Informações

Se você quiser atualizar suas experiências, formação ou links de contato, basta editar o arquivo **`src/data.ts`**. Ele centraliza todas as constantes de texto e links do site, de forma que você não precisa mexer na estrutura HTML/React para alterar conteúdos.

---

Desenvolvido por **Carlos Renan**.
