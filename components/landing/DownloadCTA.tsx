import Image from 'next/image';

export default function DownloadCTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full opacity-10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-lg rounded-full">
              <span className="text-white font-medium text-sm">
                🎉 Free Download
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
              Download Now & Start Your
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
                Success Journey
              </span>
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed">
              Join 50,000+ students who are preparing for MHT-CET, JEE, and NEET with our comprehensive MCQ practice app.
            </p>

            {/* Features List */}
            <div className="space-y-4">
              {[
                "10,000+ MCQ questions with detailed solutions",
                "165+ mock tests with real exam patterns",
                "Performance analytics and progress tracking",
                "Offline mode for practice anywhere"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-200">{feature}</span>
                </div>
              ))}
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-4 bg-white text-gray-900 rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all"
              >
                <svg className="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-600">GET IT ON</div>
                  <div className="text-lg font-bold">Google Play</div>
                </div>
              </a>

              <div className="inline-flex items-center justify-center px-6 py-4 bg-white/10 backdrop-blur-lg text-white rounded-xl font-semibold border border-white/20">
                <div className="text-left">
                  <div className="text-xs text-gray-300">Version 2.0</div>
                  <div className="text-lg font-bold">Latest Release</div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold">4.8★</div>
                <div className="text-sm text-gray-400">Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold">50K+</div>
                <div className="text-sm text-gray-400">Downloads</div>
              </div>
              <div>
                <div className="text-3xl font-bold">10K+</div>
                <div className="text-sm text-gray-400">Reviews</div>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Phone Preview */}
          <div className="relative lg:block hidden">
            <div className="relative z-10">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-[4rem] blur-3xl opacity-20 scale-95 animate-pulse"></div>
              
              {/* Phone Frame */}
              <div className="relative mx-auto w-[320px] h-[640px] bg-black rounded-[3.5rem] p-3 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                {/* Phone Border */}
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

                  {/* App Screenshot - Test Screen */}
                  <div className="relative w-full h-full bg-gradient-to-br from-blue-500 to-purple-600">
                    <Image
                      src="/test.jpeg"
                      alt="App Test Screen"
                      fill
                      className="object-cover object-top"
                      priority
                    />
                  </div>

                  {/* Screen Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5 pointer-events-none"></div>
                </div>

                {/* Phone Buttons */}
                <div className="absolute right-0 top-32 w-1 h-12 bg-gray-800 rounded-l-lg"></div>
                <div className="absolute right-0 top-48 w-1 h-16 bg-gray-800 rounded-l-lg"></div>
                <div className="absolute right-0 top-68 w-1 h-16 bg-gray-800 rounded-l-lg"></div>
                <div className="absolute left-0 top-40 w-1 h-8 bg-gray-800 rounded-r-lg"></div>
              </div>

              {/* Floating Decorative Elements */}
              <div className="absolute -top-10 -left-10 w-24 h-24 bg-yellow-400 rounded-full opacity-20 blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-pink-400 rounded-full opacity-20 blur-2xl animate-pulse animation-delay-2000"></div>
              <div className="absolute top-1/2 -right-20 w-20 h-20 bg-blue-400 rounded-full opacity-15 blur-xl animate-pulse animation-delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}