# 🚀 Exercício Prático: Pipeline de CI/CD

Este repositório foi criado para exercitar conceitos fundamentais de **DevOps**, utilizando **GitHub Actions** para automatizar o ciclo de vida de uma aplicação Node.js, desde a integração do código até o deploy em produção.

## 🎯 Objetivo do Exercício
Configurar um fluxo de trabalho automatizado que:
1. Valide a qualidade do código em cada contribuição (CI).
2. Realize o build da aplicação de forma padronizada.
3. Implante automaticamente a versão estável no **GitHub Pages** (CD).

## 🛠️ Tecnologias e Ferramentas
- **Node.js 20**: Runtime principal.
- **GitHub Actions**: Orquestração do pipeline.
- **GitHub Pages**: Hospedagem da aplicação estática.
- **NPM**: Gerenciamento de pacotes e scripts.

## 🏗️ Estrutura dos Workflows

### 1. CI Pipeline (`push` e `pull_request`)
Este workflow garante que nenhuma alteração quebre o projeto. Ele roda em qualquer branch e executa:
- **Instalação:** Instala as dependências via `npm install`.
- **Lint:** Verifica padrões de código com `npm run lint`.
- **Testes:** Executa a suíte de testes unitários com `npm test`.
- **Build:** Gera os arquivos de produção na pasta `dist`.
- **Artifact:** Faz o upload da pasta `dist` como um artefato de build para inspeção manual.

### 2. Deploy Pipeline (`push` na branch `main`)
Este workflow é focado na entrega contínua (CD). Ele é disparado apenas quando o código chega na branch principal:
- **Permissões:** Possui permissões de escrita para `id-token` e `pages`.
- **Upload:** Transforma o conteúdo da pasta `dist` em um artefato compatível com o GitHub Pages.
- **Deploy:** Realiza o deploy para o ambiente de produção (URL pública do projeto).

## 🚀 Como Praticar

### Configuração Inicial
1. Certifique-se de que o seu projeto possui os scripts `lint`, `test` e `build` configurados no `package.json`.
2. Vá em **Settings > Pages** no seu repositório.
3. Em **Build and deployment > Source**, selecione **"GitHub Actions"**.

### Testando o Fluxo
1. **Simule um erro:** Altere um teste para falhar e faça o push. O workflow de CI deve ficar "vermelho".
2. **Correção e Merge:** Corrija o erro, abra um Pull Request para a `main` e observe a validação passar.
3. **Deploy Automático:** Após o merge na `main`, acompanhe a aba **Actions**. O workflow de deploy será ativado e, ao final, sua aplicação estará atualizada na URL do GitHub Pages.

## 💻 Comandos Locais
Antes de subir seu código, você pode rodar as validações localmente:
```bash
npm install      # Instalar dependências
npm run lint     # Validar estilo
npm test         # Rodar testes
npm run build    # Testar o build
