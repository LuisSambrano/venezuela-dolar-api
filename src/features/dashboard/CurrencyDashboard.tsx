import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { Currency } from "@/types/currency";
import { CurrencyCard } from "@/components/molecules/CurrencyCard";
import { GlassCard } from "@/components/ui/GlassCard";
import { DolarService } from "@/services/dolar";

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
  const [currencies, setCurrencies] = useState<Currency[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await DolarService.getAll();
        setCurrencies(data);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    // Auto-refresh every 60 seconds
    const interval = setInterval(fetchData, 60000);
    return () => clearInterval(interval);
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
          : currencies.map((curr) => (
              <motion.div key={curr.code} variants={itemVariants}>
                <CurrencyCard currency={curr} />
              </motion.div>
            ))}
      </motion.div>
    </div>
  );
};
