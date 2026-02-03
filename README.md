[English](./README.md) | [Español](./README.es.md) | [Português](./README.pt.md)

# Dolar API Dashboard

Real-time Venezuelan exchange rate dashboard with glassmorphism design system.

<!-- CTAs -->
<p align="center">
  <a href="https://github.com/LuisSambrano/dolar-api/stargazers"><img src="https://img.shields.io/github/stars/LuisSambrano/dolar-api?style=flat-square" alt="Stars"/></a>
  <a href="https://github.com/LuisSambrano/dolar-api/network/members"><img src="https://img.shields.io/github/forks/LuisSambrano/dolar-api?style=flat-square" alt="Forks"/></a>
  <a href="https://github.com/LuisSambrano/dolar-api/issues"><img src="https://img.shields.io/github/issues/LuisSambrano/dolar-api?style=flat-square" alt="Issues"/></a>
  <a href="https://github.com/LuisSambrano/dolar-api/blob/main/LICENSE"><img src="https://img.shields.io/github/license/LuisSambrano/dolar-api?style=flat-square" alt="License"/></a>
</p>

## Overview

This application provides a visual interface for tracking Venezuelan currency exchange rates in real-time. It connects to the DolarAPI service to display current rates for multiple currency pairs, including parallel market rates (dólar paralelo) and official exchange rates.

The dashboard implements a glassmorphism design system optimized for performance on high-resolution displays. Rather than using standard backdrop blur filters that can cause frame drops on retina screens, the interface uses a "solid glass" approach with noise textures and inner lighting to create depth without compromising performance.

Built with React 19 and Vite, the application prioritizes fast load times and smooth interactions through careful attention to animation physics and layout stability.

## Architecture

```mermaid
graph TD
    A[Vite Dev Server] --> B[React 19 App]
    B --> C[DolarService]
    C --> D[DolarAPI.com]

    B --> E[State Management]
    E --> F[CurrencyDashboard]

    F --> G[GlassCard Components]
    G --> H[Framer Motion]

    D --> I[JSON Stream]
    I --> C

    style A fill:#646cff
    style B fill:#61DAFB,color:#000
    style D fill:#0F0F11,color:#fff
    style H fill:#0055FF,color:#fff
```

## Features

### Real-Time Data

- **Live Exchange Rates**: Auto-refresh every 60 seconds
- **Multiple Currency Pairs**: Parallel market, official rates, and crypto
- **Historical Trends**: Visual indicators for rate changes
- **Zero Layout Shift**: Skeleton loaders match final component geometry

### Design System

- **Glassmorphism**: Translucent UI with depth and hierarchy
- **Dark Mode**: High-contrast palette based on `#050505`
- **Spring Physics**: Framer Motion animations with stiffness: 300
- **Noise Textures**: Subtle grain (opacity: 0.05) for paper-like texture
- **Performance Optimized**: No backdrop blur to prevent thermal throttling

### User Experience

- **Magnetic Lift**: Components respond to hover before click
- **Tactile Feedback**: Visual micro-interactions for all actions
- **Responsive**: Adapts to all screen sizes
- **Accessible**: Semantic HTML and ARIA labels

## Tech Stack

![React](https://img.shields.io/badge/React_19-61DAFB?style=flat&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwind-css&logoColor=white)

**Core**:

- [React 19](https://react.dev/) - UI component library
- [TypeScript](https://www.typescriptlang.org/) - Type-safe development
- [Vite](https://vitejs.dev/) - Build tool and dev server

**Styling**:

- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide React](https://lucide.dev/) - Icon system

**Data**:

- [DolarAPI](https://dolarapi.com/) - Venezuelan exchange rate API
- [date-fns](https://date-fns.org/) - Date formatting utilities

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm package manager

### Installation

1. **Clone the repository**:

```bash
git clone https://github.com/LuisSambrano/dolar-api.git
cd dolar-api
```

2. **Install dependencies**:

```bash
npm install
```

3. **Run the development server**:

```bash
npm run dev
```

4. **Open the application**:

Navigate to [http://localhost:5173](http://localhost:5173) in your browser.

### Development Commands

```bash
npm run dev          # Start Vite development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint checks
```

## Project Structure

```
src/
├── components/
│   ├── ui/                 # Reusable UI components
│   │   └── GlassCard.tsx  # Base glass component
│   └── CurrencyDashboard.tsx
├── services/
│   └── dolarService.ts    # API client
├── types/
│   └── currency.ts        # TypeScript definitions
├── App.tsx                # Root component
└── main.tsx               # Application entry point
```

## Customization

### Glass Physics

The glassmorphism effect can be customized in `src/components/ui/GlassCard.tsx`:

```typescript
const SPRING_TRANSITION = {
  type: "spring",
  stiffness: 300, // Higher = more snap
  damping: 30, // Lower = more bounce
  mass: 1,
};
```

### Color Palette

The dark mode palette is defined in `tailwind.config.ts`:

```typescript
colors: {
  background: '#050505',
  foreground: '#FFFFFF',
  // ... other semantic colors
}
```

## API Integration

The application uses the public DolarAPI service:

- **Endpoint**: `https://dolarapi.com/v1/dolares`
- **Rate Limit**: No authentication required for basic usage
- **Update Frequency**: Data refreshes every 60 seconds

## Contributing

Contributions are welcome. Please follow these guidelines:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/description`
3. Make your changes with clear, atomic commits
4. Run linting: `npm run lint`
5. Push to your fork: `git push origin feature/description`
6. Submit a pull request

### Commit Convention

This project follows [Conventional Commits](https://www.conventionalcommits.org/):

- `feat`: New feature
- `fix`: Bug fix
- `refactor`: Code refactoring
- `style`: Code style changes
- `docs`: Documentation updates
- `test`: Test additions or modifications
- `chore`: Maintenance tasks

Example: `feat(dashboard): add historical rate chart`

## License

MIT License - See [LICENSE](LICENSE) for details.

## Links

- **Repository**: [github.com/LuisSambrano/dolar-api](https://github.com/LuisSambrano/dolar-api)
- **Author**: [Luis Sambrano](https://github.com/LuisSambrano)
- **API Documentation**: [dolarapi.com](https://dolarapi.com/)

---

**[Español](./README.es.md)** | English
