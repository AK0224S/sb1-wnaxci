import React from 'react';
import { PricePoint } from '../types';

interface StockChartProps {
  data: PricePoint[];
}

export default function StockChart({ data }: StockChartProps) {
  const maxPrice = Math.max(...data.map(d => d.price));
  const minPrice = Math.min(...data.map(d => d.price));
  const range = maxPrice - minPrice;
  
  const getY = (price: number) => {
    return 100 - ((price - minPrice) / range * 80);
  };

  const points = data.map((d, i) => {
    const x = (i / (data.length - 1)) * 100;
    const y = getY(d.price);
    return `${x},${y}`;
  }).join(' ');

  return (
    <div className="w-full h-64 bg-white rounded-xl p-4">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polyline
          points={points}
          fill="none"
          stroke="#4F46E5"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#4F46E5" stopOpacity="0" />
        </linearGradient>
        <path
          d={`M 0,100 L ${points} L 100,100 Z`}
          fill="url(#gradient)"
        />
      </svg>
      <div className="flex justify-between text-sm text-gray-600 mt-2">
        <span>{data[0].date}</span>
        <span>{data[data.length - 1].date}</span>
      </div>
    </div>
  );
}