'use client';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Priya Sharma",
      exam: "NEET 2024",
      score: "AIR 245",
      image: "PS",
      rating: 5,
      text: "This app was a game-changer for my NEET preparation. The mock tests helped me understand the exam pattern perfectly. Highly recommended!"
    },
    {
      name: "Rahul Deshmukh",
      exam: "MHT-CET 2024",
      score: "99.8 Percentile",
      image: "RD",
      rating: 5,
      text: "The subject-wise practice and detailed solutions helped me identify my weak areas. Got excellent percentile in MHT-CET!"
    },
    {
      name: "Ananya Patel",
      exam: "JEE Main 2024",
      score: "99.2 Percentile",
      image: "AP",
      rating: 5,
      text: "Amazing collection of questions with detailed explanations. The performance analytics feature really helped me track my progress."
    },
    {
      name: "Aditya Singh",
      exam: "NEET 2024",
      score: "AIR 512",
      image: "AS",
      rating: 5,
      text: "Best app for NEET preparation! The offline mode was very helpful during my travels. Thank you for this wonderful platform."
    },
    {
      name: "Sneha Kulkarni",
      exam: "MHT-CET 2024",
      score: "98.5 Percentile",
      image: "SK",
      rating: 5,
      text: "The mock tests are exactly like the real exam. It boosted my confidence and helped me manage time during the actual exam."
    },
    {
      name: "Rohan Mehta",
      exam: "JEE Advanced 2024",
      score: "AIR 1250",
      image: "RM",
      rating: 5,
      text: "Comprehensive question bank covering all topics. The instant feedback and explanations made my preparation very effective."
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            What Our Students
            <span className="block mt-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Are Saying
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
            Real success stories from students who achieved their goals with our app
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-6">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Student Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.exam}</div>
                  <div className="text-sm font-medium text-blue-600">{testimonial.score}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl mb-2">🏆</div>
              <div className="font-semibold text-gray-900">Top Rated</div>
              <div className="text-sm text-gray-600 mt-1">4.8 Star Rating</div>
            </div>
            <div>
              <div className="text-3xl mb-2">✅</div>
              <div className="font-semibold text-gray-900">Verified</div>
              <div className="text-sm text-gray-600 mt-1">Real Students</div>
            </div>
            <div>
              <div className="text-3xl mb-2">📚</div>
              <div className="font-semibold text-gray-900">Updated</div>
              <div className="text-sm text-gray-600 mt-1">Latest Syllabus</div>
            </div>
            <div>
              <div className="text-3xl mb-2">💯</div>
              <div className="font-semibold text-gray-900">Success</div>
              <div className="text-sm text-gray-600 mt-1">95% Pass Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}