'use client'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const Navbar = () => {
  return (
    <nav className="bg-black text-white py-4 px-4 md:px-16 fixed top-0 left-0 right-0 z-50 border-b-2 border-white">
      <div className="flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex flex-col items-center text-center">
          <h1 className="text-2xl font-extrabold">CEP</h1>
          <p className="text-[10px]">Community Engagement Program</p>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link href="/" className="hover:text-gray-300 font-bold text-lg">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-300 font-bold text-lg">
            About
          </Link>
          <Link href="/contact-us" className="hover:text-gray-300 font-bold text-lg">
            Contact Us
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex space-x-3">
          <Button
            className="bg-yellow-500 text-black font-semibold hover:bg-yellow-600 px-4 py-2"
            onClick={() => window.open(`https://www.google.com/maps/search/${encodeURIComponent("old age homes near me")}`, "_blank")}
          >
            Find Old Age Homes
          </Button>
          <Button
            className="bg-yellow-500 text-black font-semibold hover:bg-yellow-600 px-4 py-2"
            onClick={() => window.open(`https://www.google.com/maps/search/${encodeURIComponent("orphanages near me")}`, "_blank")}
          >
            Find Orphanages
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
