import React, { useState } from 'react';
import { BarChart2 } from 'lucide-react';
import { Stock } from './types';
import { stockData, generatePriceHistory } from './data/mockStocks';
import StockCard from './components/StockCard';
import StockChart from './components/StockChart';
import Analysis from './components/Analysis';

function App() {
  const [selectedStock, setSelectedStock] = useState<Stock>(stockData[0]);
  const priceHistory = generatePriceHistory(selectedStock.price);

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2">
            <BarChart2 className="text-indigo-600" size={24} />
            <h1 className="text-xl font-bold text-gray-900">StockSense AI</h1>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-2xl font-bold">{selectedStock.name}</h2>
                  <p className="text-gray-600">{selectedStock.symbol}</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold">${selectedStock.price.toFixed(2)}</p>
                  <p className={`text-sm ${selectedStock.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {selectedStock.change >= 0 ? '+' : ''}{selectedStock.change.toFixed(2)} 
                    ({selectedStock.changePercent.toFixed(2)}%)
                  </p>
                </div>
              </div>
              <StockChart data={priceHistory} />
            </div>
            
            <Analysis stock={selectedStock} />
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Top Stocks</h2>
            {stockData.map((stock) => (
              <StockCard
                key={stock.symbol}
                stock={stock}
                onClick={setSelectedStock}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;