'use client'

import Link from 'next/link'
import { Search } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold tracking-tight text-infratel-red">
                Infratel
              </span>
              <span className="text-xs text-gray-500 ml-1 mt-2">.sg</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/plans"
              className="text-sm font-medium text-gray-700 hover:text-infratel-red transition-colors"
            >
              Mobile
            </Link>
            <Link
              href="/broadband"
              className="text-sm font-medium text-gray-700 hover:text-infratel-red transition-colors"
            >
              Broadband
            </Link>
            <Link
              href="/roaming"
              className="text-sm font-medium text-gray-700 hover:text-infratel-red transition-colors"
            >
              Roaming
            </Link>
            <Link
              href="/business"
              className="text-sm font-medium text-gray-700 hover:text-infratel-red transition-colors"
            >
              Business
            </Link>
            <Link
              href="/rewards"
              className="text-sm font-medium text-gray-700 hover:text-infratel-red transition-colors"
            >
              Rewards
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <button
              className="p-2 text-gray-600 hover:text-infratel-red transition-colors"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <Link
              href="/login"
              className="hidden sm:inline-flex items-center px-4 py-2 border border-infratel-red text-sm font-medium rounded-md text-infratel-red hover:bg-infratel-red hover:text-white transition-colors"
            >
              Log In
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-infratel-red"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/plans"
                className="text-base font-medium text-gray-700 hover:text-infratel-red"
                onClick={() => setIsMenuOpen(false)}
              >
                Mobile
              </Link>
              <Link
                href="/broadband"
                className="text-base font-medium text-gray-700 hover:text-infratel-red"
                onClick={() => setIsMenuOpen(false)}
              >
                Broadband
              </Link>
              <Link
                href="/roaming"
                className="text-base font-medium text-gray-700 hover:text-infratel-red"
                onClick={() => setIsMenuOpen(false)}
              >
                Roaming
              </Link>
              <Link
                href="/business"
                className="text-base font-medium text-gray-700 hover:text-infratel-red"
                onClick={() => setIsMenuOpen(false)}
              >
                Business
              </Link>
              <Link
                href="/rewards"
                className="text-base font-medium text-gray-700 hover:text-infratel-red"
                onClick={() => setIsMenuOpen(false)}
              >
                Rewards
              </Link>
              <Link
                href="/login"
                className="inline-flex items-center justify-center px-4 py-2 border border-infratel-red text-base font-medium rounded-md text-infratel-red hover:bg-infratel-red hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Log In
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
