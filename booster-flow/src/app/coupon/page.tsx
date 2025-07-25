'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { Suspense, useState } from 'react'

function CouponPageInner() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const basePrice = Number(searchParams.get('price'))
  const days = searchParams.get('days') ?? ''
  const benefit = searchParams.get('benefit') ?? ''

  const [coupon, setCoupon] = useState('')
  const [discountedPrice, setDiscountedPrice] = useState(basePrice)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const applyCoupon = () => {
    if (coupon.trim().toUpperCase() === 'SAVE50') {
      setDiscountedPrice(basePrice / 2)
      setError('')
      setSuccess(true)
    } else {
      setError('Invalid coupon code')
      setDiscountedPrice(basePrice)
      setSuccess(false)
    }
  }

  const proceed = () => {
    router.push(
      `/confirm?price=${discountedPrice}&days=${days}&benefit=${encodeURIComponent(benefit)}&basePrice=${basePrice}`
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-100 px-2">
      <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 max-w-md w-full border border-blue-100">
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 text-center text-blue-900 tracking-tight">
          🎁 Apply Your Coupon
        </h2>
        
        <div className="flex flex-col sm:flex-row items-stretch mb-4 gap-2">
          <input
            type="text"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            placeholder="Enter coupon code"
            className="flex-1 border-2 border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 rounded-xl sm:rounded-l-xl sm:rounded-r-none p-3 outline-none text-lg transition text-black"
          />
          <button
            onClick={applyCoupon}
            className="bg-blue-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl sm:rounded-l-none sm:rounded-r-xl font-semibold shadow transition w-full sm:w-auto"
          >
            Apply
          </button>
        </div>
        {error && (
          <div className="bg-red-100 text-red-600 rounded-lg px-4 py-2 mb-4 text-center font-medium animate-shake">
            {error}
          </div>
        )}
        {success && (
          <div className="bg-green-100 text-green-700 rounded-lg px-4 py-2 mb-4 text-center font-medium animate-bounce">
            Coupon applied! 🎉
          </div>
        )}
        <div className="flex items-center justify-between mt-6">
          <span className="text-lg text-gray-500 font-medium">Final Price:</span>
          <span className="text-2xl font-bold text-green-700">
            ₹{discountedPrice}
          </span>
        </div>
        <button
          onClick={proceed}
          className="w-full mt-8 bg-blue-500 hover:bg-red-600 text-white py-3 rounded-xl text-lg font-bold shadow-lg transition"
        >
          Continue
        </button>
      </div>
    </div>
  )
}

export default function CouponPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CouponPageInner />
    </Suspense>
  )
}
``