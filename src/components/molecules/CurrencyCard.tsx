import * as React from "react";
import { ArrowDown, ArrowUp, Minus, RefreshCcw } from "lucide-react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { GlassCard } from "../ui/GlassCard";
import { Currency } from "@/types/currency";
import { cn } from "@/lib/utils";

interface CurrencyCardProps {
  currency: Currency;
  isLoading?: boolean;
}

export const CurrencyCard = React.forwardRef<HTMLDivElement, CurrencyCardProps>(
  ({ currency, isLoading }, ref) => {
    const { name, buy, sell, variation, timestamp } = currency;

    const isPositive = variation ? variation > 0 : false;
    const isNeutral = !variation || variation === 0;

    if (isLoading) {
      return (
        <GlassCard
          ref={ref}
          intent="glass"
          className="h-48 w-full animate-pulse"
        />
      );
    }

    return (
      <GlassCard
        ref={ref}
        intent="glass"
        hoverEffect
        className="group relative flex flex-col justify-between gap-4"
      >
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-sans text-lg font-medium tracking-tight text-white/90">
              {name}
            </h3>
            <p className="text-xs font-medium uppercase tracking-wider text-white/40">
              Dólar
            </p>
          </div>

          <div
            className={cn(
              "flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold backdrop-blur-md",
              isPositive
                ? "bg-green-500/10 text-green-400"
                : isNeutral
                  ? "bg-white/5 text-white/40"
                  : "bg-red-500/10 text-red-400",
            )}
          >
            {isPositive ? (
              <ArrowUp className="h-3 w-3" />
            ) : isNeutral ? (
              <Minus className="h-3 w-3" />
            ) : (
              <ArrowDown className="h-3 w-3" />
            )}
            <span>{Math.abs(variation || 0).toFixed(2)}%</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-wider text-white/40">
              Compra
            </span>
            <span className="font-mono text-2xl font-semibold tracking-tight text-white">
              ${buy.toFixed(2)}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-wider text-white/40">
              Venta
            </span>
            <span className="font-mono text-2xl font-semibold tracking-tight text-white">
              ${sell.toFixed(2)}
            </span>
          </div>
        </div>

        <div className="mt-2 flex items-center gap-2 border-t border-white/5 pt-3">
          <RefreshCcw className="h-3 w-3 text-white/30" />
          <span className="text-xs text-white/30">
            Actualizado {format(new Date(timestamp), "HH:mm", { locale: es })}
          </span>
        </div>
      </GlassCard>
    );
  },
);
CurrencyCard.displayName = "CurrencyCard";
