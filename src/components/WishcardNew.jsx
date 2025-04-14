import React from 'react';

const WishCard = ({ bengali, english }) => (
  <div className="bg-[#fff8f2] p-6 sm:p-8 md:p-10 rounded-xl shadow-lg hover:shadow-xl transition-all">
    <p className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-[#a52a2a]">
      <strong>{bengali}</strong>
    </p>
    <p className="text-base sm:text-lg md:text-xl text-gray-700 italic">
      <em>{english}</em>
    </p>
  </div>
);



export default WishCard;
