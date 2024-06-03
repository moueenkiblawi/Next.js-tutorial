"use client";
import { useState } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'

const PopUp = dynamic(() => import('../components/PopUp'), {
  ssr: true,
})

const Page = () => {
  const [showPopUp, setShowPopUp] = useState(false)

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="space-x-4">
        <button
          onClick={() => setShowPopUp(true)}
          className="px-4 py-2 text-white bg-blue-500 rounded"
        >
          Open Pop-Up
        </button>
        <Link href="/animation">
          <p className="px-4 py-2 text-white bg-green-500 rounded">
            Go to Animation Page
          </p>
        </Link>
      </div>
      {showPopUp && (
        <div className="fixed inset-0 flex  items-center justify-center bg-black bg-opacity-60">
          <PopUp onClose={() => setShowPopUp(false)} />
        </div>
      )}

    
    </div>
  )
}

export default Page
