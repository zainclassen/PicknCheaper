import React, { useState } from 'react';
import PriceAlertModal from './components/PriceAlertModal';
import NewsletterCard from './components/NewsletterCard';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sampleProduct = {
    name: "Chicken Breast & Seasoned Potato Combo",
    currentPrice: 89.99
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen flex flex-col items-center justify-center space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold text-emerald-700 mb-2">Pick n Cheaper Campaign</h1>
        <p className="text-gray-600 mb-6">Track supermarket prices and unlock exclusive savings.</p>
        
        <button 
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-3 bg-emerald-600 text-white font-bold rounded-lg shadow-md hover:bg-emerald-700 transition"
        >
          Set Price Alert Modal
        </button>
      </div>

      {/* Newsletter Card Section */}
      <div className="w-full max-w-md">
        <NewsletterCard />
      </div>

      <PriceAlertModal 
        product={sampleProduct} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}
