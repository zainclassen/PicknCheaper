import React, { useState } from 'react';
 
export default function PriceAlertModal({ product, isOpen, onClose }) {

  const [targetPrice, setTargetPrice] = useState(product?.currentPrice || '');

  const [email, setEmail] = useState('');

  const [submitted, setSubmitted] = useState(false);
 
  if (!isOpen || !product) return null;
 
  const handleSubmit = (e) => {

    e.preventDefault();

    setSubmitted(true);

  };
 
  return (
<div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
<div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl relative text-gray-800">
<button 

          onClick={onClose}

          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 font-bold"
>

          ✕
</button>
 
        {!submitted ? (
<form onSubmit={handleSubmit} className="space-y-4">
<h3 className="text-xl font-bold text-gray-900">Set Price Alert</h3>
<p className="text-sm text-gray-600">

              We'll email you as soon as <strong>{product.name}</strong> drops to your target price.
</p>
 
            <div>
<label className="block text-xs font-semibold text-gray-500 uppercase mb-1">

                Target Price (R)
</label>
<input

                type="number"

                step="0.01"

                required

                value={targetPrice}

                onChange={(e) => setTargetPrice(e.target.value)}

                className="w-full px-3 py-2 border rounded-md text-gray-900 focus:ring-2 focus:ring-emerald-500 outline-none"

              />
</div>
 
            <div>
<label className="block text-xs font-semibold text-gray-500 uppercase mb-1">

                Your Email
</label>
<input

                type="email"

                required

                value={email}

                onChange={(e) => setEmail(e.target.value)}

                placeholder="name@example.com"

                className="w-full px-3 py-2 border rounded-md text-gray-900 focus:ring-2 focus:ring-emerald-500 outline-none"

              />
</div>
 
            <button

              type="submit"

              className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg transition"
>

              Notify Me When Price Drops
</button>
</form>

        ) : (
<div className="text-center py-6 space-y-3">
<div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-2xl">

              ✓
</div>
<h4 className="text-lg font-bold">Alert Created!</h4>
<p className="text-sm text-gray-600">

              We’ll email <strong>{email}</strong> when {product.name} drops below R{targetPrice}.
</p>
<button

              onClick={onClose}

              className="mt-4 px-4 py-2 bg-gray-100 text-gray-700 font-semibold rounded-md hover:bg-gray-200"
>

              Back to Shopping
</button>
</div>

        )}
</div>
</div>

  );

}
 
