import { Currency } from "@/types/currency";

interface ApiCurrency {
  moneda: string;
  casa: string;
  nombre: string;
  compra: number;
  venta: number;
  fechaActualizacion: string;
}

export const DolarService = {
  async getAll(): Promise<Currency[]> {
    try {
      const response = await fetch("https://dolarapi.com/v1/dolares");
      if (!response.ok) throw new Error("Failed to fetch rates");

      const data: ApiCurrency[] = await response.json();

      return data.map((item) => ({
        code: item.casa,
        name: item.nombre,
        buy: item.compra,
        sell: item.venta,
        timestamp: item.fechaActualizacion,
        // Calculate artificial variation for demo purposes since API doesn't provide it yet
        // In a real app, this would come from historical data comparison
        variation: Math.random() > 0.5 ? Math.random() : -Math.random(),
      }));
    } catch (error) {
      console.error("DolarService Error:", error);
      return [];
    }
  },
};
