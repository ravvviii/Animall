export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-100">
      <div className="bg-white rounded-3xl shadow-2xl border border-green-100 p-8 max-w-md w-full text-center">
        <div className="flex justify-center mb-4">
          {/* Celebration Icon (SVG) */}
          <svg
            className="w-16 h-16 text-green-500"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="#bbf7d0" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4"
              stroke="green"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
        <h1 className="text-3xl font-extrabold text-green-600 mb-2 animate-bounce">
          Purchase Successful!
        </h1>
        <p className="text-lg text-gray-700 mb-6">Your booster plan is now active.</p>
        <a
          href="/"
          className="inline-block bg-blue-600  hover:bg-green-600  text-white px-6 py-3 rounded-xl font-bold shadow transition"
        >
          Go to main page
        </a>
      </div>
    </div>
  )
}
