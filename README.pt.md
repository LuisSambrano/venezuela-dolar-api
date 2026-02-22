# Dolar API Dashboard

[🇺🇸 English](README.md) | [🇪🇸 Español](README.es.md)

<p align="center">
  <img src="https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-Strict-blue?style=for-the-badge&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-Bundler-646CFF?style=for-the-badge&logo=vite" alt="Vite" />
  <img src="https://img.shields.io/badge/TailwindCSS-Styling-06B6D4?style=for-the-badge&logo=tailwindcss" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/License-BSL_1.1-blue?style=for-the-badge" alt="License" />
</p>

## 🏛️ Resumo do Projeto

Este repositório contém o código-fonte de um painel de taxas de câmbio em tempo real. Construído com **React 19** e **Vite**, o aplicativo consome APIs públicas para exibir métricas de diferentes pares de moedas. A arquitetura é otimizada para reduzir a sobrecarga de renderização e garantir estabilidade de layout, fornecendo uma camada eficiente de visualização de fluxo contínuo de dados.

---

## ⚙️ Principais Recursos Técnicos

### 1. Sincronização de Dados em Tempo Real

Implementação de mecanismos de polling para consumir streams JSON a partir da DolarAPI. Inclui estratégias de cache para minimizar a saturação da rede enquanto mantém métricas localizadas e atualizadas para diversas fontes de câmbio (paralelo, oficial, criptomoedas).

### 2. Otimização de Renderização

Projetado para evitar restrições na fase de "Commit" do React. A interface aproveita estratégias de aceleração por hardware CSS (`transform-gpu`) no lugar de filtros complexos na GPU (como blur de fundo), prevenindo o estrangulamento térmico frequente em telas de retina de alta resolução.

### 3. Mitigação do Cumulative Layout Shift (CLS)

Engenharia projetada para _Zero Layout Shift_ através do carregamento via "Skeleton Loaders" de geometria exata, certificando que a árvore do DOM não sofra mutações estruturais durante o ciclo da rede neural.

---

## 🏗️ Visão Geral da Arquitetura

```text
dolar-api/
├── src/
│   ├── components/
│   │   ├── ui/                 # Componentes React reutilizáveis genéricos
│   │   └── CurrencyDashboard/  # Componente principal de domínio do negócio
│   ├── services/
│   │   └── dolarService.ts    # Cliente de transporte API (Rede)
│   ├── types/
│   │   └── currency.ts        # Tipagem estrita de TypeScript para os DTOs
│   ├── App.tsx                # Aplicação raíz
│   └── main.tsx               # Ponto de entrada e renderização para o React Server
```

**Stack Tecnológico Enterprise:**

- **Framework:** React 19 (Client-Side Rendering)
- **Vite:** Ferramenta de Build Rápida (HMR)
- **Estilos:** Tailwind CSS, Framer Motion
- **Motor:** TypeScript (Modo Estrito)

---

## ⚙️ Instalação e Desenvolvimento

Certifique-se de ter o `Node.js 18+` instalado.

1. **Clonar o repositório:**

   ```bash
   git clone https://github.com/LuisSambrano/dolar-api.git
   ```

2. **Instalar dependências:**

   ```bash
   cd dolar-api
   npm install
   ```

3. **Executar o servidor local de desenvolvimento:**
   ```bash
   npm run dev
   ```

---

## 🎨 Padrões de Código

Este repositório exige padrões de engenharia estritos:

1. `npm run lint` deve resultar em zero erros ou warnings antes do commit.
2. `tsc --noEmit` deve aprovar todo o pacote com tipagem imutável.
3. Não utilize interações inseguras ou dinâmicas como tipo de `any`; faça uso prudente de `unknown` emparelhado com asserções estritas (Type Guards).
4. Siga as orientações do "Conventional Commits" ao longo de sua participação.

---

## 📄 Licença e Contribuição

Este projeto é sub-licenciado pelos termos da [Business Source License 1.1](LICENSE). O código poderá ser acessado e inspecionado para viés primário em ensino e educação. Aplicação de exploração comercial irá necessitar anuência individual por licença direta.
