# Contributing to Dolar API (Luxury Edition)

> **Excellence is not an act, but a habit.**

We welcome contributions that adhere to the **Quiet Luxury** design philosophy and **System Core** architecture.

## 📐 Design Standards

1.  **Atomic Design**: Ensure all new components are classified as Atoms, Molecules, or Organisms.
2.  **Solid Glass Physics**: DO NOT use `backdrop-filter: blur()`. Use the `glass-card` utility which relies on noise textures and borders (`src/index.css`).
3.  **Spring Topology**: All animations must use the global `SPRING_TRANSITION` constant. Linear animations are forbidden.

## 🛠 Development Workflow

1.  **Fork** the repository.
2.  Create a feature branch: `git checkout -b feature/amazing-feature`.
3.  **Commit** your changes using Conventional Commits:
    - `feat: add new currency source`
    - `fix: adjust mobile padding`
    - `docs: update architecture diagram`
4.  **Push** to the branch.
5.  Open a **Pull Request**.

## 🧪 Quality Control

- Ensure strict TypeScript typing (no `any`).
- Verify standard performance metrics (Lighthouse Score > 95).
- Respect the "Deep Space" color palette variables.

---

**Luis Sambrano** | System Architect
