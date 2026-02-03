[English](./README.md) | [Español](./README.es.md) | [Português](./README.pt.md)

# Dolar API Dashboard

Dashboard de taxas de câmbio venezuelanas em tempo real com sistema de design glassmorphism.

<!-- CTAs -->
<p align="center">
  <a href="https://github.com/LuisSambrano/dolar-api/stargazers"><img src="https://img.shields.io/github/stars/LuisSambrano/dolar-api?style=flat-square" alt="Stars"/></a>
  <a href="https://github.com/LuisSambrano/dolar-api/network/members"><img src="https://img.shields.io/github/forks/LuisSambrano/dolar-api?style=flat-square" alt="Forks"/></a>
  <a href="https://github.com/LuisSambrano/dolar-api/issues"><img src="https://img.shields.io/github/issues/LuisSambrano/dolar-api?style=flat-square" alt="Issues"/></a>
  <a href="https://github.com/LuisSambrano/dolar-api/blob/main/LICENSE"><img src="https://img.shields.io/github/license/LuisSambrano/dolar-api?style=flat-square" alt="License"/></a>
</p>

## Visão Geral

Esta aplicação fornece uma interface visual para acompanhar taxas de câmbio venezuelanas em tempo real. Conecta-se ao serviço DolarAPI para exibir taxas atuais de múltiplos pares de moeda, incluindo taxas do mercado paralelo (dólar paralelo) e taxas oficiais.

O dashboard implementa um sistema de design glassmorphism otimizado para performance em displays de alta resolução. Em vez de usar filtros de backdrop blur padrão que podem causar quedas de frame em telas retina, a interface usa uma abordagem "solid glass" com texturas de ruído e iluminação interna para criar profundidade sem comprometer a performance.

Construído com React 19 e Vite, a aplicação prioriza tempos de carregamento rápidos e interações suaves através de atenção cuidadosa à física de animação e estabilidade de layout.

## Características

### Dados em Tempo Real

- **Taxas de Câmbio ao Vivo**: Auto-refresh a cada 60 segundos
- **Múltiplos Pares de Moeda**: Mercado paralelo, taxas oficiais e crypto
- **Tendências Históricas**: Indicadores visuais para mudanças de taxa
- **Zero Layout Shift**: Skeleton loaders correspondem à geometria final do componente

### Sistema de Design

- **Glassmorphism**: UI translúcida com profundidade e hierarquia
- **Modo Escuro**: Paleta de alto contraste baseada em `#050505`
- **Física Spring**: Animações Framer Motion com stiffness: 300
- **Texturas de Ruído**: Grain sutil (opacity: 0.05) para textura como papel
- **Otimizado para Performance**: Sem backdrop blur para prevenir throttling térmico

### Experiência do Usuário

- **Magnetic Lift**: Componentes respondem ao hover antes do clique
- **Feedback Tátil**: Micro-interações visuais para todas as ações
- **Responsivo**: Adapta-se a todos os tamanhos de tela
- **Acessível**: HTML semântico e labels ARIA

## Stack Tecnológico

![React](https://img.shields.io/badge/React_19-61DAFB?style=flat&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwind-css&logoColor=white)

**Core**:

- [React 19](https://react.dev/) - Biblioteca de componentes UI
- [TypeScript](https://www.typescriptlang.org/) - Desenvolvimento type-safe
- [Vite](https://vitejs.dev/) - Build tool e dev server

**Estilos**:

- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utility-first
- [Framer Motion](https://www.framer.com/motion/) - Biblioteca de animações
- [Lucide React](https://lucide.dev/) - Sistema de ícones

**Dados**:

- [DolarAPI](https://dolarapi.com/) - API de taxas de câmbio venezuelanas

## Primeiros Passos

### Pré-requisitos

- Node.js 18 ou superior
- Gerenciador de pacotes npm

### Instalação

1. **Clonar o repositório**:

```bash
git clone https://github.com/LuisSambrano/dolar-api.git
cd dolar-api
```

2. **Instalar dependências**:

```bash
npm install
```

3. **Executar servidor de desenvolvimento**:

```bash
npm run dev
```

4. **Abrir a aplicação**:

Navegue para [http://localhost:5173](http://localhost:5173) no seu navegador.

## Contribuir

Contribuições são bem-vindas. Por favor siga estas diretrizes:

1. Faça fork do repositório
2. Crie uma branch de feature: `git checkout -b feature/descricao`
3. Faça suas alterações com commits claros e atômicos
4. Push para seu fork: `git push origin feature/descricao`
5. Envie um pull request

## Licença

Licença MIT - Veja [LICENSE](LICENSE) para detalhes.

## Links

- **Repositório**: [github.com/LuisSambrano/dolar-api](https://github.com/LuisSambrano/dolar-api)
- **Autor**: [Luis Sambrano](https://github.com/LuisSambrano)
- **Documentação API**: [dolarapi.com](https://dolarapi.com/)

---

[English](./README.md) | [Español](./README.es.md) | **Português**
