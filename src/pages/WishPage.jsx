import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import WishCard from '../components/WishCard';

const wishes = [
  {
    bengali: 'নতুন বছরে তোমার জীবনে আসুক আনন্দ আর শান্তি।',
    english: 'May the New Year bring joy and peace into your life.'
  },
  {
    bengali: 'শুভ নববর্ষে রইলো ভালোবাসা ও আশীর্বাদ।',
    english: 'Wishing you love and blessings this Poila Boishakh.'
  },
  {
    bengali: 'তোমার জীবন হোক রঙে ভরা ও স্বপ্নময়।',
    english: 'May your life be full of colors and dreams.'
  },
  {
    bengali: 'নতুন সূর্য আনুক নতুন আশার আলো।',
    english: 'May the new sun bring a light of new hope.'
  },
];

const WishPage = () => {
  const query = new URLSearchParams(useLocation().search);
  const name = query.get('name') || 'বন্ধু';
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen p-6 flex flex-col items-center justify-center text-center font-[Noto_Serif_Bengali] bg-gradient-to-br from-[#fbe9e7] to-[#ffccbc]">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl text-[#a52a2a] font-bold mb-8 leading-snug">
        শুভ নববর্ষ, {name}! 🎉
      </h1>

      <div className="w-full max-w-3xl space-y-6">
        {wishes.map((wish, index) => (
          <WishCard key={index} bengali={wish.bengali} english={wish.english} />
        ))}
      </div>

      <button
        onClick={goToHome}
        className="mt-10 px-6 py-3 text-lg sm:text-xl lg:text-2xl bg-[#a52a2a] text-white rounded-xl shadow-md hover:bg-red-800 transition"
      >
        🎁 তোমার বন্ধুকে শুভেচ্ছা পাঠাও
      </button>
    </div>
  );
};

export default WishPage;
