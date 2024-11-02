import React from 'react';
import { Stock } from '../types';
import { TrendingUp, DollarSign, BarChart2, Activity } from 'lucide-react';

interface AnalysisProps {
  stock: Stock;
}

export default function Analysis({ stock }: AnalysisProps) {
  const formatMarketCap = (value: number) => {
    return (value / 1000000000).toFixed(2) + 'B';
  };

  const formatVolume = (value: number) => {
    return (value / 1000000).toFixed(2) + 'M';
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-md">
      <h3 className="text-xl font-semibold mb-4">Analysis</h3>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 text-indigo-600 mb-2">
            <DollarSign size={20} />
            <span className="font-medium">Market Cap</span>
          </div>
          <p className="text-2xl font-bold">${formatMarketCap(stock.marketCap)}</p>
        </div>
        
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 text-indigo-600 mb-2">
            <Activity size={20} />
            <span className="font-medium">Volume</span>
          </div>
          <p className="text-2xl font-bold">{formatVolume(stock.volume)}</p>
        </div>
        
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 text-indigo-600 mb-2">
            <BarChart2 size={20} />
            <span className="font-medium">P/E Ratio</span>
          </div>
          <p className="text-2xl font-bold">{stock.peRatio.toFixed(2)}</p>
        </div>
        
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 text-indigo-600 mb-2">
            <TrendingUp size={20} />
            <span className="font-medium">Confidence</span>
          </div>
          <p className="text-2xl font-bold">{(stock.confidence * 100).toFixed(0)}%</p>
        </div>
      </div>

      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h4 className="font-semibold mb-2">Recommendation</h4>
        <div className="flex items-center gap-4">
          <div className={`text-lg font-bold px-4 py-2 rounded-full ${
            stock.recommendation === 'Strong Buy' ? 'bg-green-100 text-green-800' :
            stock.recommendation === 'Buy' ? 'bg-emerald-100 text-emerald-800' :
            stock.recommendation === 'Hold' ? 'bg-yellow-100 text-yellow-800' :
            'bg-red-100 text-red-800'
          }`}>
            {stock.recommendation}
          </div>
          <div className="flex-1">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-indigo-600 h-2.5 rounded-full"
                style={{ width: `${stock.confidence * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}