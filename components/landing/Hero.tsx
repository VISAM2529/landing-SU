'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full shadow-md">
              <span className="text-blue-700 font-semibold text-sm">
                🎯 Your Success Partner
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Ace Your
              <span className="block mt-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                MHT-CET, JEE & NEET
              </span>
              Exams
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Practice with 10,000+ MCQs, take mock tests, and track your progress with our comprehensive exam preparation app designed for success.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <svg className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                Download on Play Store
              </a>

              <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold text-lg border-2 border-gray-200 shadow-md hover:border-blue-600 hover:shadow-lg transition-all duration-300 hover:scale-105">
                Watch Demo
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="group">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform">10K+</div>
                <div className="text-sm text-gray-600 mt-1 font-medium">MCQ Questions</div>
              </div>
              <div className="group">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform">50K+</div>
                <div className="text-sm text-gray-600 mt-1 font-medium">Active Students</div>
              </div>
              <div className="group">
                <div className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform">4.8★</div>
                <div className="text-sm text-gray-600 mt-1 font-medium">Play Store Rating</div>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Phone Mockup */}
          <div className="relative lg:block hidden">
            <div className="relative z-10">
              {/* Glow Effect Behind Phone */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-[4rem] blur-3xl opacity-30 scale-95"></div>
              
              {/* Phone Frame */}
              <div className="relative mx-auto w-[320px] h-[640px] bg-black rounded-[3.5rem] p-3 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                {/* Phone Border Highlight */}
                <div className="absolute inset-0 rounded-[3.5rem] bg-gradient-to-br from-gray-700 via-gray-800 to-black"></div>
                
                {/* Screen Container */}
                <div className="relative h-full bg-white rounded-[3rem] overflow-hidden shadow-inner">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-50 flex items-center justify-center">
                    <div className="w-16 h-1 bg-gray-800 rounded-full mt-2"></div>
                  </div>
                  
                  {/* Status Bar */}
                  <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-r from-blue-600 to-purple-600 z-40 flex items-center justify-between px-8 pt-2">
                    <span className="text-white text-xs font-semibold">9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-3 border border-white rounded-sm"></div>
                      <div className="w-3 h-3 border border-white rounded-full"></div>
                    </div>
                  </div>

                  {/* App Screenshot */}
                  <div className="relative w-full h-full">
                    <Image
                      src="/home.jpeg"
                      alt="App Screenshot"
                      fill
                      className="object-cover object-top"
                      priority
                    />
                  </div>

                  {/* Screen Overlay Effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5 pointer-events-none"></div>
                </div>

                {/* Phone Buttons */}
                <div className="absolute right-0 top-32 w-1 h-12 bg-gray-800 rounded-l-lg"></div>
                <div className="absolute right-0 top-48 w-1 h-16 bg-gray-800 rounded-l-lg"></div>
                <div className="absolute right-0 top-68 w-1 h-16 bg-gray-800 rounded-l-lg"></div>
                <div className="absolute left-0 top-40 w-1 h-8 bg-gray-800 rounded-r-lg"></div>
              </div>

              {/* Floating Elements - Enhanced */}
              <div className="absolute -top-10 -left-10 w-24 h-24 bg-yellow-400 rounded-full opacity-20 blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-pink-400 rounded-full opacity-20 blur-2xl animate-pulse animation-delay-2000"></div>
              <div className="absolute top-1/2 -left-20 w-20 h-20 bg-blue-400 rounded-full opacity-15 blur-xl animate-pulse animation-delay-1000"></div>
              
              {/* Decorative Rings */}
              <div className="absolute -top-20 -right-20 w-40 h-40 border-4 border-purple-200 rounded-full opacity-30"></div>
              <div className="absolute -bottom-20 -left-20 w-48 h-48 border-4 border-blue-200 rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}