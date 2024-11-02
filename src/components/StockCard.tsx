import React from 'react';
import { TrendingUp, TrendingDown, BarChart2 } from 'lucide-react';
import { Stock } from '../types';

interface StockCardProps {
  stock: Stock;
  onClick: (stock: Stock) => void;
}

export default function StockCard({ stock, onClick }: StockCardProps) {
  const isPositive = stock.change >= 0;

  return (
    <div
      onClick={() => onClick(stock)}
      className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold">{stock.symbol}</h3>
          <p className="text-sm text-gray-600">{stock.name}</p>
        </div>
        <div className={`flex items-center ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {isPositive ? <TrendingUp size={20} /> : <TrendingDown size={20} />}
        </div>
      </div>
      
      <div className="flex justify-between items-end">
        <div>
          <p className="text-2xl font-bold">${stock.price.toFixed(2)}</p>
          <p className={`text-sm ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
            {isPositive ? '+' : ''}{stock.change.toFixed(2)} ({stock.changePercent.toFixed(2)}%)
          </p>
        </div>
        <div className="text-right">
          <p className={`text-sm font-semibold px-3 py-1 rounded-full ${
            stock.recommendation === 'Strong Buy' ? 'bg-green-100 text-green-800' :
            stock.recommendation === 'Buy' ? 'bg-emerald-100 text-emerald-800' :
            stock.recommendation === 'Hold' ? 'bg-yellow-100 text-yellow-800' :
            'bg-red-100 text-red-800'
          }`}>
            {stock.recommendation}
          </p>
        </div>
      </div>
    </div>
  );
}