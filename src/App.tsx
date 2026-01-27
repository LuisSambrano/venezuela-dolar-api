import { CurrencyDashboard } from "./features/dashboard/CurrencyDashboard";

function App() {
  return (
    <main className="min-h-screen w-full bg-void text-foreground">
      <div className="z-50 pointer-events-none fixed inset-0 bg-noise-pattern opacity-[0.03] mix-blend-overlay" />
      <CurrencyDashboard />
    </main>
  );
}

export default App;
