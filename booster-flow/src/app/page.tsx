"use client"
import { useRouter } from 'next/navigation'

const plans = [
  { id: 1, days: 3, price: 99, benefit: '2X more views' },
  { id: 2, days: 10, price: 249, benefit: '3X more visibility' },
  { id: 3, days: 30, price: 499, benefit: 'Fully Visible' },
]

export default function HomePage() {
  const router = useRouter()

  const handleSelect = (plan: { price: number; days: number; benefit: string }) => {
  router.push(
    `/coupon?price=${plan.price}&days=${plan.days}&benefit=${encodeURIComponent(plan.benefit)}`
  )
}


  return (
   <main className="flex flex-col justify-center items-center min-h-screen p-4 bg-gradient-to-br from-gray-50 to-blue-100">
  <h1 className="text-3xl font-extrabold mb-8 text-center tracking-tight text-blue-900">
    Choose a Booster Plan
  </h1>
  <div className="space-y-6 w-full max-w-md">
    {plans.map(plan => (
      <button
        key={plan.id}
        onClick={() => handleSelect(plan)}
        className="w-full group border-2 border-transparent rounded-2xl p-6 shadow-lg bg-white hover:border-blue-400 hover:shadow-xl transition-all duration-200 cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-200"
      >
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-blue-800">
            ₹{plan.price}
          </span>
          <span className="text-2xl font-bold text-red-400 mx-2">------------</span>
          <span className="text-sm font-medium text-gray-500">
            {plan.days} Days
          </span>
        </div>
        <div className="mt-2 text-gray-600 text-base">{plan.benefit}</div>
      </button>
    ))}
  </div>
</main>


  )
}
