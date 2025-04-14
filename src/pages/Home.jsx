import React, { useState } from 'react';
import Footer from '../components/FooterNew'; // adjust the path as needed

const Home = () => {
  const [name, setName] = useState('');
  const [generatedLink, setGeneratedLink] = useState('');

  const generateLink = () => {
    if (name.trim()) {
      const url = `${window.location.origin}/wish?name=${encodeURIComponent(name.trim())}`;
      setGeneratedLink(url);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedLink);
      alert('লিঙ্ক কপি হয়েছে! 🎉');
    } catch (err) {
      alert('দুঃখিত, লিঙ্ক কপি করা গেল না।');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow flex flex-col items-center justify-center p-6 text-center font-[Noto_Serif_Bengali] bg-gradient-to-br from-[#fbe9e7] to-[#ffccbc]">
        <h1 className="text-3xl md:text-4xl text-[#a52a2a] mb-8 font-bold leading-snug">
          তোমার বন্ধুকে শুভ নববর্ষের শুভেচ্ছা পাঠাও! 🎉
        </h1>

        <div className="flex flex-col items-center gap-4 w-full max-w-md text-3xl">
          <input
            type="text"
            placeholder="বন্ধুর নাম লিখো..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300 text-lg sm:text-xl"
          />

          <button
            onClick={generateLink}
            className="bg-[#a52a2a] text-white px-5 py-3 rounded-md hover:bg-red-800 transition text-lg sm:text-xl font-semibold"
          >
            লিঙ্ক তৈরি করো
          </button>
        </div>

        {generatedLink && (
          <div className="mt-10 w-full max-w-md break-words">
            <p className="mb-4 text-lg sm:text-xl">
              <strong>তোমার লিঙ্ক:</strong><br />
              <a
                href={generatedLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 underline break-words"
              >
                {generatedLink}
              </a>
            </p>

            <div className="flex flex-col items-center gap-4">
              <button
                onClick={copyToClipboard}
                className="bg-orange-400 text-white px-5 py-3 rounded-md w-full max-w-xs hover:bg-orange-500 transition text-lg sm:text-xl font-semibold"
              >
                কপি করো
              </button>

              <a
                href={generatedLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-5 py-3 rounded-md w-full max-w-xs text-center hover:bg-green-700 transition text-lg sm:text-xl font-semibold"
              >
                এখনই দেখো
              </a>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Home;
