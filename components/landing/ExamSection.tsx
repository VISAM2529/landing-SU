export default function ExamSection() {
  const exams = [
    {
      name: "MHT-CET",
      fullName: "Maharashtra Common Entrance Test",
      description: "Complete preparation for Physics, Chemistry, Mathematics, and Biology with 3000+ questions.",
      subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
      color: "from-blue-500 to-blue-600",
      stats: { questions: "3000+", tests: "50+" }
    },
    {
      name: "JEE",
      fullName: "Joint Entrance Examination",
      description: "Comprehensive coverage for JEE Main & Advanced with topic-wise practice and mock tests.",
      subjects: ["Physics", "Chemistry", "Mathematics"],
      color: "from-purple-500 to-purple-600",
      stats: { questions: "4000+", tests: "60+" }
    },
    {
      name: "NEET",
      fullName: "National Eligibility cum Entrance Test",
      description: "Complete NEET preparation with MCQs covering all Biology, Physics, and Chemistry topics.",
      subjects: ["Biology", "Physics", "Chemistry"],
      color: "from-pink-500 to-pink-600",
      stats: { questions: "3500+", tests: "55+" }
    }
  ];

  return (
    <section id="exams" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Prepare for Your
            <span className="block mt-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Dream Exam
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
            Tailored content and practice materials for each competitive exam to maximize your success rate.
          </p>
        </div>

        {/* Exam Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {exams.map((exam, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Card Header */}
              <div className={`bg-gradient-to-r ${exam.color} p-8 text-white`}>
                <h3 className="text-3xl font-bold mb-2">{exam.name}</h3>
                <p className="text-sm opacity-90">{exam.fullName}</p>
              </div>

              {/* Card Body */}
              <div className="p-8">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {exam.description}
                </p>

                {/* Subjects */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Subjects Covered:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exam.subjects.map((subject, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4">
                    <div className="text-2xl font-bold text-gray-900">{exam.stats.questions}</div>
                    <div className="text-sm text-gray-600 mt-1">Questions</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4">
                    <div className="text-2xl font-bold text-gray-900">{exam.stats.tests}</div>
                    <div className="text-sm text-gray-600 mt-1">Mock Tests</div>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors">
                  Start Practicing
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">10K+</div>
              <div className="text-gray-600">Total Questions</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">165+</div>
              <div className="text-gray-600">Mock Tests</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">100%</div>
              <div className="text-gray-600">Updated Syllabus</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}