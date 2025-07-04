'use client'
import { useRouter, useSearchParams } from 'next/navigation'

export default function ConfirmPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const price = searchParams.get('price')
  const duration = searchParams.get('duration')
  const benefit = searchParams.get('benefit')
  const basePrice = searchParams.get('basePrice')

  const handleConfirm = () => {
    router.push('/success')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-100">
      <div className="bg-white rounded-3xl shadow-2xl border border-blue-100 p-8 max-w-md w-full">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-blue-900 tracking-tight">
          🛒 Confirm Purchase
        </h2>
        {/* Plan Details Card */}
        <div className="bg-blue-50 rounded-xl p-4 mb-8 shadow flex flex-col items-center">
          <div className="text-lg font-semibold text-blue-800 mb-1">
            {duration} Days Booster
          </div>
          <div className="text-gray-600 mb-2">{benefit}</div>
          <div className="text-sm text-gray-400 line-through mb-1">
            Original: ₹{basePrice}
          </div>
          <div className="text-2xl font-bold text-green-700">
            Now: ₹{price}
          </div>
        </div>
        <button
          onClick={handleConfirm}
          className="w-full bg-blue-500 hover:bg-red-600  text-white py-3 rounded-xl text-lg font-bold shadow-lg transition"
        >
          Confirm Purchase
        </button>
      </div>
    </div>
  )
}
