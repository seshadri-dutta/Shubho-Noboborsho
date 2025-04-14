
// import React from 'react';
// import WishCard from './components/wishcard';

// const wishes = [
//   {
//     bengali: 'নতুন বছরে তোমার জীবনে আসুক আনন্দ আর শান্তি।',
//     english: 'May the New Year bring joy and peace into your life.'
//   },
//   {
//     bengali: 'শুভ নববর্ষে রইলো ভালোবাসা ও আশীর্বাদ।',
//     english: 'Wishing you love and blessings this Poila Boishakh.'
//   },
//   {
//     bengali: 'তোমার জীবন হোক রঙে ভরা ও স্বপ্নময়।',
//     english: 'May your life be full of colors and dreams.'
//   },
//   {
//     bengali: 'নতুন সূর্য আনুক নতুন আশার আলো।',
//     english: 'May the new sun bring a light of new hope.'
//   },
// ];

// const App = () => {
//   const queryParams = new URLSearchParams(window.location.search);
//   const name = queryParams.get('name') || 'বন্ধু';
//   console.log(name)

//   return (
//     <div>
//       <h1>শুভ নববর্ষ, {name}! 🎉</h1>
//       <div className="wish-container">
//         {wishes.map((wish, index) => (
//           <WishCard key={index} bengali={wish.bengali} english={wish.english} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import WishPage from './pages/WishPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/wish" element={<WishPage />} />
    </Routes>
  );
};

export default App;

