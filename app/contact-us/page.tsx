import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <>
      <Navbar />
      <div className='mt-24'>
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      </div>
      <div className='flex items-center justify-center'>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeFAG2iAClVgzqnO6pB8mrGYi3tmq4qYH6ZP-mHZDwAuXXRrA/viewform?embedded=true" width="640" height="853">Loading…</iframe>
      </div>
    </>
  )
}

export default page