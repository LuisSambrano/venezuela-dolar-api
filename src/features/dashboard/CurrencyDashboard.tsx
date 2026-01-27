import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { Currency } from "@/types/currency";
import { CurrencyCard } from "@/components/molecules/CurrencyCard";
import { GlassCard } from "@/components/ui/GlassCard";

const MOCK_DATA: Currency[] = [
  {
    code: "blue",
    name: "Blue",
    buy: 1120,
    sell: 1140,
    variation: 0.45,
    timestamp: new Date().toISOString(),
  },
  {
    code: "oficial",
    name: "Oficial",
    buy: 840,
    sell: 880,
    variation: 0.12,
    timestamp: new Date().toISOString(),
  },
  {
    code: "mep",
    name: "Bolsa (MEP)",
    buy: 1050,
    sell: 1055,
    variation: -0.23,
    timestamp: new Date().toISOString(),
  },
  {
    code: "ccl",
    name: "Contado con Liqui",
    buy: 1090,
    sell: 1105,
    variation: 1.15,
    timestamp: new Date().toISOString(),
  },
  {
    code: "crypto",
    name: "Cripto",
    buy: 1135,
    sell: 1145,
    variation: 0.0,
    timestamp: new Date().toISOString(),
  },
  {
    code: "tarjeta",
    name: "Tarjeta",
    buy: 1350,
    sell: 1400,
    variation: 0.05,
    timestamp: new Date().toISOString(),
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};

export const CurrencyDashboard = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate network latency
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto max-w-7xl px-4 py-12 md:px-8">
      {/* Header */}
      <div className="mb-12 flex flex-col items-center text-center md:items-start md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-white to-white/60 bg-clip-text text-4xl font-bold tracking-tighter text-transparent md:text-6xl"
        >
          Mercado Cambiario
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-4 max-w-lg text-lg text-muted-foreground"
        >
          Monitor en tiempo real de las cotizaciones en Argentina. Diseñado para
          la toma de decisiones financieras.
        </motion.p>
      </div>

      {/* Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {loading
          ? Array.from({ length: 6 }).map((_, i) => (
              <GlassCard key={i} className="h-48 w-full animate-pulse" />
            ))
          : MOCK_DATA.map((curr) => (
              <motion.div key={curr.code} variants={itemVariants}>
                <CurrencyCard currency={curr} />
              </motion.div>
            ))}
      </motion.div>
    </div>
  );
};
