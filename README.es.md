# Dolar API Dashboard

[🇺🇸 English](README.md) | [🇵🇹 Português](README.pt.md)

<p align="center">
  <img src="https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-Strict-blue?style=for-the-badge&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-Bundler-646CFF?style=for-the-badge&logo=vite" alt="Vite" />
  <img src="https://img.shields.io/badge/TailwindCSS-Styling-06B6D4?style=for-the-badge&logo=tailwindcss" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/License-BSL_1.1-blue?style=for-the-badge" alt="License" />
</p>

## 🏛️ Resumen del Proyecto

Este repositorio contiene el código fuente para un dashboard de tasas de cambio en tiempo real. Construido con **React 19** y **Vite**, la aplicación consume endpoints públicos para mostrar métricas de pares de divisas. La arquitectura está optimizada para reducir al mínimo la sobrecarga de renderizado y el recálculo inestable de Layout, proporcionando una capa de visualización de datos continua y eficiente.

---

## ⚙️ Características Técnicas Principales

### 1. Sincronización de Datos en Tiempo Real

Implementación de mecanismos de polling para obtener streams JSON desde DolarAPI. Incluye estrategias de almacenamiento en caché para minimizar la saturación de red mientras mantiene métricas actualizadas para múltiples tipos de cambio (paralelo, oficial, criptomonedas).

### 2. Optimización de Renderizado

Diseñado para prevenir el bloqueo del React Commit Phase. La interfaz implementa estrategias de aceleración de hardware CSS (`transform-gpu`) reemplazando operaciones costosas de filtrado (como `backdrop-blur`) por alternativas estructurales estables, resolviendo problemas de estrangulamiento térmico (thermal throttling) en pantallas de alta resolución.

### 3. Mitigación del Cumulative Layout Shift (CLS)

Ingeniería de _Zero Layout Shift_ mediante skeleton loaders de geometría exacta, asegurando que el árbol DOM se mantenga inmutable durante el ciclo de vida de recuperación de datos.

---

## 🏗️ Visión General de la Arquitectura

```text
dolar-api/
├── src/
│   ├── components/
│   │   ├── ui/                 # Componentes React reutilizables
│   │   └── CurrencyDashboard/  # Componente de dominio local
│   ├── services/
│   │   └── dolarService.ts    # Cliente API y capa de red
│   ├── types/
│   │   └── currency.ts        # Interfaces estrictas de TypeScript
│   ├── App.tsx                # Raíz de la aplicación
│   └── main.tsx               # Entry point de renderizado
```

**Stack Tecnológico Enterprise:**

- **Framework:** React 19 (Client-Side Rendering)
- **Herramienta de Build:** Vite
- **Estilos:** Tailwind CSS, Framer Motion
- **Motor:** TypeScript (Modo Estricto)

---

## ⚙️ Instalación y Desarrollo

Asegúrate de tener instalado `Node.js 18+`.

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/LuisSambrano/dolar-api.git
   ```

2. **Instalar dependencias:**

   ```bash
   cd dolar-api
   npm install
   ```

3. **Ejecutar el servidor local de desarrollo:**
   ```bash
   npm run dev
   ```

---

## 🎨 Estándares de Código

Este repositorio aplica estándares de ingeniería estrictos:

1. `npm run lint` debe resultar en cero errores o advertencias antes de hacer cada commit.
2. `tsc --noEmit` debe pasar sin incidentes de tipos.
3. No se permiten tipos `any`; usar tipado estricto o `unknown` con detectores Type Guards.
4. Es obligatorio el estándar Conventional Commits.

---

## 📄 Licencia y Contribución

Este proyecto está bajo licencia [Business Source License 1.1](LICENSE). Puedes leer y estudiar el código base con propósitos educativos. Uso comercial requiere una autorización separada.
