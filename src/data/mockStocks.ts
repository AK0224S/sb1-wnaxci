import { Stock, PricePoint } from '../types';

export const stockData: Stock[] = [
  {
    symbol: 'AAPL',
    name: 'Apple Inc.',
    price: 173.45,
    change: 2.34,
    changePercent: 1.37,
    marketCap: 2800000000000,
    volume: 58900000,
    peRatio: 28.5,
    recommendation: 'Buy',
    confidence: 0.85,
  },
  {
    symbol: 'MSFT',
    name: 'Microsoft Corporation',
    price: 378.92,
    change: 4.67,
    changePercent: 1.25,
    marketCap: 2900000000000,
    volume: 25600000,
    peRatio: 34.2,
    recommendation: 'Strong Buy',
    confidence: 0.92,
  },
  {
    symbol: 'GOOGL',
    name: 'Alphabet Inc.',
    price: 141.80,
    change: -1.23,
    changePercent: -0.86,
    marketCap: 1800000000000,
    volume: 21300000,
    peRatio: 25.1,
    recommendation: 'Hold',
    confidence: 0.65,
  },
  {
    symbol: 'AMZN',
    name: 'Amazon.com Inc.',
    price: 175.35,
    change: 3.45,
    changePercent: 2.01,
    marketCap: 1900000000000,
    volume: 32100000,
    peRatio: 62.3,
    recommendation: 'Buy',
    confidence: 0.78,
  },
  {
    symbol: 'NVDA',
    name: 'NVIDIA Corporation',
    price: 824.15,
    change: 15.67,
    changePercent: 1.94,
    marketCap: 2100000000000,
    volume: 45200000,
    peRatio: 72.5,
    recommendation: 'Strong Buy',
    confidence: 0.95,
  },
];

export const generatePriceHistory = (basePrice: number): PricePoint[] => {
  const history: PricePoint[] = [];
  const days = 30;
  let currentPrice = basePrice * 0.8;

  for (let i = days - 1; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const randomChange = (Math.random() - 0.45) * 5;
    currentPrice = currentPrice * (1 + randomChange / 100);
    
    history.push({
      date: date.toISOString().split('T')[0],
      price: Number(currentPrice.toFixed(2)),
    });
  }

  return history;
};