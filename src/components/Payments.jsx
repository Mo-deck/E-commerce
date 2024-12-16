import React from 'react'

const Payments = () => {
  return (
    <div className="lg:w-1/3">
        <div className="border p-4 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Choose Payment Method</h2>
            <div className="space-y-4">
                <label htmlFor="" className="flex items-center space-x-2">
                    <input name="Payment" type="radio" className="text-pink-600" />
                    <span>Card Payment</span>
                </label>
                <label htmlFor="" className="flex items-center space-x-2">
                    <input name="Payment" type="radio" className="text-pink-600" />
                    <span>Cash Delivery</span>
                </label>
            </div>
            
        </div>
    </div>
  )
}

export default Payments