import React, { useState } from 'react';
import PriceAlertModal from './components/PriceAlertModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sampleProduct = {
    name: "Chicken Breast & Seasoned Potato Combo",
    currentPrice: 89.99
  };

  return (
    <div className="p-8 text-center bg-gray-50 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-extrabold text-emerald-700 mb-4">Pick n Cheaper Campaign</h1>
      <p className="text-gray-600 mb-6">Track prices and claim your weekly supermarket specials.</p>

      <button 
        onClick={() => setIsModalOpen(true)}
        className="px-6 py-3 bg-emerald-600 text-white font-bold rounded-lg shadow-md hover:bg-emerald-700 transition"
      >
        Set Price Alert
      </button>

      <PriceAlertModal 
        product={sampleProduct} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}
