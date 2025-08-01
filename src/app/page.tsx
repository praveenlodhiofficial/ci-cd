'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [nextYear, setNextYear] = useState(currentYear + 1);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const newYear = new Date(nextYear, 0, 1);
      const difference = newYear.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        // New Year has arrived!
        setCurrentYear(nextYear);
        setNextYear(nextYear + 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [nextYear]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          >
            <div className="w-1 h-1 bg-yellow-300 rounded-full opacity-60"></div>
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="text-center z-10 relative">
        {/* Happy New Year Text */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 animate-bounce">
            🎉
          </h1>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
            Happy New Year
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold text-yellow-300 mb-8">
            {nextYear}!
          </h2>
        </div>

        {/* Countdown Timer */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="text-3xl md:text-4xl font-bold text-white">{timeLeft.days}</div>
            <div className="text-sm text-yellow-200">Days</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="text-3xl md:text-4xl font-bold text-white">{timeLeft.hours}</div>
            <div className="text-sm text-yellow-200">Hours</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="text-3xl md:text-4xl font-bold text-white">{timeLeft.minutes}</div>
            <div className="text-sm text-yellow-200">Minutes</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="text-3xl md:text-4xl font-bold text-white">{timeLeft.seconds}</div>
            <div className="text-sm text-yellow-200">Seconds</div>
          </div>
        </div>

        {/* Message */}
        <div className="max-w-2xl mx-auto">
          <p className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed">
            As we bid farewell to {currentYear} and welcome {nextYear}, 
            may this new year bring you joy, success, and countless beautiful moments. 
            Here's to new beginnings and amazing adventures ahead! ✨
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-2xl">
            <span className="animate-pulse">🎊</span>
            <span className="animate-pulse" style={{animationDelay: '0.5s'}}>🎆</span>
            <span className="animate-pulse" style={{animationDelay: '1s'}}>🎇</span>
            <span className="animate-pulse" style={{animationDelay: '1.5s'}}>✨</span>
            <span className="animate-pulse" style={{animationDelay: '2s'}}>🌟</span>
          </div>
        </div>

        {/* Resolution Section */}
        <div className="mt-12 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
          <h3 className="text-xl md:text-2xl font-bold text-yellow-300 mb-4">
            New Year Resolutions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm md:text-base">
            <div className="text-white/80">
              <span className="text-yellow-300">🎯</span> Set meaningful goals
            </div>
            <div className="text-white/80">
              <span className="text-yellow-300">💪</span> Stay healthy & active
            </div>
            <div className="text-white/80">
              <span className="text-yellow-300">📚</span> Learn something new
            </div>
            <div className="text-white/80">
              <span className="text-yellow-300">❤️</span> Spread kindness
            </div>
            <div className="text-white/80">
              <span className="text-yellow-300">🌍</span> Make a difference
            </div>
            <div className="text-white/80">
              <span className="text-yellow-300">🎨</span> Be creative
            </div>
          </div>
        </div>
      </div>

      {/* Floating celebration elements */}
      <div className="absolute top-10 left-10 animate-bounce">
        <span className="text-4xl">🎈</span>
      </div>
      <div className="absolute top-20 right-20 animate-bounce" style={{animationDelay: '1s'}}>
        <span className="text-4xl">🎊</span>
      </div>
      <div className="absolute bottom-20 left-20 animate-bounce" style={{animationDelay: '2s'}}>
        <span className="text-4xl">🎆</span>
      </div>
      <div className="absolute bottom-10 right-10 animate-bounce" style={{animationDelay: '0.5s'}}>
        <span className="text-4xl">✨</span>
      </div>
    </div>
  );
}
